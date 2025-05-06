import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Wind, Mountain, Volume2, Eye } from 'lucide-react';
import { PollutionType } from '../types';

const pollutionTypes: PollutionType[] = [
  {
    id: "air",
    title: "Poluição do Ar",
    description: "A poluição do ar é causada pela liberação de substâncias nocivas na atmosfera, incluindo gases, partículas e aerossóis que prejudicam a saúde humana e o meio ambiente.",
    image: "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg",
    causes: [
      "Queimadas e incêndios florestais",
      "Emissões de veículos e indústrias",
      "Geração de energia com combustíveis fósseis",
      "Uso de produtos químicos voláteis"
    ],
    consequences: [
      "Problemas respiratórios e cardiovasculares",
      "Chuva ácida que danifica florestas e estruturas",
      "Contribuição para o aquecimento global",
      "Redução da visibilidade e formação de smog"
    ],
    stats: {
      figure: "500 µg/m³",
      description: "Durante queimadas na Amazônia, níveis de material particulado (MP10) chegaram a 500 µg/m³, 25 vezes acima do limite ideal.",
      source: "WRI Brasil"
    }
  },
  {
    id: "water",
    title: "Poluição da Água",
    description: "A poluição da água ocorre quando corpos d'água são contaminados por substâncias que alteram sua qualidade, tornando-a imprópria para consumo e prejudicial aos ecossistemas aquáticos.",
    image: "https://images.pexels.com/photos/2409022/pexels-photo-2409022.jpeg",
    causes: [
      "Despejo de efluentes industriais não tratados",
      "Produtos químicos agrícolas (fertilizantes e pesticidas)",
      "Derramamentos de petróleo",
      "Descarte inadequado de lixo, especialmente plásticos"
    ],
    consequences: [
      "Morte de peixes e outros organismos aquáticos",
      "Proliferação de algas tóxicas (eutrofização)",
      "Contaminação da água potável",
      "Doenças transmitidas pela água"
    ],
    stats: {
      figure: "8 milhões",
      description: "Aproximadamente 8 milhões de toneladas de plástico são despejadas nos oceanos todos os anos.",
      source: "IUCN"
    }
  },
  {
    id: "soil",
    title: "Poluição do Solo",
    description: "A poluição do solo envolve a contaminação da camada superficial da terra com substâncias químicas ou resíduos que degradam sua qualidade e fertilidade.",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    causes: [
      "Uso excessivo de agrotóxicos e fertilizantes",
      "Descarte inadequado de resíduos industriais",
      "Vazamento de produtos químicos",
      "Mineração e práticas agrícolas não sustentáveis"
    ],
    consequences: [
      "Redução da fertilidade e produtividade do solo",
      "Contaminação de águas subterrâneas",
      "Impactos na cadeia alimentar",
      "Perda de biodiversidade do solo"
    ],
    stats: {
      figure: "3 milhões",
      description: "Estima-se que existam mais de 3 milhões de áreas contaminadas na Europa que precisam de remediação.",
      source: "Agência Europeia do Ambiente"
    }
  },
  {
    id: "noise",
    title: "Poluição Sonora",
    description: "A poluição sonora consiste em níveis excessivos de ruído que perturbam o meio ambiente, a vida selvagem e a qualidade de vida humana.",
    image: "https://images.pexels.com/photos/159206/traffic-car-vehicle-fog-159206.jpeg",
    causes: [
      "Tráfego urbano e rodoviário",
      "Atividades industriais",
      "Construção civil",
      "Eventos com som alto"
    ],
    consequences: [
      "Perda auditiva em humanos",
      "Estresse, distúrbios do sono e problemas cardiovasculares",
      "Alteração de comportamento em animais",
      "Interferência na comunicação dos animais marinhos"
    ],
    stats: {
      figure: "68 dB",
      description: "Em grandes cidades brasileiras, o nível médio de ruído ultrapassa 68 dB, acima do limite de 55 dB recomendado pela OMS.",
      source: "IBAMA"
    }
  },
  {
    id: "visual",
    title: "Poluição Visual",
    description: "A poluição visual se refere ao excesso de elementos visuais artificiais que causam desordem estética no ambiente, afetando a paisagem natural e urbana.",
    image: "https://images.pexels.com/photos/940326/pexels-photo-940326.jpeg",
    causes: [
      "Excesso de outdoors e propaganda",
      "Fiação elétrica exposta",
      "Pichações e vandalismo",
      "Construções irregulares e desordenadas"
    ],
    consequences: [
      "Desvalorização da paisagem natural e cultural",
      "Distração no trânsito, potencializando acidentes",
      "Impacto no bem-estar psicológico",
      "Perda de identidade local"
    ],
    stats: {
      figure: "70%",
      description: "Cerca de 70% dos moradores de áreas urbanas densamente poluídas visualmente relatam maior nível de estresse.",
      source: "Conselho de Arquitetura e Urbanismo"
    }
  }
];

const PollutionPage: React.FC = () => {
  const [activePollution, setActivePollution] = useState<string>("air");
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const currentPollution = pollutionTypes.find(p => p.id === activePollution) || pollutionTypes[0];
  
  useEffect(() => {
    document.title = 'O que é Poluição? | Preserva Brasil';
  }, []);
  
  const handlePollutionChange = (id: string) => {
    if (id !== activePollution) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActivePollution(id);
        setIsTransitioning(false);
      }, 300);
    }
  };
  
  const getIcon = (id: string) => {
    switch (id) {
      case 'air':
        return <Wind className="w-6 h-6" />;
      case 'water':
        return <Droplets className="w-6 h-6" />;
      case 'soil':
        return <Mountain className="w-6 h-6" />;
      case 'noise':
        return <Volume2 className="w-6 h-6" />;
      case 'visual':
        return <Eye className="w-6 h-6" />;
      default:
        return <Wind className="w-6 h-6" />;
    }
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-forest-green text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">O que é Poluição Ambiental?</h1>
            <p className="text-xl opacity-90">
              Alteração prejudicial no meio ambiente causada por substâncias ou energia em níveis que afetam 
              a saúde humana, a biodiversidade e os ecossistemas.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-20">
                <h3 className="text-lg font-bold mb-4">Tipos de Poluição</h3>
                <ul className="space-y-2">
                  {pollutionTypes.map((pollution) => (
                    <li key={pollution.id}>
                      <button 
                        onClick={() => handlePollutionChange(pollution.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-colors ${
                          activePollution === pollution.id 
                            ? 'bg-forest-green text-white' 
                            : 'bg-white hover:bg-gray-100'
                        }`}
                      >
                        <span className="mr-3">
                          {getIcon(pollution.id)}
                        </span>
                        {pollution.title}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link 
                    to="/conservacao" 
                    className="btn btn-primary w-full"
                  >
                    Saiba sobre Conservação
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <div className="mb-8">
                  <img 
                    src={currentPollution.image} 
                    alt={currentPollution.title} 
                    className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
                  />
                  <h2 className="text-3xl font-bold mb-4">{currentPollution.title}</h2>
                  <p className="text-gray-700 text-lg mb-6">{currentPollution.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Causes */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-4 text-forest-green">Causas Comuns</h3>
                    <ul className="space-y-3">
                      {currentPollution.causes.map((cause, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-forest-green text-white text-xs mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span>{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Consequences */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-4 text-error">Consequências</h3>
                    <ul className="space-y-3">
                      {currentPollution.consequences.map((consequence, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-error text-white text-xs mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span>{consequence}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Statistics */}
                <div className="bg-water-blue/10 p-6 rounded-lg border border-water-blue/20 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-water-blue">Dados Relevantes</h3>
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="text-4xl font-bold text-water-blue mr-4 mb-3 md:mb-0">
                      {currentPollution.stats.figure}
                    </div>
                    <div>
                      <p className="text-gray-700 mb-1">{currentPollution.stats.description}</p>
                      <p className="text-sm text-gray-500">Fonte: {currentPollution.stats.source}</p>
                    </div>
                  </div>
                </div>
                
                {/* Call to action */}
                <div className="bg-earth-brown/10 p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">Faça sua parte na redução da poluição</h3>
                  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    Pequenas ações do dia a dia podem contribuir significativamente para reduzir os impactos 
                    da poluição no meio ambiente. Descubra como você pode ajudar.
                  </p>
                  <Link to="/como-ajudar" className="btn btn-primary">
                    Como posso ajudar?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PollutionPage;