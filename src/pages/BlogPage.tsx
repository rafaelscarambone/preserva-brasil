import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Search, Tag } from 'lucide-react';
import { BlogPost } from '../types';

const allBlogPosts: BlogPost[] = [
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
  {
    id: "4",
    title: "Ilhas de calor urbanas: como as cidades estão se adaptando",
    excerpt: "O fenômeno das ilhas de calor em áreas urbanas afeta milhões de pessoas. Veja como cidades estão implementando soluções baseadas na natureza.",
    date: "28 Mai 2025",
    category: "Clima",
    image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
    authorName: "Pedro Mendes",
    authorImage: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg",
  },
  {
    id: "5",
    title: "O futuro da energia: avanços em tecnologias renováveis",
    excerpt: "Novas tecnologias estão transformando o setor energético. Descubra as inovações mais promissoras em energia solar, eólica e outras fontes limpas.",
    date: "20 Mai 2025",
    category: "Energia",
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    authorName: "Luiza Campos",
    authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: "6",
    title: "Agricultura regenerativa: produzindo alimentos e recuperando solos",
    excerpt: "Práticas agrícolas que vão além do orgânico, recuperando solos degradados e aumentando a captura de carbono. Um novo paradigma para a produção de alimentos.",
    date: "15 Mai 2025",
    category: "Agricultura",
    image: "https://images.pexels.com/photos/2889426/pexels-photo-2889426.jpeg",
    authorName: "Fernando Oliveira",
    authorImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    id: "7",
    title: "Educação ambiental nas escolas: formando cidadãos conscientes",
    excerpt: "A importância de incluir a educação ambiental no currículo escolar e exemplos de projetos bem-sucedidos em escolas brasileiras.",
    date: "10 Mai 2025",
    category: "Educação",
    image: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg",
    authorName: "Mariana Santos",
    authorImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
  {
    id: "8",
    title: "Cidades sustentáveis: modelos de urbanização para o futuro",
    excerpt: "Conheça exemplos de cidades ao redor do mundo que estão implementando soluções inovadoras para tornar o ambiente urbano mais sustentável e resiliente.",
    date: "05 Mai 2025",
    category: "Urbanismo",
    image: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg",
    authorName: "Ricardo Almeida",
    authorImage: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg",
  },
];

const categories = [
  "Todos",
  "Desmatamento",
  "Poluição Marinha",
  "Conservação",
  "Clima",
  "Energia",
  "Agricultura",
  "Educação",
  "Urbanismo",
];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allBlogPosts);
  
  useEffect(() => {
    document.title = 'Blog | Preserva Brasil';
    
    // Filter posts based on search term and category
    const filtered = allBlogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-water-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl opacity-90">
              Artigos, notícias e análises sobre poluição, conservação ambiental, desastres ecológicos 
              e iniciativas sustentáveis no Brasil e no mundo.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar artigos..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-green"
                />
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            {/* Categories */}
            <div className="w-full md:flex-1 overflow-x-auto">
              <div className="flex space-x-2 p-1">
                {categories.map((category) => (
                  <button 
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category 
                        ? 'bg-forest-green text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-12">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="card overflow-hidden hover:translate-y-[-5px]">
                  <Link to={`/blog/${post.id}`}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-forest-green/10 text-forest-green rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      <Link to={`/blog/${post.id}`} className="hover:text-forest-green transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center">
                      <img 
                        src={post.authorImage} 
                        alt={post.authorName} 
                        className="w-8 h-8 rounded-full object-cover mr-2"
                      />
                      <span className="text-sm text-gray-600">{post.authorName}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Nenhum resultado encontrado</h3>
              <p className="text-gray-600 mb-8">
                Não encontramos artigos que correspondam à sua busca. Tente outros termos ou categorias.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Todos');
                }}
                className="btn btn-primary"
              >
                Ver todos os artigos
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Categorias em Destaque</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all">
              <img 
                src="https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg" 
                alt="Conservação" 
                className="w-full h-40 object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 text-forest-green mr-2" />
                  <h3 className="font-bold text-lg">Conservação</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Estratégias, projetos e resultados de iniciativas de conservação da biodiversidade.
                </p>
                <button 
                  onClick={() => setSelectedCategory('Conservação')}
                  className="text-forest-green font-medium hover:underline inline-flex items-center"
                >
                  Ver artigos
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all">
              <img 
                src="https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg" 
                alt="Poluição Marinha" 
                className="w-full h-40 object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 text-water-blue mr-2" />
                  <h3 className="font-bold text-lg">Poluição Marinha</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Impactos da poluição nos oceanos e iniciativas para proteger os ecossistemas marinhos.
                </p>
                <button 
                  onClick={() => setSelectedCategory('Poluição Marinha')}
                  className="text-water-blue font-medium hover:underline inline-flex items-center"
                >
                  Ver artigos
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all">
              <img 
                src="https://images.pexels.com/photos/7162674/pexels-photo-7162674.jpeg" 
                alt="Clima" 
                className="w-full h-40 object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 text-error mr-2" />
                  <h3 className="font-bold text-lg">Clima</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Mudanças climáticas, eventos extremos e medidas de adaptação e mitigação.
                </p>
                <button 
                  onClick={() => setSelectedCategory('Clima')}
                  className="text-error font-medium hover:underline inline-flex items-center"
                >
                  Ver artigos
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all">
              <img 
                src="https://images.pexels.com/photos/9875362/pexels-photo-9875362.jpeg" 
                alt="Energia" 
                className="w-full h-40 object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 text-earth-brown mr-2" />
                  <h3 className="font-bold text-lg">Energia</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Fontes renováveis, eficiência energética e a transição para uma matriz mais limpa.
                </p>
                <button 
                  onClick={() => setSelectedCategory('Energia')}
                  className="text-earth-brown font-medium hover:underline inline-flex items-center"
                >
                  Ver artigos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-forest-green/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Inscreva-se na Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Receba em seu e-mail os artigos mais recentes e atualizações sobre conservação ambiental e iniciativas sustentáveis.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-forest-green/50"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-forest-green text-white py-3 px-6 rounded-r-lg hover:bg-forest-green/90 transition-colors"
                >
                  Inscrever-se
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Respeitamos sua privacidade. Você pode cancelar sua inscrição a qualquer momento.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;