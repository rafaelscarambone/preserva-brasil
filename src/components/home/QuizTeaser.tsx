import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

const QuizTeaser: React.FC = () => {
  return (
    <section className="bg-water-blue py-16">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div 
              className="bg-center bg-cover h-64 md:h-auto" 
              style={{ 
                backgroundImage: "url('https://images.pexels.com/photos/2449543/pexels-photo-2449543.jpeg')"
              }}
            ></div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-water-blue/10 text-water-blue mb-6">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Teste seus conhecimentos
              </h3>
              <p className="text-gray-600 mb-6">
                Quanto você sabe sobre poluição e conservação ambiental? Participe do nosso quiz interativo 
                e descubra seu nível de consciência ecológica.
              </p>
              <Link 
                to="/como-ajudar"
                className="btn-primary inline-block w-full sm:w-auto text-center"
              >
                Fazer o Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizTeaser;