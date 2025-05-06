import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Página não encontrada | Preserva Brasil';
  }, []);
  
  return (
    <section className="flex items-center justify-center min-h-[80vh] py-16">
      <div className="container-custom text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-forest-green mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            A página que você está procurando parece ter se perdido na natureza. 
            Que tal voltar para o caminho principal?
          </p>
          <Link 
            to="/" 
            className="btn btn-primary inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;