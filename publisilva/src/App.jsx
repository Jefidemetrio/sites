import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Publisilva = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.34, 1.56, 0.64, 1]
      }
    })
  };

  const services = [
    {
      title: 'Reclamos Luminosos',
      description: 'Criação de reclamos luminosos personalizados que atraem e destacam a sua marca, dia e noite.',
      icon: '💡'
    },
    {
      title: 'Decoração de Montras',
      description: 'Transforme os seus reclamos em verdadeiras obras de arte com vinil de alta qualidade.',
      icon: '🖼️'
    },
    {
      title: 'Decoração de Viaturas',
      description: 'Publicidade móvel de alta qualidade. Leaisos, wraps e decoração que anda por si.',
      icon: '🚗'
    },
    {
      title: 'CNC & Laser',
      description: 'Cortes e gravações precisionados em materiais premium para detalhes únicos.',
      icon: '✂️'
    },
    {
      title: 'Sinalética',
      description: 'Criação de sinalética corporativa com materiais duráveis e design funcional.',
      icon: '📋'
    },
    {
      title: 'Toldos & Totens',
      description: 'Projeto e instalação de toldos e totens personalizados com acabamento premium.',
      icon: '🪧'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full filter blur-3xl"
               style={{
                 transform: `translate(${mousePos.x / 100}px, ${mousePos.y / 100}px)`,
                 transition: 'transform 0.1s ease-out'
               }}
          />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl"
               style={{
                 transform: `translate(${-mousePos.x / 100}px, ${-mousePos.y / 100}px)`,
                 transition: 'transform 0.1s ease-out'
               }}
          />
        </motion.div>

        <motion.div
          className="text-center z-10 max-w-3xl px-4"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Comunicação <span className="text-cyan-400">Visual</span> Premium
          </motion.h1>
          
          <motion.p
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Transforme o seu negócio com soluções de comunicação visual premium. Desde ideias até a execução final.
          </motion.p>

          <motion.a
            href="#services"
            className="inline-block bg-cyan-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-cyan-500/30 hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Serviços
          </motion.a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Nossos Serviços
            </h2>
            <p className="text-slate-400 max-w-300 mx-auto">
              Soluções de comunicação visual que dão vida às suas ideias
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800 transition-all duration-300"
                variants={serviceCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.3)',
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Quem Somos
            </h2>
            <p className="text-slate-400 max-w-300 mx-auto">
              Mais de 27 anos criando soluções de comunicação visual de excelência
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-200 leading-relaxed mb-4">
                  Na Publisilva, ajudamos empresas a <strong>destacarem-se</strong> há mais de <strong>27 anos</strong>. Criamos <strong>reclamos luminosos</strong>, decoramos <strong>montras e viaturas</strong>, fazemos <strong>corte CNC e laser</strong>, <strong>sinalética</strong>, <strong>toldos</strong>, <strong>totens</strong> e <strong>outdoors</strong>.
                </p>
                <p className="text-slate-200 leading-relaxed">
                  Tudo <strong>fabricado internamente</strong> com equipa especializada e tecnologia de ponta. Do primeiro rascunho até a entrega final.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <span className="text-slate-300">+27 anos de experiência</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <span className="text-slate-300">Fábrica própria</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <span className="text-slate-300">Qualidade premium</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Contacte-Nos
            </h2>
            <p className="text-slate-400 max-w-300 mx-auto">
              Vamos conversar sobre a sua nova solução de comunicação visual
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-600 mx-auto"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Informações de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 11v6l7.89 5.26a2 2 0 002.22 0L19 17v-6" />
                    </svg>
                    <span className="text-slate-300">Zona Industrial de Taboeira, Aveiro</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H12a2 2 0 01-2-2V5z" />
                    </svg>
                    <span className="text-slate-300">+351 917 334 595</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zM4 20a8 8 0 0116 0H4z" />
                    </svg>
                    <span className="text-slate-300">contacto@publisilva.pt</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Horário de Atividade</h3>
              <div className="bg-slate-800/30 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-400">Segunda a Sexta</span>
                  <span className="text-cyan-400 font-bold">9:00 - 18:00</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-slate-500 text-sm">Manhã</span>
                    <span className="text-white">9:00 - 12:30</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-sm">Tarde</span>
                    <span className="text-white">13:30 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500">&copy; 2024 Publisilva. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Publisilva;