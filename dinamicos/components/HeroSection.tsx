/**
 /** HeroSection.tsx - Hero responsivo para página inicial
  * Integração com design system: variables.css, typography.css
  * Breakpoint: mobile-first, >768px 2-colunas
  */


 export const HeroSection: React.FC = () => {
   return (
     <section className="hero-section">
       <div className="container">
         <div className="hero-content">
           <div className="hero-eyebrow">Holding Multi-Empresa</div>
           <h1>Solasções que fazem a sua empresa crescer</h1>
           <p className="hero-subtitle">
             Um grupo de empresas ao serviço das PMEs portuguesas: consultoria, tecnologia
             e serviços, com quem percebe o seu negócio.
           </p>
           <div className="hero-cta">
             <button className="btn btn-accent">Falar com um especialista</button>
             <button className="btn btn-secondary">Conhecer as empresas</button>
           </div>
         </div>
         <aside className="hero-image">
           {/* Image placeholder - segment colors applied via CSS variables */}
         </aside>
       </div>
     </section>
   );
 };