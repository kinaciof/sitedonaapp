# Dona APP - Site Institucional

Landing page oficial da **Dona APP - Engenharia de Software & Inteligência Artificial**.

## Tecnologias

Este projeto foi construído utilizando:
- **HTML5** (Semântico)
- **Tailwind CSS** (via CDN para prototipagem ágil)
- **Vanilla JavaScript** (Interações, Menu, FAQ e Simulador)
- **AOS.js** (Animate On Scroll para animações)
- **Lucide Icons** (Ícones SVG)

## Estrutura do Projeto

- `index.html`: Estrutura principal da página (Single Page).
- `css/styles.css`: Estilos customizados e complementares ao Tailwind.
- `js/main.js`: Lógica de interface (Menu Mobile, Acordeon FAQ e Calculadora de Orçamentos).
- `images/`: Imagens do projeto e arquivos estáticos (como o OG Image para SEO).

## Funcionalidades Principais

1. **Calculadora de Projetos:** Um simulador interativo onde o usuário seleciona o escopo, nível de IA, arquitetura e modelo de negócio, gerando uma estimativa dinâmica de custos. O contato final já preenche a mensagem do WhatsApp com os dados parametrizados.
2. **FAQ Dinâmico:** Seção de perguntas frequentes implementada com CSS puro de transição suave e JavaScript para alternância de altura (`scrollHeight`).
3. **Menu Mobile e Modais:** Estrutura overlay para mobile e modais detalhando Políticas de Privacidade e Termos de Uso.
