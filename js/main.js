lucide.createIcons();

function openWhatsApp(text) {
  const phone = '5527997003999';
  window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`, '_blank');
}

function openModal(id) {
  const m = document.getElementById(id);
  m.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const m = document.getElementById(id);
  m.classList.add('hidden');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['termosModal', 'privacidadeModal'].forEach(id => closeModal(id));
  }
});

function updateSimulator() {
  let tamanho = document.querySelector('input[name="tamanho"]:checked')?.value || 'plataforma';
  let inteligencia = document.querySelector('input[name="inteligencia"]:checked')?.value || 'nenhuma';
  let acesso = document.querySelector('input[name="acesso"]:checked')?.value || 'privado';
  let modelo = document.querySelector('input[name="modelo"]:checked')?.value || 'saas';
  const resultCard = document.getElementById('simulatorResult');

  // Cálculo de Preço Estimado
  let basePrice = 0;
  if (tamanho === 'simples') basePrice = 18000;
  if (tamanho === 'plataforma') basePrice = 45000;
  if (tamanho === 'ecossistema') basePrice = 90000;

  let multiplier = 1;
  if (inteligencia === 'ia') multiplier += 0.3; // +30% complexidade com IA
  if (acesso === 'publico') multiplier += 0.2; // +20% overhead de escala/segurança

  let finalPrice = basePrice * multiplier;
  let isSaas = (modelo === 'saas');
  let displayPrice = isSaas ? (finalPrice / 60) : finalPrice;
  let priceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(displayPrice);

  let html = '';

  // Construção do Parecer
  let esforcoText = "";
  if (tamanho === 'simples') esforcoText = "Aproximadamente 80h a 160h. Permite a entrega de um MVP validado rapidamente.";
  if (tamanho === 'plataforma') esforcoText = "Aproximadamente 200h a 400h. Ideal para substituir fluxos longos por uma plataforma core robusta.";
  if (tamanho === 'ecossistema') esforcoText = "Mais de 500h de trabalho. Implica a criação de múltiplos módulos, APIs e front-ends interconectados.";

  let iaText = "";
  if (inteligencia === 'ia') {
    iaText = `<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-dona-100 text-dona-700 mt-2"><i data-lucide="bot" class="w-3.5 h-3.5"></i> Foco em Automação (OpenAI/RAG)</span>`;
  } else {
    iaText = `<span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-slate-200 text-slate-600 mt-2"><i data-lucide="code-2" class="w-3.5 h-3.5"></i> Arquitetura Tradicional</span>`;
  }

  let infraText = "";
  let mensalidadeText = "";
  if (acesso === 'privado') {
    infraText = "Infraestrutura Leve (Segurança corporativa sem alta concorrência).";
  } else {
    infraText = "Infraestrutura Elástica (Preparada para picos severos de acesso).";
  }

  if (isSaas) {
    mensalidadeText = (acesso === 'privado')
      ? "Manutenção, suporte e servidor inclusos na mensalidade."
      : "Servidor escalonável + suporte intensivo garantidos na mensalidade.";
  } else {
    mensalidadeText = "Você assume as responsabilidades técnicas de hospedagem, evolução e manutenção do código fonte.";
  }

  html = `
    <div class="mb-5">
      <h5 class="font-bold text-white text-base mb-1">Esforço Estimado de Engenharia</h5>
      <p class="text-slate-400 text-sm font-medium leading-relaxed">${esforcoText}</p>
      ${iaText}
    </div>
    
    <div class="mb-6">
      <h5 class="font-bold text-white text-base mb-1">Impacto de Manutenção</h5>
      <p class="text-slate-400 text-sm font-medium leading-relaxed mb-1"><strong class="text-slate-300">Arquitetura de Dados:</strong> ${infraText}</p>
      <p class="text-slate-400 text-sm font-medium leading-relaxed"><strong class="text-slate-300">Responsabilidade:</strong> ${mensalidadeText}</p>
    </div>

    <div class="pt-5 border-t border-slate-800">
      <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Estimativa de Investimento</p>
      <div class="flex items-baseline gap-2">
        <span class="text-sm font-bold text-slate-400">${isSaas ? 'Mensalidade a partir de' : 'A partir de'}</span>
        <span class="text-3xl font-extrabold text-white">${priceFormatted}</span>
      </div>
    </div>
  `;

  resultCard.style.opacity = 0;
  setTimeout(() => {
    resultCard.innerHTML = html;
    lucide.createIcons();
    resultCard.style.opacity = 1;
  }, 150);
}

function submitSimulator() {
  const t = document.querySelector('input[name="tamanho"]:checked')?.value;
  const i = document.querySelector('input[name="inteligencia"]:checked')?.value;
  const a = document.querySelector('input[name="acesso"]:checked')?.value;
  const m = document.querySelector('input[name="modelo"]:checked')?.value || 'saas';

  let basePrice = 0;
  if (t === 'simples') basePrice = 18000;
  if (t === 'plataforma') basePrice = 45000;
  if (t === 'ecossistema') basePrice = 90000;
  let multiplier = 1;
  if (i === 'ia') multiplier += 0.3;
  if (a === 'publico') multiplier += 0.2;
  let finalPrice = basePrice * multiplier;

  let isSaas = (m === 'saas');
  let displayPrice = isSaas ? (finalPrice / 60) : finalPrice;
  let priceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(displayPrice);

  let tMap = { 'simples': 'Ideia Simples / MVP', 'plataforma': 'Plataforma Core', 'ecossistema': 'Ecossistema Complexo' };
  let iMap = { 'nenhuma': 'Engenharia Tradicional', 'ia': 'Automação com IA' };
  let aMap = { 'privado': 'Uso Interno/Privado', 'publico': 'Público/B2C' };
  let mMap = { 'saas': 'SaaS (Infra Dona APP)', 'codigo': 'Código Fonte' };

  let priceLabel = isSaas ? 'Mensalidade Estimada' : 'Investimento do Projeto';

  let msg = `Olá! Vim pelo site da Dona APP e acabo de dimensionar meu escopo na calculadora.\n\n*Cenário Estimado:*\n- Volume: ${tMap[t]}\n- Tecnologia: ${iMap[i]}\n- Arquitetura: ${aMap[a]}\n- Contratação: ${mMap[m]}\n\n*${priceLabel}:* A partir de ${priceFormatted}\n\nGostaria de agendar uma reunião técnica para discutirmos os detalhes.`;
  openWhatsApp(msg);
}

document.addEventListener('DOMContentLoaded', () => {
  updateSimulator();

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Fechar ao clicar em um link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      const icon = item.querySelector('.faq-icon');
      
      // Close all
      faqItems.forEach(i => {
        i.classList.remove('active', 'border-dona-500/30');
        i.querySelector('.faq-answer').style.maxHeight = null;
        const iIcon = i.querySelector('.faq-icon');
        iIcon.classList.remove('rotate-180', 'text-dona-500');
        iIcon.classList.add('text-slate-500');
      });

      // Open if wasn't active
      if (!isActive) {
        item.classList.add('active', 'border-dona-500/30');
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.classList.add('rotate-180', 'text-dona-500');
        icon.classList.remove('text-slate-500');
      }
    });
  });
  
  // Initialize AOS
  if(typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }
});
