import React from 'react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../../types';
import { 
  Droplets, 
  Wind, 
  Mountain, 
  Bug, 
  ArrowRight 
} from 'lucide-react';

const features: FeatureCard[] = [
  {
    title: "Poluição da Água",
    description: "Contaminação por produtos químicos, plásticos e resíduos industriais ameaça os ecossistemas aquáticos.",
    icon: "water",
    link: "/poluicao",
  },
  {
    title: "Poluição do Ar",
    description: "Queimadas, emissões de veículos e indústrias comprometem a qualidade do ar que respiramos.",
    icon: "air",
    link: "/poluicao",
  },
  {
    title: "Poluição do Solo",
    description: "Agrotóxicos, lixões e resíduos urbanos degradam o solo e ameaçam a biodiversidade terrestre.",
    icon: "soil",
    link: "/poluicao",
  },
  {
    title: "Impacto na Biodiversidade",
    description: "A poluição reduz habitats naturais e ameaça espécies em todo o planeta.",
    icon: "biodiversity",
    link: "/conservacao",
  },
];

const FeatureCards: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'water':
        return <Droplets className="w-10 h-10 text-water-blue" />;
      case 'air':
        return <Wind className="w-10 h-10 text-water-blue" />;
      case 'soil':
        return <Mountain className="w-10 h-10 text-water-blue" />;
      case 'biodiversity':
        return <Bug className="w-10 h-10 text-water-blue" />;
      default:
        return <Droplets className="w-10 h-10 text-water-blue" />;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Principais Problemas Ambientais</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Conheça os diferentes tipos de poluição e seus impactos nos ecossistemas naturais e na saúde humana.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card hover:translate-y-[-5px] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="mb-4 p-3 inline-flex rounded-full bg-water-blue/10">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link 
                  to={feature.link} 
                  className="inline-flex items-center text-forest-green font-medium hover:underline"
                >
                  Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;