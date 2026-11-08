/**
 * Página de Serviços - Dinamicos
 */

import { ServiceCard } from '../components/ServiceCard';

export default function Services() {
  const services = [
    { 
      id: 'web-dev', 
      title: 'Desenvolvimento Web', 
      description: 'Sites e aplicações web modernas com Next.js e React', 
      href: '/servicos/web-dev/detalhes' 
    },
    { 
      id: 'consultoria', 
      title: 'Consultoria Empresarial', 
      description: 'Planejamento estratégico e otimização de processos', 
      href: '/servicos/consultoria/detalhes' 
    },
    { 
      id: 'publicidade', 
      title: 'Publicidade Digital', 
      description: 'Campanhas de marketing digital com resultados mensuráveis', 
      href: '/servicos/publicidade/detalhes' 
    },
    { 
      id: 'construcao', 
      title: 'Construção Modular', 
      description: 'Soluções de construção eficientes e sustentáveis', 
      href: '/servicos/construcao/detalhes' 
    },
  ];

  return (
    <main className="services-page">
      <header className="page-header">
        <h1>Serviços</h1>
        <p className="page-subtitle">
          Soluções especializadas para cada necessidade do seu negócio
        </p>
      </header>

      <section className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </section>

      <section className="cta-section">
        <h2>Pronto para começar?</h2>
        <p>Fale com um especialista para uma consultoria gratuita</p>
        <a href="/contacto" className="btn btn-primary">Contactar</a>
      </section>
    </main>
  );
}