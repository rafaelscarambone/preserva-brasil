import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types';

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Queimadas na Amazônia: impactos e soluções",
    excerpt: "As queimadas na Amazônia têm consequências devastadoras para o clima global e a biodiversidade. Entenda os impactos e o que pode ser feito.",
    date: "10 Jun 2025",
    category: "Desmatamento",
    image: "https://images.pexels.com/photos/51951/forest-fire-fire-smoke-conservation-51951.jpeg",
    authorName: "Carla Silva",
    authorImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    id: "2",
    title: "Microplásticos: a ameaça invisível nos oceanos",
    excerpt: "Partículas minúsculas de plástico estão afetando os ecossistemas marinhos e chegando à nossa cadeia alimentar. Conheça os riscos.",
    date: "05 Jun 2025",
    category: "Poluição Marinha",
    image: "https://images.pexels.com/photos/2421530/pexels-photo-2421530.jpeg",
    authorName: "Bruno Costa",
    authorImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    id: "3",
    title: "Comunidades tradicionais e conservação da biodiversidade",
    excerpt: "Como os conhecimentos tradicionais ajudam a preservar ecossistemas e quais lições podemos aprender com essas comunidades.",
    date: "01 Jun 2025",
    category: "Conservação",
    image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg",
    authorName: "Ana Ribeiro",
    authorImage: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
  },
];

const BlogPreview: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notícias e Artigos</h2>
            <p className="max-w-2xl text-gray-600">
              Acompanhe as últimas notícias e artigos sobre conservação ambiental, desastres ecológicos e iniciativas sustentáveis.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="mt-4 md:mt-0 inline-flex items-center text-forest-green font-medium hover:underline"
          >
            Ver todas as publicações <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="card overflow-hidden hover:translate-y-[-5px]">
              <Link to={`/blog/${post.id}`}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-forest-green/10 text-forest-green rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-forest-green transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={post.authorImage} 
                      alt={post.authorName} 
                      className="w-8 h-8 rounded-full object-cover mr-2"
                    />
                    <span className="text-sm text-gray-600">{post.authorName}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;