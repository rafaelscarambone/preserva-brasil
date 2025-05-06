import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg')",
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Conscientizar para preservar
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
            Entenda os impactos da poluição e a importância da conservação ambiental para garantir um futuro sustentável para todos.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/poluicao" 
              className="btn bg-forest-green hover:bg-forest-green/90 text-white"
            >
              Saiba mais sobre poluição
            </Link>
            <Link 
              to="/como-ajudar" 
              className="btn border-2 border-white hover:bg-white hover:text-forest-green transition-colors"
            >
              Como posso ajudar? <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;