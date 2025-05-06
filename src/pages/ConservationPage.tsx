import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ExternalLink } from 'lucide-react';

const ConservationPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Conservação Ambiental | Preserva Brasil';
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section 
        className="pt-24 pb-12 bg-center bg-cover relative"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Conservação Ambiental</h1>
            <p className="text-xl opacity-90">
              Proteção, preservação e restauração da biodiversidade e dos ecossistemas naturais 
              para garantir um futuro sustentável para todas as formas de vida.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">O que é Conservação Ambiental?</h2>
              <p className="text-gray-700 mb-4">
                A conservação ambiental consiste em um conjunto de práticas e estratégias dedicadas a proteger a 
                biodiversidade, restaurar ecossistemas degradados e garantir a disponibilidade de recursos naturais 
                para as gerações futuras.
              </p>
              <p className="text-gray-700 mb-6">
                Diferente da preservação ambiental, que busca proteger áreas da interferência humana, a conservação 
                propõe o uso sustentável dos recursos naturais, permitindo atividades humanas que não comprometam 
                o equilíbrio dos ecossistemas.
              </p>
              <div className="bg-success/10 p-4 rounded-lg border border-success/20">
                <h3 className="text-success text-lg font-bold mb-2">Resultados positivos comprovados</h3>
                <p className="text-gray-700">
                  Um amplo estudo que analisou 186 pesquisas com 665 testes mostrou que mais de 50% das ações de 
                  conservação tiveram efeitos positivos sobre biodiversidade, clima ou ecossistemas.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Fonte: Agência Brasil
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/2574643/pexels-photo-2574643.jpeg" 
                alt="Floresta preservada" 
                className="rounded-lg h-48 md:h-64 object-cover w-full"
              />
              <img 
                src="https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg" 
                alt="Conservação de aves" 
                className="rounded-lg h-48 md:h-64 object-cover w-full"
              />
              <img 
                src="https://images.pexels.com/photos/7267054/pexels-photo-7267054.jpeg" 
                alt="Planta sendo plantada" 
                className="rounded-lg h-48 md:h-64 object-cover w-full"
              />
              <img 
                src="https://images.pexels.com/photos/9074388/pexels-photo-9074388.jpeg" 
                alt="Parque Nacional" 
                className="rounded-lg h-48 md:h-64 object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Actions */}
      <section className="py-12 bg-forest-green/5">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Principais Ações de Conservação</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Action 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Criação de Unidades de Conservação</h3>
              <p className="text-gray-700 mb-4">
                Áreas protegidas por lei, com características naturais relevantes, que garantem a
                preservação da biodiversidade, das paisagens e dos recursos naturais.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                  <span>Proteção de habitats críticos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                  <span>Preservação de espécies ameaçadas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                  <span>Manutenção de serviços ecossistêmicos</span>
                </li>
              </ul>
              <Link 
                to="/iniciativas" 
                className="text-forest-green font-medium inline-flex items-center hover:underline"
              >
                Ver unidades no Brasil <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            {/* Action 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Restauração de Florestas Nativas</h3>
              <p className="text-gray-700 mb-4">
                Recuperação de áreas degradadas através do plantio de espécies nativas, favorecendo 
                o retorno da biodiversidade e a regeneração natural dos ecossistemas.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sequestro de carbono</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                  <span>Recuperação de nascentes e cursos d'água</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                  <span>Aumento da biodiversidade local</span>
                </li>
              </ul>
              <a 
                href="https://www.wri.org/initiatives/initiative-20x20" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-forest-green font-medium inline-flex items-center hover:underline"
              >
                Iniciativa 20x20 <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            {/* Action 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Controle de Espécies Invasoras</h3>
              <p className="text-gray-700 mb-4">
                Manejo de espécies exóticas que ameaçam os ecossistemas nativos, prejudicando 
                a biodiversidade local e alterando processos ecológicos.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                  <span>Proteção de espécies nativas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                  <span>Manutenção do equilíbrio ecológico</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                  <span>Prevenção de perdas econômicas</span>
                </li>
              </ul>
              <a 
                href="https://www.iucn.org/resources/issues-brief/invasive-alien-species-and-climate-change" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-forest-green font-medium inline-flex items-center hover:underline"
              >
                IUCN Espécies Invasoras <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Conservation Principles */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-water-blue/10 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Princípios da Conservação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest-green text-white text-xl font-bold mb-4">1</div>
                <h3 className="text-lg font-bold mb-2">Sustentabilidade</h3>
                <p className="text-gray-600">
                  Uso racional dos recursos naturais, garantindo sua disponibilidade para as futuras gerações.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest-green text-white text-xl font-bold mb-4">2</div>
                <h3 className="text-lg font-bold mb-2">Biodiversidade</h3>
                <p className="text-gray-600">
                  Proteção da diversidade de espécies, genética e de ecossistemas, essencial para a resiliência.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest-green text-white text-xl font-bold mb-4">3</div>
                <h3 className="text-lg font-bold mb-2">Precaução</h3>
                <p className="text-gray-600">
                  Adoção de medidas preventivas, mesmo na ausência de certeza científica sobre danos ambientais.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest-green text-white text-xl font-bold mb-4">4</div>
                <h3 className="text-lg font-bold mb-2">Participação</h3>
                <p className="text-gray-600">
                  Envolvimento de comunidades locais e povos tradicionais nas decisões e ações de conservação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education and Awareness */}
      <section 
        className="py-16 bg-center bg-cover text-white relative"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2406271/pexels-photo-2406271.jpeg')" 
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Educação e Conscientização</h2>
            <p className="text-lg mb-8">
              A conservação ambiental efetiva depende da educação e conscientização da população. Compreender 
              a importância da biodiversidade e dos ecossistemas é o primeiro passo para protegê-los.
            </p>
            <Link to="/como-ajudar" className="btn btn-primary">
              Saiba como você pode ajudar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConservationPage;