/**
 * Página de Casos de Sucesso - Dinamicos
 */

import { CaseStudy } from '../components/CaseStudy';

export default function Cases() {
  const cases = [
    {
      title: 'Digitalização de Processos - Web Development',
      client: 'Empresa Tech Ltda',
      duration: '4 meses',
      before: 'Processos manuais, lento e propenso a erros',
      after: 'Automatização completa, 85% mais rápido',
      metric: '85%',
      featured: true,
    },
    {
      title: 'Marketing Digital - Publicidade',
      client: 'Startup Inova S.A.',
      duration: '3 meses',
      before: 'Baixo engajamento e conversão baixa',
      after: 'Aumento de 240% nas conversões',
      metric: '240%',
      featured: false,
    },
    {
      title: 'Consultoria Empresarial',
      client: 'Corporação ABC',
      duration: '6 meses',
      before: 'Estrutura desordenada e custos altos',
      after: 'Redução de 30% nos custos operacionais',
      metric: '30%',
      featured: false,
    },
  ];

  return (
    <main className="cases-page">
      <header className="page-header">
        <h1>Casos de Sucesso</h1>
        <p className="page-subtitle">
          Resultados comprovados com nossos clientes
        </p>
      </header>

      <section className="cases-grid">
        {cases.map((caso, idx) => (
          <CaseStudy key={idx} {...caso} />
        ))}
      </section>

      <section className="results-summary">
        <h2>Resultados Coletados</h2>
        <div className="metrics-grid">
          <div className="metric-item">
            <span className="metric-value">50+</span>
            <span className="metric-label">Casos completados</span>
          </div>
          <div className="metric-item">
            <span className="metric-value">96%</span>
            <span className="metric-label">Taxa de satisfação</span>
          </div>
          <div className="metric-item">
            <span className="metric-value">240%+</span>
            <span className="metric-label">Crescimento médio</span>
          </div>
        </div>
      </section>
    </main>
  );
}