// Dinamicos - Main Script

// Dados dos segmentos de negócios
const segments = [
    {
        id: 'servicos',
        name: 'Serviços',
        description: 'Soluções e serviços sob medida para o seu negócio',
        cta: 'Solicitar Proposta de Serviços'
    },
    {
        id: 'consultoria',
        name: 'Consultoria',
        description: 'Consultoria especializada para pequenas e médias empresas',
        cta: 'Agendar Consultoria'
    },
    {
        id: 'tecnologia',
        name: 'Tecnologia',
        description: 'Soluções tecnológicas para o crescimento digital',
        cta: 'Receber Demo Técnica'
    },
    {
        id: 'marketing',
        name: 'Marketing',
        description: 'Campanhas de marketing digital para sua marca',
        cta: 'Criar Campanha'
    }
];

// Função para carregar os segmentos
function loadSegments() {
    const grid = document.getElementById('segmentGrid');
    
    segments.forEach(segment => {
        const card = document.createElement('div');
        card.className = 'segment-card';
        card.dataset.segment = segment.id;
        card.innerHTML = `
            <h3>${segment.name}</h3>
            <p>${segment.description}</p>
        `;
        card.addEventListener('click', () => handleSegmentSelection(segment));
        grid.appendChild(card);
    });
}

// Handler para seleção de segmento
function handleSegmentSelection(segment) {
    // Atualizar CTA
    const ctaPrimary = document.getElementById('ctaPrimary');
    ctaPrimary.textContent = segment.cta;
    
    // Mostrar conteúdo personalizado (via IA)
    showSegmentContent(segment);
}

// Mostrar conteúdo personalizado
function showSegmentContent(segment) {
    // Aqui será integrado com a API de IA
    console.log(`Conteúdo para segmento: ${segment.id}`);
    
    // Placeholder para chamada à IA
    fetchAIContent(segment.id);
}

// Chamada à API de IA (placeholder)
async function fetchAIContent(segmentId) {
    try {
        // Esta função será integrada com a API do Claude/AI Service
        console.log(`Buscando conteúdo IA para: ${segmentId}`);
        
        // Exemplo de como será implementado:
        // const response = await aiService.generateContent({
        //     segment: segmentId,
        //     userProfile: getUserProfile()
        // });
        
        return { success: true, segment: segmentId };
    } catch (error) {
        console.error('Erro ao buscar conteúdo IA:', error);
    }
}

// Obter perfil do usuário (placeholder)
function getUserProfile() {
    return {
        segment: null,
        interactionCount: 0,
        lastInteraction: null
    };
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadSegments();
    
    // Event listeners para CTAs
    document.getElementById('ctaPrimary').addEventListener('click', function() {
        const firstSegment = segments[0];
        handleSegmentSelection(firstSegment);
    });
    
    document.getElementById('ctaSecondary').addEventListener('click', function() {
        document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
    });
});

// Export para uso global
window.dinamicos = {
    segments,
    loadSegments,
    handleSegmentSelection
};