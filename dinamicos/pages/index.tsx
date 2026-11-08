/**
 * Página Inicial - Dinamicos
 * Integra todos os componentes da Fase 3
 */

import { HeroSection } from '../components/HeroSection';
import { ServiceCard } from '../components/ServiceCard';
import { CompanyCard } from '../components/CompanyCard';
import { CaseStudy } from '../components/CaseStudy';
import { ProcessSteps } from '../components/ProcessSteps';
import { Navigation } from '../components/Navigation';
import { CTAButton } from '../components/CTAButton';

export default function Home() {
  const services = [
    { id: 'web-dev', title: 'Desenvolvimento Web', description: 'Sites e aplicações personalizadas', href: '/servicos/web-dev' },
    { id: 'consultoria', title: 'Consultoria', description: 'Estratégia e planejamento', href: '/servicos/consultoria' },
    { id: 'publicidade', title: 'Publicidade', description: 'Campanhas eficazes', href: '/servicos/publicidade' },
  ];

  const companies = [
    { id: 'tech', name: 'Dinâmicos Tech', segment: 'Tecnologia', color: '#1E40AF' },
    { id: 'consult', name: 'Dinâmicos Consultoria', segment: 'Consultoria', color: '#0F766E' },
    { id: 'adv', name: 'Dinâmicos Publicidade', segment: 'Publicidade', color: '#924483' },
  ];

  const cases = [
    {
      title: 'Digitalização de Processos',
      client: 'Empresa ABC',
      duration: '3 meses',
      before: 'Processos manuais e lentos',
      after: '90% mais eficiente',
      metric: '96%',
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProcessSteps />
        
        <section className="services-section">
          <h2>Serviços</h2>
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </section>

        <section className="companies-section">
          <h2>Nossas Empresas</h2>
          <div className="companies-grid">
            {companies.map((company) => (
              <CompanyCard key={company.id} {...company} />
            ))}
          </div>
        </section>

        <section className="cases-section">
          <h2>Casos de Sucesso</h2>
          <div className="cases-grid">
            {cases.map((caso, idx) => (
              <CaseStudy
                key={idx}
                id={caso.title}
                title={caso.title}
                client={caso.client}
                category="Web Development"
                beforeMetrics={caso.before}
                afterMetrics={caso.after}
                href="#"
              />
            ))}
          </div>
        </section>
      </main>
      <footer>
        <CTAButton variant="primary" size="md">
          Falar com um Especialista
        </CTAButton>
      </footer>
    </>
  );
}