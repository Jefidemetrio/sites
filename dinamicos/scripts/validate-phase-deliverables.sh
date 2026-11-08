#!/bin/bash
# Script de Validação de Entregas - Dinamicos
# Uso: ./scripts/validate-phase-deliverables.sh [fase]

set -e

PROJECT_DIR="/opt/data/sites/dinamicos"
PHASE=${1:-3}

echo "=========================================="
echo "Validação de Entregas - Fase $PHASE"
echo "=========================================="

check_mark() {
    echo "✅ $1"
}

check_cross() {
    echo "❌ $1"
}

check_partial() {
    echo "⚠️ $1"
}

# Fase 3: Art Direction
validate_phase_3() {
    echo ""
    echo "--- FASE 3: Art Direction ---"
    echo ""
    
    local score=0
    local total=85
    
    # 1. Design System Files (25 pts)
    echo "=== Design System (25 pts) ==="
    local design_files=0
    
    if [ -f "$PROJECT_DIR/design-system/variables.css" ]; then
        check_mark "variables.css - Design tokens"
        ((design_files+=5))
    else
        check_cross "variables.css - DESIGN TOKENS FALTANDO"
    fi
    
    if [ -f "$PROJECT_DIR/design-system/colors.css" ]; then
        check_mark "colors.css - Paleta de cores"
        ((design_files+=5))
    else
        check_cross "colors.css - PALETA FALTANDO"
    fi
    
    if [ -f "$PROJECT_DIR/design-system/typography.css" ]; then
        check_mark "typography.css - Tipografia"
        ((design_files+=5))
    else
        check_cross "typography.css - TIPOGRAFIA FALTANDO"
    fi
    
    score=$((score + design_files))
    
    # 2. Brand Direction (5 pts)
    echo ""
    echo "=== Brand Direction (5 pts) ==="
    if [ -f "$PROJECT_DIR/design-system/brand-direction.md" ]; then
        check_mark "brand-direction.md - Direção da marca"
        ((score+=5))
    else
        check_cross "brand-direction.md - DIREÇÃO DA MARCA FALTANDO"
    fi
    
    # 3. Demo HTML (5 pts)
    echo ""
    echo "=== Demo funcional (5 pts) ==="
    if [ -f "$PROJECT_DIR/design-system/demo.html" ]; then
        check_mark "demo.html - Demo funcional"
        ((score+=5))
    else
        check_cross "demo.html - DEMO FALTANDO"
    fi
    
    # 4. COMPONENTES IMPLEMENTADOS (25 pts max)
    echo ""
    echo "=== Componentes React/HTML (25 pts) ==="
    
    local component_count=$(find "$PROJECT_DIR/components" \( -name "*.tsx" -o -name "*.jsx" -o -name "*.html" \) 2>/dev/null | grep -v node_modules | wc -l)
    
    if [ "$component_count" -ge 8 ]; then
        check_mark "Componentes implementados: $component_count arquivos (mínimo 8)"
        ((score+=25))
    elif [ "$component_count" -ge 5 ]; then
        check_mark "Componentes implementados: $component_count arquivos (meia pontuação)"
        ((score+=15))
    else
        check_cross "Poucos componentes: $component_count (mínimo 8)"
    fi
    
    # 5. Wireframes (10 pts)
    echo ""
    echo "=== Wireframes (10 pts) ==="
    local wireframe_count=$(ls "$PROJECT_DIR/phase4-wireframes"/*.md 2>/dev/null | wc -l)
    if [ "$wireframe_count" -ge 6 ]; then
        check_mark "Wireframes documentados: $wireframe_count arquivos"
        ((score+=10))
    else
        check_mark "Wireframes documentados: $wireframe_count arquivos"
        ((score+=5))
    fi
    
    # 6. Páginas principais (15 pts)
    echo ""
    echo "=== Páginas Principais (15 pts) ==="
    local page_count=$(find "$PROJECT_DIR/pages" \( -name "*.tsx" -o -name "*.html" \) 2>/dev/null | grep -v node_modules | wc -l)
    if [ "$page_count" -ge 3 ]; then
        check_mark "Páginas criadas: $page_count arquivos (mínimo 3)"
        ((score+=15))
    elif [ "$page_count" -ge 1 ]; then
        check_mark "Páginas criadas: $page_count arquivos"
        ((score+=8))
    else
        check_cross "Nenhuma página principal criada"
    fi
    
    # 7. integração CSS (10 pts)
    echo ""
    echo "=== Integração com CSS (10 pts) ==="
    if [ -f "$PROJECT_DIR/style.css" ]; then
        check_mark "style.css base existente"
        local responsive_count=$(grep -c "@media" "$PROJECT_DIR/style.css" 2>/dev/null || echo 0)
        if [ "$responsive_count" -gt 0 ]; then
            check_mark "Media queries encontradas: $responsive_count"
            ((score+=10))
        else
            check_mark "style.css existente"
            ((score+=5))
        fi
    else
        check_cross "style.css não encontrado"
    fi
    
    echo ""
    echo "=========================================="
    echo "SCORE FASE 3: $score/$total"
    
    if [ "$score" -ge 85 ]; then
        echo "✅ FASE 3 APROVADA"
        echo "STATUS: COMPLETED"
        touch "$PROJECT_DIR/.phase3-validated"
        return 0
    elif [ "$score" -ge 60 ]; then
        echo "⚠️ FASE 3 QUASE APROVADA"
        local needed=$((85 - score))
        echo "STATUS: APPROXIMATE - Precisa de $needed pontos mais"
        return 1
    else
        echo "❌ FASE 3 REPROVADA"
        echo "STATUS: FAILED - Entregas insuficientes"
        return 1
    fi
}

# Main
echo "Projeto: $PROJECT_DIR"
echo ""

case $PHASE in
    3)
        validate_phase_3
        ;;
    *)
        echo "Uso: $0 [3]"
        echo "  3 = Validar Fase 3 (Art Direction)"
        ;;
esac