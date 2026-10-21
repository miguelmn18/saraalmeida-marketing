import React, { useEffect, useMemo, useRef, useState } from 'react';

import {

  ArrowDown, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, BarChart3,

  Check, ChevronDown, ExternalLink, Instagram, Mail, Menu, MessageCircle,

  Palette, Play, Sparkles, Video, X, Gift, PenTool, Layers3, Image as ImageIcon

} from 'lucide-react';

const WHATSAPP = 'https://wa.me/558381590351?text=Ol%C3%A1%2C%20Sara!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20conhecer%20seus%20servi%C3%A7os.';

const assets = '/imagens-serviço/';

const services = [

  { icon: Palette, title: 'Artes digitais', text: 'Ilustrações, banners, materiais ricos e peças visuais personalizadas para valorizar o seu negócio.' },

  { icon: Gift, title: 'Artes comemorativas', text: 'Identidade visual e papelaria digital para datas especiais, homenagens e celebrações marcantes.' },

  { icon: Mail, title: 'Convites digitais', text: 'Convites criativos e interativos para casamentos, aniversários, formaturas e eventos corporativos.' },

  { icon: PenTool, title: 'Logotipos', text: 'Marcas com personalidade, construídas para traduzir a essência e o posicionamento do seu negócio.' },

  { icon: Layers3, title: 'Posts e carrosséis', text: 'Conteúdo visual estratégico para redes sociais, pensado para gerar conexão e engajamento.' },

  { icon: Video, title: 'Vídeos e coberturas', text: 'Captação e edição de Reels, TikToks, vídeos institucionais e cobertura audiovisual de eventos.' },

];

const projects = [

  { images: ['croche-1.PNG', 'croche-2.PNG'], label: 'Identidade visual · Crochê' },

  { images: ['IMG_4953.PNG', 'IMG_4954.PNG'], label: 'Design de marca' },

  { images: ['IMG_4955.PNG', 'canna-2.PNG'], label: 'Conteúdo para redes sociais' },

  { images: ['canna-3.1.PNG', 'sara-1.PNG'], label: 'Direção de arte' },

  { images: ['sara-2.PNG', 'sara-4.PNG'], label: 'Design e comunicação' },

  { images: ['sara-5.PNG', 'sara-6.PNG'], label: 'Projetos criativos' },

  { images: ['sara-7.PNG'], label: 'Peça em destaque' },

  { images: ['IMG_4938.PNG', 'IMG_4939.PNG'], label: 'Design para marcas' },

  { images: ['IMG_4940.PNG', 'IMG_4941.PNG'], label: 'Conteúdo visual' },

  { images: ['IMG_4942.PNG', 'IMG_4943.PNG'], label: 'Identidade e campanhas' },

  { images: ['IMG_4944.PNG', 'IMG_4945.PNG'], label: 'Criação digital' },

  { images: ['IMG_4946.PNG', 'IMG_4947.PNG'], label: 'Comunicação visual' },

  { images: ['IMG_4950.PNG'], label: 'Peça de portfólio' },

  { video: 'IMG_4960.MP4', label: 'Projeto audiovisual' },

  { video: 'IMG_4959.MP4', label: 'Conteúdo em vídeo' },

  { video: 'IMG_4958.MP4', label: 'Edição audiovisual' },

];

const workImages = [

  ['imagens/big-nordeste-1.jpg', 'Projeto Rede Bignordeste'],

  ['imagens/big-nordeste-2.jpg', 'Campanha Rede Bignordeste'],

  ['imagens/big-nordeste-3.jpg', 'Conteúdo de varejo'],

  ['imagens/rede-paraiba-3.jpg', 'Projeto Rede Paraíba'],

  ['imagens/rede-paraiba-4.jpg', 'Campanha Rede Paraíba'],

];

function SectionHeading({ eyebrow, title, centered = false, children }) {

  return <div className={`section-heading ${centered ? 'centered' : ''}`}>
<span className="eyebrow">{eyebrow}</span>
<h2>{title}</h2>{children && <p>{children}</p>}</div>;

}

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [slide, setSlide] = useState(0);

  const [lightbox, setLightbox] = useState(null);

  const [scrolled, setScrolled] = useState(false);

  const canvasRef = useRef(null);

  const maxSlide = projects.length;

  useEffect(() => {

    const onScroll = () => setScrolled(window.scrollY > 18);

    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {

      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }

    }), { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };

  }, []);

  useEffect(() => {

    const onKey = (event) => {

      if (event.key === 'Escape') setLightbox(null);

      if (event.key === 'ArrowRight' && lightbox) setLightbox((prev) => ({ ...prev, index: (prev.index + 1) % prev.items.length }));

      if (event.key === 'ArrowLeft' && lightbox) setLightbox((prev) => ({ ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length }));

    };

    window.addEventListener('keydown', onKey);

    return () => window.removeEventListener('keydown', onKey);

  }, [lightbox]);

  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;

    const draw = () => {

      const rect = canvas.getBoundingClientRect();

      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;

      const ctx = canvas.getContext('2d'); ctx.scale(dpr, dpr);

      const w = rect.width, h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const data = [38, 53, 46, 72, 64, 86, 78];

      const labels = ['Estratégia', 'Pesquisa', 'Conteúdo', 'Consistência', 'Comunidade', 'Análise', 'Evolução'];

      const left = 24, right = 18, top = 22, bottom = 42;

      const chartW = w - left - right, chartH = h - top - bottom;

      ctx.font = '11px DM Sans, sans-serif'; ctx.textAlign = 'center';

      for (let i = 0; i < 4; i++) {

        const y = top + chartH * i / 3;

        ctx.beginPath(); ctx.strokeStyle = '#ebe6dd'; ctx.lineWidth = 1; ctx.moveTo(left, y); ctx.lineTo(w - right, y); ctx.stroke();

      }

      const points = data.map((v, i) => ({ x: left + chartW * (i / (data.length - 1)), y: top + chartH * (1 - v / 100) }));

      const gradient = ctx.createLinearGradient(0, top, 0, h - bottom); gradient.addColorStop(0, 'rgba(197,168,128,.27)'); gradient.addColorStop(1, 'rgba(197,168,128,0)');

      ctx.beginPath(); ctx.moveTo(points[0].x, h - bottom); points.forEach(p => ctx.lineTo(p.x, p.y)); ctx.lineTo(points.at(-1).x, h - bottom); ctx.closePath(); ctx.fillStyle = gradient; ctx.fill();

      ctx.beginPath(); points.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)); ctx.strokeStyle = '#b69a70'; ctx.lineWidth = 2.5; ctx.lineJoin = 'round'; ctx.stroke();

      points.forEach((p, i) => {

        ctx.beginPath(); ctx.arc(p.x, p.y, 4, 0, Math.PI * 2); ctx.fillStyle = '#fcfbf9'; ctx.fill(); ctx.strokeStyle = '#b69a70'; ctx.lineWidth = 2; ctx.stroke();

        ctx.fillStyle = '#82796c'; ctx.fillText(labels[i], p.x, h - 15);

      });

    };

    draw(); const observer = new ResizeObserver(draw); observer.observe(canvas);

    return () => observer.disconnect();

  }, []);

  const activeProject = projects[slide];

  const lightboxItems = useMemo(() => lightbox?.items || [], [lightbox]);

  const navigateTo = () => setMenuOpen(false);

  const moveSlide = (direction) => setSlide((current) => (current + direction + maxSlide) % maxSlide);

  return <>

    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>

      <a className="brand" href="#inicio" aria-label="Sara Almeida, início">
<img src="/imagens/perfil-nav%20(3).PNG" alt="" />
<span>SARA <b>ALMEIDA</b>
</span>
</a>

      <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>

      <nav className={menuOpen ? 'nav-open' : ''} aria-label="Navegação principal">

        <a href="#biografia" onClick={navigateTo}>Biografia</a>
<a href="#trajetoria" onClick={navigateTo}>Trajetória</a>
<a href="#servicos" onClick={navigateTo}>Serviços</a>
<a href="#portfolio" onClick={navigateTo}>Portfólio</a>

        <a className="nav-cta" href="#contato" onClick={navigateTo}>Vamos conversar <ArrowUpRight size={15} />
</a>

      </nav>

    </header>

    <main>

      <section className="hero" id="inicio">

        <div className="hero-grain" aria-hidden="true">
</div>

        <div className="hero-copy reveal">

          <span className="hero-kicker">
<span className="status-dot">
</span> Estratégia, criatividade e conexão</span>

          <h1>Marcas fortes<br />começam com <em>boas histórias.</em>
</h1>

          <p className="hero-description">Sou Sara Almeida, profissional de Marketing Digital e Social Media. Transformo ideias em conteúdo estratégico para aproximar marcas de pessoas.</p>

          <div className="hero-actions">
<a className="button button-dark" href="#portfolio">Explorar portfólio <ArrowUpRight size={17} />
</a>
<a className="text-link" href="#biografia">Conheça minha história <ArrowDown size={15} />
</a>
</div>

          <div className="hero-footnote">
<span>01 / 04</span>
<span className="footnote-line">
</span>
<span>ESTRATÉGIA DIGITAL</span>
</div>

        </div>

        <div className="hero-visual reveal">

          <div className="portrait-frame">
<img src="/imagens/perfil2.jpg" alt="Sara Almeida, profissional de marketing digital" className="hero-portrait" />
<div className="portrait-caption">
<span>Estratégia com propósito.</span>
<span>Cacimba De Dentro · PB</span>
</div>
</div>

          <div className="floating-note">
<Sparkles size={18} />
<span>Ideias que<br />
<b>movem marcas.</b>
</span>
</div>

          <div className="hero-index">S / A <span>—</span> 2026</div>

        </div>

        <a className="scroll-cue" href="#biografia" aria-label="Rolar para a próxima seção">
<span>ROLE PARA DESCOBRIR</span>
<ArrowDownRight size={18} />
</a>

      </section>

      <section className="intro-section section-wrap reveal" id="biografia">

        <div className="intro-side">
<span className="eyebrow">01 — Quem sou</span>
<div className="vertical-rule">
</div>
<span className="side-note">O lado humano<br />da estratégia.</span>
</div>

        <div className="intro-main">
<SectionHeading eyebrow="Muito prazer" title={<>A paixão por conectar<br />
<em>marcas e pessoas.</em>
</>} />
<div className="intro-body">
<p>Atuar estrategicamente no Marketing e como Social Media aos 25 anos não era o plano inicial, mas transformou-se na minha maior realização profissional. Minha trajetória começou aos 16 anos, logo após o ensino médio. No atendimento direto e no controle operacional, descobri minha verdadeira paixão: a troca com o público e a análise do comportamento de consumo.</p>
<p>Após experiências nos segmentos de moda, calçados e perfumaria, compreendi que meu olhar analítico convergia para a comunicação visual e a fotografia. Minha mente buscava constantemente criar formas de vender mais e ampliar o alcance dos negócios. Transformei esses anos em um laboratório para o que faço hoje.</p>
</div>
<blockquote>“O crescimento sustentável no digital não é fruto do acaso, mas de uma estratégia refinada e bem executada.”<span>— Sara Almeida</span>
</blockquote>
</div>

      </section>

      <section className="career-section" id="trajetoria">
<div className="section-wrap career-layout reveal">
<div className="career-copy">
<span className="eyebrow">02 — Experiência profissional</span>
<h2>Resultados que unem<br />
<em>dados e criatividade.</em>
</h2>
<p>Minha jornada começou de forma independente, com fotografia de eventos, edição de vídeo e design digital. Desde então, venho aprimorando a técnica de contar histórias visuais que despertam interesse e retêm a atenção.</p>
<div className="career-item">
<span className="career-year">2025</span>
<div>
<h3>Rede Bignordeste</h3>
<p>Conteúdo orgânico presencial, stories diários e campanhas voltadas ao varejo, com atenção à comunicação da marca e ao relacionamento com o público.</p>
</div>
</div>
<div className="career-item">
<span className="career-year">2023</span>
<div>
<h3>Rede Paraíba</h3>
<p>Estratégia de conteúdo orgânico para uma rede de supermercados. O trabalho contribuiu para ampliar a presença digital, com registros de até meio milhão de acessos diários no perfil, conforme informado no portfólio original.</p>
</div>
</div>
<a href="/CERTIFICADO%20-%20Sara%20de%20Almeida%20Oliveira.pdf" target="_blank" rel="noreferrer" className="text-link certificate-link">Ver certificado <ExternalLink size={15} />
</a>
</div>
<div className="career-mosaic">{workImages.map(([src, alt], i) => <button className={`mosaic-image mosaic-${i + 1}`} key={src} onClick={() => setLightbox({ items: workImages.map(([image, label]) => ({ src: `/${image}`, alt: label })), index: i, title: 'Experiência profissional' })} aria-label={`Ampliar imagem: ${alt}`}>
<img src={`/${src}`} alt={alt} loading="lazy" />
</button>)}<div className="mosaic-stamp">
<span>Experiência</span>
<b>+</b>
<span>Aprendizado</span>
</div>
</div>
</div>
</section>

      <section className="services-section section-wrap" id="servicos">
<div className="services-head reveal">
<div>
<span className="eyebrow">03 — O que eu faço</span>
<h2>Ideias criativas.<br />
<em>Intenção estratégica.</em>
</h2>
</div>
<p>Uma combinação de olhar criativo e pensamento estratégico para construir uma comunicação mais consistente para a sua marca.</p>
</div>
<div className="services-grid">{services.map(({ icon: Icon, title, text }, i) => <article className="service-card reveal" key={title}>
<div className="service-card-top">
<span>0{i + 1}</span>
<Icon size={22} strokeWidth={1.5} />
</div>
<h3>{title}</h3>
<p>{text}</p>
<a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label={`Conversar sobre ${title}`}>
<ArrowUpRight size={18} />
</a>
</article>)}</div>
</section>

      <section className="portfolio-section" id="portfolio">
<div className="section-wrap">
<div className="portfolio-heading reveal">
<div>
<span className="eyebrow">04 — Portfólio criativo</span>
<h2>Trabalhos em <em>destaque.</em>
</h2>
</div>
<p>Uma seleção de projetos, peças e conteúdos que traduzem diferentes ideias em comunicação visual.</p>
</div>
<div className="portfolio-stage reveal">
<div className="portfolio-meta">
<span>{String(slide + 1).padStart(2, '0')} <i>/ {String(projects.length).padStart(2, '0')}</i>
</span>
<span>{activeProject.label}</span>
<div className="portfolio-controls">
<button onClick={() => moveSlide(-1)} aria-label="Projeto anterior">
<ArrowLeft size={18} />
</button>
<button onClick={() => moveSlide(1)} aria-label="Próximo projeto">
<ArrowRight size={18} />
</button>
</div>
</div>
<div className="project-viewport" key={slide}>
<div className={`project-media ${activeProject.video ? 'project-video' : ''}`}>{activeProject.video ? <video src={`${assets}${activeProject.video}`} controls playsInline preload="metadata" aria-label={activeProject.label} /> : activeProject.images.map((image, i) => <button key={image} className="project-image" onClick={() => setLightbox({ items: activeProject.images.map((name) => ({ src: `${assets}${name}`, alt: activeProject.label })), index: i, title: activeProject.label })} aria-label={`Ampliar ${activeProject.label}`}>
<img src={`${assets}${image}`} alt={`${activeProject.label} — imagem ${i + 1}`} loading="lazy" />
<span>
<ImageIcon size={17} /> Ampliar</span>
</button>)}</div>
</div>
<div className="portfolio-progress">
<div style={{ width: `${((slide + 1) / projects.length) * 100}%` }} />
</div>
</div>
<div className="portfolio-bottom reveal">
<span>DESLIZE PELA SELEÇÃO</span>
<span>DESIGN · CONTEÚDO · VÍDEO</span>
</div>
</div>
</section>

      <section className="method-section section-wrap reveal">
<div className="method-copy">
<span className="eyebrow">05 — Metodologia</span>
<h2>Visão estratégica<br />para um digital <em>mais forte.</em>
</h2>
<p>Uma presença digital consistente vai além de publicar. Pesquisa, planejamento, conteúdo e análise trabalham juntos para aproximar marcas do público certo.</p>
<div className="method-points">
<div>
<span>01</span>
<p>
<b>Entender</b>
<small>Marca, público e objetivos.</small>
</p>
</div>
<div>
<span>02</span>
<p>
<b>Criar</b>
<small>Conteúdo com intenção e identidade.</small>
</p>
</div>
<div>
<span>03</span>
<p>
<b>Aprimorar</b>
<small>Observar, aprender e evoluir.</small>
</p>
</div>
</div>
</div>
<div className="chart-card">
<div className="chart-card-heading">
<div>
<span className="eyebrow">Ciclo de trabalho</span>
<h3>Estratégia em movimento</h3>
</div>
<BarChart3 size={22} />
</div>
<canvas ref={canvasRef} className="strategy-chart" aria-label="Ilustração conceitual do processo de estratégia, criação e evolução" role="public/img">
</canvas>
<div className="chart-note">
<span className="chart-dot">
</span> Processo contínuo de melhoria <span className="chart-note-end">S / A</span>
</div>
<p className="chart-disclaimer">Visual ilustrativo da metodologia — não representa métricas reais de desempenho.</p>
</div>
</section>

      <section className="contact-section" id="contato">
<div className="contact-orbit orbit-one">
</div>
<div className="contact-orbit orbit-two">
</div>
<div className="contact-inner reveal">
<span className="eyebrow">06 — Vamos conversar</span>
<h2>Sua próxima ideia<br />pode começar <em>aqui.</em>
</h2>
<p>Quer fortalecer a presença digital da sua marca, criar conteúdo ou tirar dúvidas sobre um projeto? Vamos conversar sobre o que você precisa.</p>
<a className="button button-light" href={WHATSAPP} target="_blank" rel="noreferrer">Falar com Sara pelo WhatsApp <ArrowUpRight size={18} />
</a>
<div className="contact-signature">Sara Almeida <span>Marketing Digital & Social Media</span>
</div>
</div>
</section>

    </main>

    <footer className="site-footer">
<a className="footer-brand" href="#inicio">
<img src="/imagens/perfil-nav%20(3).PNG" alt="" />
<span>SARA <b>ALMEIDA</b>
</span>
</a>
<p>Estratégia, criatividade e conexão.</p>
<div className="footer-links">
<a href="https://www.instagram.com/saradealmeidaa/" target="_blank" rel="noreferrer">
<Instagram size={16} /> Instagram</a>
<a href={WHATSAPP} target="_blank" rel="noreferrer">
<MessageCircle size={16} /> WhatsApp</a>
<a href="mailto:saraalmeida878@gmail.com">
<Mail size={16} /> E-mail</a>
</div>
<span className="copyright">© {new Date().getFullYear()} Sara Almeida. Todos os direitos reservados.</span>
</footer>

    <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Conversar com Sara pelo WhatsApp">
<MessageCircle size={23} />
<span>Vamos conversar</span>
</a>

    {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.title} onMouseDown={(e) => { if (e.target === e.currentTarget) setLightbox(null); }}>
<button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Fechar imagem">
<X />
</button>
<button className="lightbox-nav lightbox-prev" onClick={() => setLightbox((prev) => ({ ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length }))} aria-label="Imagem anterior">
<ArrowLeft />
</button>
<div className="lightbox-content">{lightboxItems[lightbox.index]?.src && <img src={lightboxItems[lightbox.index].src} alt={lightboxItems[lightbox.index].alt} />}<p>{lightbox.title}</p>
</div>
<button className="lightbox-nav lightbox-next" onClick={() => setLightbox((prev) => ({ ...prev, index: (prev.index + 1) % prev.items.length }))} aria-label="Próxima imagem">
<ArrowRight />
</button>
</div>}

  </>;

}

export default App;
