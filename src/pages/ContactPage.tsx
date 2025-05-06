import React, { useEffect, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Send,
  CheckCircle
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  useEffect(() => {
    document.title = 'Contato | Preserva Brasil';
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1000);
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-earth-brown text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl opacity-90">
              Dúvidas, sugestões ou interesse em parcerias? Entre em contato conosco. 
              Estamos à disposição para atendê-lo.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest-green/10 mb-4">
                <Mail className="w-6 h-6 text-forest-green" />
              </span>
              <h3 className="text-lg font-bold mb-2">E-mail</h3>
              <p className="text-gray-600 mb-2">Envie-nos uma mensagem:</p>
              <a 
                href="mailto:contato@preservabrasil.org" 
                className="text-forest-green font-medium hover:underline"
              >
                contato@preservabrasil.org
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest-green/10 mb-4">
                <Phone className="w-6 h-6 text-forest-green" />
              </span>
              <h3 className="text-lg font-bold mb-2">Telefone</h3>
              <p className="text-gray-600 mb-2">Segunda a sexta, 9h às 18h:</p>
              <a 
                href="tel:+551133334444" 
                className="text-forest-green font-medium hover:underline"
              >
                (11) 3333-4444
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-forest-green/10 mb-4">
                <MapPin className="w-6 h-6 text-forest-green" />
              </span>
              <h3 className="text-lg font-bold mb-2">Endereço</h3>
              <p className="text-gray-600 mb-2">Visite nosso escritório:</p>
              <address className="not-italic text-forest-green font-medium">
                Av. Paulista, 1578<br />
                São Paulo, SP, 01310-200
              </address>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h2>
              
              {formStatus === 'success' ? (
                <div className="bg-success/10 border border-success/20 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-success">Mensagem Enviada!</h3>
                  <p className="text-gray-700">
                    Obrigado por entrar em contato. Sua mensagem foi enviada com sucesso.
                    Responderemos o mais breve possível.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome completo *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-forest-green/50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-forest-green/50"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Assunto *
                    </label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-forest-green/50"
                      required
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="duvida">Dúvida</option>
                      <option value="sugestao">Sugestão</option>
                      <option value="parceria">Proposta de Parceria</option>
                      <option value="denuncia">Denúncia Ambiental</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem *
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-forest-green/50"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="w-4 h-4 text-forest-green border-gray-300 rounded focus:ring-forest-green"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                      Concordo com a <a href="#" className="text-forest-green hover:underline">Política de Privacidade</a>
                    </label>
                  </div>
                  <div>
                    <button 
                      type="submit" 
                      className="btn btn-primary inline-flex items-center"
                    >
                      Enviar Mensagem <Send className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Social Media */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg h-full">
                <h2 className="text-2xl font-bold mb-6">Siga-nos nas redes sociais</h2>
                <p className="text-gray-600 mb-8">
                  Fique por dentro das novidades, campanhas e conteúdos exclusivos acompanhando 
                  nossas redes sociais.
                </p>
                <div className="space-y-6">
                  <a 
                    href="#" 
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mr-4">
                      <Facebook className="w-6 h-6 text-blue-500" />
                    </span>
                    <div>
                      <h3 className="font-bold">Facebook</h3>
                      <p className="text-sm text-gray-500">@preservabrasil</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/10 mr-4">
                      <Twitter className="w-6 h-6 text-sky-500" />
                    </span>
                    <div>
                      <h3 className="font-bold">Twitter</h3>
                      <p className="text-sm text-gray-500">@preservabrasil</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/10 mr-4">
                      <Instagram className="w-6 h-6 text-pink-500" />
                    </span>
                    <div>
                      <h3 className="font-bold">Instagram</h3>
                      <p className="text-sm text-gray-500">@preservabrasil</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 mr-4">
                      <Youtube className="w-6 h-6 text-red-500" />
                    </span>
                    <div>
                      <h3 className="font-bold">YouTube</h3>
                      <p className="text-sm text-gray-500">Preserva Brasil</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossa Localização</h2>
          <div className="rounded-lg overflow-hidden shadow-md h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0982262671386!2d-46.6596851!3d-23.563233299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201578%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-200!5e0!3m2!1spt-BR!2sbr!4v1635536565710!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Localização do Preserva Brasil"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Como posso me tornar um voluntário?</h3>
              <p className="text-gray-600">
                Para se tornar um voluntário, basta preencher o formulário de contato com o assunto "Voluntariado" 
                ou enviar um e-mail para voluntarios@preservabrasil.org. Entraremos em contato com mais informações 
                sobre as oportunidades disponíveis.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">O Preserva Brasil oferece palestras ou workshops?</h3>
              <p className="text-gray-600">
                Sim, oferecemos palestras e workshops sobre diversos temas relacionados à conservação ambiental. 
                Entre em contato pelo formulário acima com o assunto "Palestras" para saber mais sobre disponibilidade 
                e temas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Como posso denunciar um crime ambiental?</h3>
              <p className="text-gray-600">
                Crimes ambientais devem ser denunciados aos órgãos competentes, como IBAMA, Polícia Ambiental ou 
                Ministério Público. Você também pode entrar em contato conosco para orientação sobre como proceder 
                na sua região.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">O Preserva Brasil possui material educativo para escolas?</h3>
              <p className="text-gray-600">
                Sim, disponibilizamos cartilhas, jogos e vídeos educativos sobre meio ambiente para uso em escolas. 
                Os materiais são gratuitos e podem ser solicitados pelo e-mail educacao@preservabrasil.org.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;