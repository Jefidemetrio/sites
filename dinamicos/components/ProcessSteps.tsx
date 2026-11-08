/**
 * ProcessSteps.tsx - 4 passos do processo
 * Integração com design system: variables.css, typography.css
 * Breakpoint: mobile-first, grid 2x2 no desktop
 * Raio padrão: 0.375rem
 */


export const ProcessSteps: React.FC = () => {
  const steps = [
    { number: 1, title: 'Diagnóstico', description: 'Avaliação da situação atual da sua empresa' },
    { number: 2, title: 'Planejamento', description: 'Estratégia personalizada para o seu negócio' },
    { number: 3, title: 'Implementação', description: 'Execução das soluções acordadas' },
    { number: 4, title: 'Resultado', description: 'Métricas e crescimento mensurável' },
  ];

  return (
    <section className="process-steps">
      <div className="container">
        <div className="section-header">
          <h2>O nosso processo</h2>
          <p>Como trabalhamos consigo passo a passo</p>
        </div>
        <div className="process-grid">
          {steps.map((step) => (
            <div key={step.number} className="process-step">
              <div className="process-step-number">{step.number}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};