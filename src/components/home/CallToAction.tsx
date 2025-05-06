import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-earth-brown/10">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div 
              className="bg-center bg-cover h-64 md:h-auto"
              style={{ 
                backgroundImage: "url('https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg')" 
              }}
            ></div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Faça parte da mudança
              </h3>
              <p className="text-gray-600 mb-6">
                A preservação ambiental depende de cada um de nós. Pequenas ações do dia a dia fazem 
                toda a diferença para construir um futuro mais sustentável. Descubra como você pode contribuir.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/como-ajudar" 
                  className="btn btn-primary"
                >
                  Como posso ajudar
                </Link>
                <Link 
                  to="/contato" 
                  className="btn btn-outline"
                >
                  Entre em contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;