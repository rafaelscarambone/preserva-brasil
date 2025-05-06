import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Leaf, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <Leaf className="w-7 h-7 text-forest-green" />
              <span className="ml-2 text-xl font-heading font-bold">Preserva Brasil</span>
            </div>
            <p className="text-gray-300 mb-6">
              Educando e conscientizando sobre os impactos da poluição e a importância da 
              conservação ambiental, com base em fontes confiáveis e atualizadas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/poluicao" className="text-gray-300 hover:text-white transition-colors duration-200">
                  O que é Poluição?
                </Link>
              </li>
              <li>
                <Link to="/conservacao" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Conservação Ambiental
                </Link>
              </li>
              <li>
                <Link to="/iniciativas" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Iniciativas no Brasil
                </Link>
              </li>
              <li>
                <Link to="/como-ajudar" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Como Ajudar?
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-forest-green mt-1 mr-3" />
                <span className="text-gray-300">
                  Rua da República, 1338<br />
                  Taquaritinga, SP, 15900-011
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-forest-green mr-3" />
                <span className="text-gray-300">(16) 98102-0035</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-forest-green mr-3" />
                <a href="mailto:contato@preservabrasil.org" className="text-gray-300 hover:text-white transition-colors duration-200">
                  contato@preservabrasil.org
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Inscreva-se para receber novidades e atualizações sobre conservação ambiental.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-forest-green"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-forest-green text-white py-2 px-4 rounded-lg hover:bg-forest-green/90 transition-colors duration-200"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Preserva Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;