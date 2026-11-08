/**
 * Footer.tsx - Rodapé responsivo
 * Integração com design system
 */

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>Dinamicos</h3>
          <p>Soluções multi-negócios para PMEs portuguesas</p>
          <div className="footer-social">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/casos">Casos de Sucesso</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>✉️ info@dinamicos.pt</p>
          <p>📞 +351 21 123 4567</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Dinamicos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};