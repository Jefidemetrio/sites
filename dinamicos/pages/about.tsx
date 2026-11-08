/**
 * Página About - Dinamicos
 */

export default function About() {
  return (
    <main className="about-page">
      <header className="page-header">
        <h1>Sobre a Dinamicos</h1>
        <p className="page-subtitle">
          Uma holding multi-negócios ao serviço das PMEs portuguesas
        </p>
      </header>

      <section className="about-content">
        <div className="about-grid">
          <div className="about-text">
            <h2>A nossa missão</h2>
            <p>
              Reunimos soluções especializadas sob uma única gestão eficiente,
              oferecendo serviços que crescem junto com o seu negócio.
            </p>
            
            <h3>Nossos Valores</h3>
            <ul className="values-list">
              <li>Transparência nos preços e processos</li>
              <li>Qualidade técnica com linguagem acessível</li>
              <li>Foco no crescimento sustentável</li>
              <li>Atendimento personalizado</li>
            </ul>
          </div>
          
          <div className="about-image">
            <img src="/images/team.jpg" alt="Equipa Dinamicos" />
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">50+</span>
            <span className="stat-label">Empresas atendidas</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">10+</span>
            <span className="stat-label">Anos de experiência</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">96%</span>
            <span className="stat-label">Taxa de satisfação</span>
          </div>
        </div>
      </section>
    </main>
  );
}