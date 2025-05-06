import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Droplets, 
  Recycle, 
  Bus, 
  Ban, 
  TreePine, 
  Heart, 
  CheckCircle 
} from 'lucide-react';
import { QuizQuestion } from '../types';

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual das seguintes ações NÃO ajuda a reduzir a poluição do ar?",
    options: [
      "Usar transporte público",
      "Fazer compostagem",
      "Queimar lixo doméstico",
      "Economizar energia elétrica"
    ],
    correctAnswer: 2,
    explanation: "A queima de lixo doméstico libera dioxinas e outros poluentes tóxicos no ar, contribuindo para a poluição atmosférica e problemas respiratórios."
  },
  {
    id: 2,
    question: "Aproximadamente quanto tempo um plástico comum leva para se decompor na natureza?",
    options: [
      "10 anos",
      "50 anos",
      "100 anos",
      "400 anos ou mais"
    ],
    correctAnswer: 3,
    explanation: "Plásticos comuns como garrafas PET podem levar 400 anos ou mais para se decompor completamente na natureza, causando sérios impactos ambientais."
  },
  {
    id: 3,
    question: "Qual destas ações contribui MAIS para a economia de água?",
    options: [
      "Tomar banhos mais curtos",
      "Reutilizar a água da máquina de lavar",
      "Fechar a torneira ao escovar os dentes",
      "Usar descargas mais econômicas"
    ],
    correctAnswer: 1,
    explanation: "A reutilização da água da máquina de lavar para limpar calçadas ou regar plantas pode economizar até 120 litros por lavagem, sendo a opção com maior impacto."
  },
  {
    id: 4,
    question: "Qual é o principal gás do efeito estufa emitido por atividades humanas?",
    options: [
      "Oxigênio (O₂)",
      "Dióxido de carbono (CO₂)",
      "Nitrogênio (N₂)",
      "Hidrogênio (H₂)"
    ],
    correctAnswer: 1,
    explanation: "O dióxido de carbono (CO₂) é o principal gás de efeito estufa emitido por atividades humanas, principalmente pela queima de combustíveis fósseis."
  },
  {
    id: 5,
    question: "Qual destas NÃO é uma forma adequada de descarte de pilhas e baterias?",
    options: [
      "Entregar em pontos de coleta específicos",
      "Devolver ao fabricante ou revendedor",
      "Jogar no lixo comum",
      "Levar a um ecoponto municipal"
    ],
    correctAnswer: 2,
    explanation: "Pilhas e baterias contêm metais pesados que podem contaminar o solo e a água. O descarte correto deve ser feito em pontos de coleta específicos, nunca no lixo comum."
  }
];

const HowToHelpPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  
  useEffect(() => {
    document.title = 'Como Ajudar? | Preserva Brasil';
  }, []);
  
  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setShowExplanation(true);
  };
  
  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowResults(false);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };
  
  const startQuiz = () => {
    setQuizStarted(true);
    resetQuiz();
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-forest-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Como Ajudar o Meio Ambiente?</h1>
            <p className="text-xl opacity-90">
              Descubra ações práticas que você pode incorporar ao seu dia a dia para contribuir 
              com a conservação ambiental e a redução da poluição.
            </p>
          </div>
        </div>
      </section>
      
      {/* Practical Tips */}
      <section className="py-12">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Dicas Práticas para o Dia a Dia</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Pequenas mudanças de hábito podem ter um grande impacto na redução da nossa pegada ecológica 
              e na preservação dos recursos naturais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Tip 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-forest-green/10 mb-4">
                  <Lightbulb className="w-7 h-7 text-forest-green" />
                </span>
                <h3 className="text-xl font-bold">Economize Energia</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Troque lâmpadas por modelos LED</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Desligue aparelhos em standby</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use eletrodomésticos eficientes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Aproveite a luz natural</span>
                </li>
              </ul>
            </div>
            
            {/* Tip 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-water-blue/10 mb-4">
                  <Droplets className="w-7 h-7 text-water-blue" />
                </span>
                <h3 className="text-xl font-bold">Economize Água</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-water-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Repare vazamentos rapidamente</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-water-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Tome banhos mais curtos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-water-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reutilize água da chuva</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-water-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use descargas econômicas</span>
                </li>
              </ul>
            </div>
            
            {/* Tip 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-earth-brown/10 mb-4">
                  <Recycle className="w-7 h-7 text-earth-brown" />
                </span>
                <h3 className="text-xl font-bold">Recicle e Reutilize</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-earth-brown mr-2 mt-0.5 flex-shrink-0" />
                  <span>Separe o lixo reciclável</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-earth-brown mr-2 mt-0.5 flex-shrink-0" />
                  <span>Faça compostagem de orgânicos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-earth-brown mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use embalagens reutilizáveis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-earth-brown mr-2 mt-0.5 flex-shrink-0" />
                  <span>Doe itens que não usa mais</span>
                </li>
              </ul>
            </div>
            
            {/* Tip 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-forest-green/10 mb-4">
                  <Bus className="w-7 h-7 text-forest-green" />
                </span>
                <h3 className="text-xl font-bold">Transporte Consciente</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use transporte público</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Prefira bicicleta para trajetos curtos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Faça carona compartilhada</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mantenha seu veículo regulado</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Tip 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-error/10 mr-4">
                  <Ban className="w-6 h-6 text-error" />
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reduza o Consumo de Plásticos</h3>
                  <p className="text-gray-600">
                    Plásticos de uso único são uma das principais fontes de poluição nos oceanos e levam 
                    centenas de anos para se decompor.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use sacolas reutilizáveis para compras</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Substitua canudos plásticos por opções reutilizáveis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Prefira garrafas e copos permanentes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Evite produtos com microplásticos</span>
                </li>
              </ul>
            </div>
            
            {/* Tip 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest-green/10 mr-4">
                  <TreePine className="w-6 h-6 text-forest-green" />
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Participe de Ações Coletivas</h3>
                  <p className="text-gray-600">
                    Além das ações individuais, o envolvimento em iniciativas coletivas amplifica o impacto 
                    positivo na conservação ambiental.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Participe de mutirões de limpeza em praias e rios</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Apoie projetos de plantio de árvores</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Seja voluntário em ONGs ambientais</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-forest-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Divulgue conhecimento sobre conservação</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quiz Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Teste seus Conhecimentos</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Quanto você sabe sobre conservação ambiental e práticas sustentáveis? 
              Responda ao quiz e descubra!
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {!quizStarted ? (
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-green text-white text-2xl font-bold mb-6">
                  ?
                </div>
                <h3 className="text-2xl font-bold mb-4">Quiz de Conservação Ambiental</h3>
                <p className="text-gray-600 mb-8">
                  Responda 5 perguntas para testar seu conhecimento sobre poluição e conservação ambiental.
                </p>
                <button
                  onClick={startQuiz}
                  className="btn btn-primary"
                >
                  Iniciar Quiz
                </button>
              </div>
            ) : showResults ? (
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Resultados do Quiz</h3>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-forest-green mb-2">
                    {score} / {quizQuestions.length}
                  </div>
                  <p className="text-gray-600">
                    {score === quizQuestions.length ? 
                      'Excelente! Você está muito bem informado sobre conservação ambiental!' :
                      score >= 3 ? 
                      'Bom trabalho! Você tem um bom conhecimento sobre questões ambientais!' :
                      'Continue aprendendo! A conservação ambiental é um processo contínuo de aprendizado.'}
                  </p>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={resetQuiz}
                    className="btn btn-primary"
                  >
                    Tentar Novamente
                  </button>
                  <Link to="/blog" className="btn btn-outline">
                    Ler Artigos Relacionados
                  </Link>
                </div>
              </div>
            ) : (
              <div className="p-8">
                <div className="mb-6 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">
                    Pergunta {currentQuestion + 1} de {quizQuestions.length}
                  </span>
                  <span className="text-sm font-medium text-forest-green">
                    Pontuação: {score}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-6">
                  {quizQuestions[currentQuestion].question}
                </h3>
                
                <div className="space-y-3 mb-8">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                      className={`w-full text-left p-4 rounded-lg border transition-colors duration-200 ${
                        selectedAnswer === index 
                          ? index === quizQuestions[currentQuestion].correctAnswer
                            ? 'bg-success/10 border-success text-success'
                            : 'bg-error/10 border-error text-error'
                          : showExplanation && index === quizQuestions[currentQuestion].correctAnswer
                            ? 'bg-success/10 border-success text-success'
                            : 'border-gray-200 hover:border-forest-green'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                {showExplanation && (
                  <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
                    <h4 className="font-bold text-blue-700 mb-2">Explicação:</h4>
                    <p className="text-blue-800">
                      {quizQuestions[currentQuestion].explanation}
                    </p>
                  </div>
                )}
                
                {showExplanation && (
                  <div className="text-right">
                    <button
                      onClick={handleNextQuestion}
                      className="btn btn-primary"
                    >
                      {currentQuestion < quizQuestions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultados'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Support Organizations */}
      <section className="py-12">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apoie Organizações Ambientais</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Diversas organizações trabalham ativamente na proteção do meio ambiente. 
              Seu apoio, seja financeiro ou como voluntário, faz a diferença.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/3738358/pexels-photo-3738358.jpeg" 
                alt="Voluntários em ação" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Seja Voluntário</h3>
                <p className="text-gray-600 mb-4">
                  Doe seu tempo e habilidades para projetos de conservação, educação ambiental, 
                  plantio de árvores ou monitoramento de espécies.
                </p>
                <a 
                  href="https://www.sosma.org.br/iniciativa/seja-voluntario/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-forest-green font-medium hover:underline"
                >
                  <Heart className="w-5 h-5 mr-2" /> Encontrar oportunidades
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg" 
                alt="Doação para conservação" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Faça uma Doação</h3>
                <p className="text-gray-600 mb-4">
                  Contribua financeiramente com organizações que realizam trabalhos de conservação e 
                  restauração ambiental no Brasil e no mundo.
                </p>
                <a 
                  href="https://www.wwf.org.br/participe/doe/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-forest-green font-medium hover:underline"
                >
                  <Heart className="w-5 h-5 mr-2" /> Apoiar projetos
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/3850213/pexels-photo-3850213.jpeg" 
                alt="Adoção de área" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Adote uma Área</h3>
                <p className="text-gray-600 mb-4">
                  Participe de programas de adoção de áreas para reflorestamento ou conservação, 
                  contribuindo com a recuperação de ecossistemas.
                </p>
                <a 
                  href="https://www.sosma.org.br/iniciativa/florestas-do-futuro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-forest-green font-medium hover:underline"
                >
                  <Heart className="w-5 h-5 mr-2" /> Conhecer programas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-forest-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Cada ação importa</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A soma de pequenos gestos individuais pode resultar em mudanças significativas. 
            Comece hoje mesmo a fazer sua parte pela conservação ambiental.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contato" className="btn bg-white text-forest-green hover:bg-white/90">
              Entre em contato
            </Link>
            <Link to="/blog" className="btn border-2 border-white hover:bg-white hover:text-forest-green transition-colors">
              Leia nosso blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToHelpPage;