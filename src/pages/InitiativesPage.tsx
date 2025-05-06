import React, { useEffect, useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';
import { ConservationInitiative } from '../types';

// Dynamic import to avoid SSR issues with Leaflet
const MapComponent = React.lazy(() => import('../components/initiatives/MapComponent'));

const initiatives: ConservationInitiative[] = [
  {
    id: "1",
    name: "Parque Nacional da Tijuca",
    description: "Maior floresta urbana replantada do mundo, localizada no Rio de Janeiro. Uma história de sucesso de reflorestamento iniciada no século XIX.",
    organization: "ICMBio",
    location: "Rio de Janeiro, RJ",
    coordinates: [-22.9492, -43.2906],
    image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg",
    website: "https://www.icmbio.gov.br/parnatijuca/"
  },
  {
    id: "2",
    name: "Reserva de Desenvolvimento Sustentável Mamirauá",
    description: "Primeira unidade de conservação brasileira que concilia conservação da biodiversidade com o desenvolvimento sustentável de populações tradicionais.",
    organization: "Instituto Mamirauá",
    location: "Amazonas",
    coordinates: [-3.3055, -64.7363],
    image: "https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg",
    website: "https://www.mamiraua.org.br/"
  },
  {
    id: "3",
    name: "Projeto TAMAR",
    description: "Iniciativa que trabalha na proteção das tartarugas marinhas ameaçadas de extinção, com atuação em diversos pontos do litoral brasileiro.",
    organization: "Fundação Projeto TAMAR",
    location: "Múltiplas localidades",
    coordinates: [-12.9714, -38.5014],
    image: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg",
    website: "https://www.tamar.org.br/"
  },
  {
    id: "4",
    name: "Mosaico de Unidades de Conservação do Jacupiranga",
    description: "Conjunto de áreas protegidas que preservam importantes remanescentes de Mata Atlântica e formações cársticas no Vale do Ribeira.",
    organization: "Fundação Florestal de São Paulo",
    location: "São Paulo",
    coordinates: [-24.7036, -48.4042],
    image: "https://images.pexels.com/photos/5241039/pexels-photo-5241039.jpeg",
    website: "https://www.infraestruturameioambiente.sp.gov.br/fundacaoflorestal/"
  },
  {
    id: "5",
    name: "Projeto Arara Azul",
    description: "Iniciativa de pesquisa e conservação da arara-azul e de outras aves no Pantanal, que contribuiu para a recuperação da espécie ameaçada.",
    organization: "Instituto Arara Azul",
    location: "Mato Grosso do Sul",
    coordinates: [-19.5853, -56.2367],
    image: "https://images.pexels.com/photos/4577811/pexels-photo-4577811.jpeg",
    website: "https://www.institutoararaazul.org.br/"
  }
];

const InitiativesPage: React.FC = () => {
  const [selectedInitiative, setSelectedInitiative] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    document.title = 'Iniciativas no Brasil | Preserva Brasil';
    setIsClient(true);
  }, []);
  
  const currentInitiative = selectedInitiative 
    ? initiatives.find(i => i.id === selectedInitiative)
    : null;
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Iniciativas de Conservação no Brasil</h1>
            <p className="text-xl opacity-90">
              Conheça os principais programas, políticas e iniciativas de proteção e conservação da biodiversidade
              brasileira, uma das mais ricas do planeta.
            </p>
          </div>
        </div>
      </section>
      
      {/* SNUC Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Sistema Nacional de Unidades de Conservação (SNUC)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-2">
                <p className="text-gray-700 mb-4">
                  Estabelecido pela Lei nº 9.985/2000, o SNUC é o conjunto de unidades de conservação (UC) federais, 
                  estaduais e municipais que visa garantir a preservação da biodiversidade, promover o desenvolvimento 
                  sustentável e proteger paisagens naturais e recursos hídricos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-forest-green/10 p-4 rounded-lg">
                    <h3 className="font-bold text-forest-green mb-2">Unidades de Proteção Integral</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Estação Ecológica</li>
                      <li>Reserva Biológica</li>
                      <li>Parque Nacional</li>
                      <li>Monumento Natural</li>
                      <li>Refúgio de Vida Silvestre</li>
                    </ul>
                  </div>
                  <div className="bg-water-blue/10 p-4 rounded-lg">
                    <h3 className="font-bold text-water-blue mb-2">Unidades de Uso Sustentável</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Área de Proteção Ambiental</li>
                      <li>Área de Relevante Interesse Ecológico</li>
                      <li>Floresta Nacional</li>
                      <li>Reserva Extrativista</li>
                      <li>Reserva de Fauna</li>
                      <li>Reserva de Desenvolvimento Sustentável</li>
                      <li>Reserva Particular do Patrimônio Natural</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://antigo.mma.gov.br/areas-protegidas/unidades-de-conservacao/sistema-nacional-de-ucs-snuc.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-forest-green font-medium inline-flex items-center hover:underline"
                  >
                    Saiba mais sobre o SNUC <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/4577711/pexels-photo-4577711.jpeg" 
                  alt="Área protegida no Brasil" 
                  className="rounded-lg shadow-sm h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">ICMBio - Instituto Chico Mendes de Conservação da Biodiversidade</h3>
              <p className="text-gray-700 mb-4">
                Autarquia federal criada em 2007, vinculada ao Ministério do Meio Ambiente, responsável por 
                propor, implantar, gerir, proteger, fiscalizar e monitorar as Unidades de Conservação federais.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Criado pela Lei 11.516/2007</span>
                <a 
                  href="https://www.gov.br/icmbio/pt-br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-forest-green font-medium inline-flex items-center hover:underline"
                >
                  Visitar site <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">CNUC - Cadastro Nacional de Unidades de Conservação</h3>
              <p className="text-gray-700 mb-4">
                Banco de dados oficial com informações das unidades de conservação brasileiras, mantido e 
                atualizado pelos órgãos gestores federal, estaduais e municipais, com dados sobre espécies, 
                infraestrutura, entre outros.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Mantido pelo Ministério do Meio Ambiente</span>
                <a 
                  href="https://antigo.mma.gov.br/areas-protegidas/cadastro-nacional-de-ucs.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-forest-green font-medium inline-flex items-center hover:underline"
                >
                  Acessar CNUC <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Conservation Initiatives Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Mapa de Iniciativas de Conservação</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">Iniciativas Destacadas</h3>
              
              {initiatives.map((initiative) => (
                <div 
                  key={initiative.id}
                  className={`p-4 rounded-lg cursor-pointer transition-colors mb-4 ${
                    selectedInitiative === initiative.id 
                      ? 'bg-forest-green text-white' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedInitiative(initiative.id)}
                >
                  <h4 className="font-bold mb-1">{initiative.name}</h4>
                  <p className={`text-sm ${selectedInitiative === initiative.id ? 'text-white/80' : 'text-gray-600'}`}>
                    {initiative.location}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Map will be loaded only on client side */}
                {isClient && (
                  <React.Suspense fallback={<div className="h-96 flex items-center justify-center bg-gray-100">Carregando mapa...</div>}>
                    <div className="h-96">
                      <MapComponent 
                        initiatives={initiatives} 
                        selectedId={selectedInitiative}
                        onMarkerClick={setSelectedInitiative}
                      />
                    </div>
                  </React.Suspense>
                )}
              </div>
              
              {currentInitiative && (
                <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img 
                      src={currentInitiative.image} 
                      alt={currentInitiative.name} 
                      className="w-full md:w-1/3 h-48 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{currentInitiative.name}</h3>
                      <p className="text-gray-700 mb-4">{currentInitiative.description}</p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-gray-500">Organização:</span>
                          <p className="font-medium">{currentInitiative.organization}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Localização:</span>
                          <p className="font-medium">{currentInitiative.location}</p>
                        </div>
                      </div>
                      <a 
                        href={currentInitiative.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary inline-flex items-center"
                      >
                        Visitar site oficial <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Initiatives */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-water-blue/10 p-8 rounded-lg">
            <div className="flex items-start mb-6">
              <div className="bg-water-blue/20 p-3 rounded-full mr-4">
                <Info className="w-6 h-6 text-water-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Outras Iniciativas Importantes</h3>
                <p className="text-gray-700">
                  Além das iniciativas governamentais, existem diversos projetos conduzidos por ONGs,
                  universidades e pelo setor privado que contribuem para a conservação ambiental no Brasil.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold mb-2">SOS Mata Atlântica</h4>
                <p className="text-gray-600 mb-4">
                  ONG que atua na proteção do bioma Mata Atlântica, com iniciativas de restauração florestal e monitoramento.
                </p>
                <a 
                  href="https://www.sosma.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-forest-green font-medium inline-flex items-center hover:underline"
                >
                  Visitar site <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold mb-2">Instituto Socioambiental (ISA)</h4>
                <p className="text-gray-600 mb-4">
                  Organização que promove soluções sustentáveis para questões sociais e ambientais, com foco em povos indígenas.
                </p>
                <a 
                  href="https://www.socioambiental.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-forest-green font-medium inline-flex items-center hover:underline"
                >
                  Visitar site <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold mb-2">WWF-Brasil</h4>
                <p className="text-gray-600 mb-4">
                  Atuação em diversos biomas brasileiros, com projetos de conservação de espécies e habitats ameaçados.
                </p>
                <a 
                  href="https://www.wwf.org.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-forest-green font-medium inline-flex items-center hover:underline"
                >
                  Visitar site <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InitiativesPage;