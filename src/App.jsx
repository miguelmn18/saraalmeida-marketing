import React, { useEffect, useMemo, useRef, useState } from 'react';

import {

  ArrowDown, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, BarChart3,

  Check, ChevronDown, ExternalLink, Instagram, Mail, Menu, MessageCircle,

  Palette, Play, Sparkles, Video, X, Gift, PenTool, Layers3, Maximize2, Image as ImageIcon

} from 'lucide-react';

const WHATSAPP = 'https://wa.me/558381590351?text=Ol%C3%A1%2C%20Sara!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20fazer%20um%20orçamento.';

const assets = '/imagens-serviço/';

const services = [

  { icon: Palette, title: 'Artes digitais', text: 'Ilustrações, banners, materiais ricos e peças visuais personalizadas para valorizar o seu negócio.' },

  { icon: Gift, title: 'Artes comemorativas', text: 'Identidade visual e papelaria digital para datas especiais, homenagens e celebrações marcantes.' },

  { icon: Mail, title: 'Convites digitais', text: 'Convites criativos e interativos para casamentos, aniversários, formaturas e eventos corporativos.' },

  { icon: PenTool, title: 'Logotipos', text: 'Marcas com personalidade, construídas para traduzir a essência e o posicionamento do seu negócio.' },

  { icon: Layers3, title: 'Posts e carrosséis', text: 'Conteúdo visual estratégico para redes sociais, pensado para gerar conexão e engajamento.' },

  { icon: Video, title: 'Vídeos e coberturas', text: 'Captação e edição de Reels, TikToks, vídeos institucionais e cobertura audiovisual de eventos.' },

];

const imageProjects = [
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
];

const videoProjects = [
 { video: 'imagens-serviço/IMG_4960.MP4', label: 'Produção e edição audiovisual para comemoração Dia das Mulheres ' },
  { video: 'imagens-serviço/IMG_4959.MP4', label: 'Produção e edição audiovisual bastidores reunião de equipe' },
  { video: 'imagens-serviço/IMG_4958.MP4', label: 'Produção e edição audiovisual da divulgação de campanha' },
  { video: 'imagens-serviço/IMG_2685.mp4', label: 'Story' },
  { video: 'imagens-serviço/IMG_2708.mp4', label: 'Produção e edição audiovisual Inauguração Salão de Beleza' },
  { video: 'imagens-serviço/IMG_2684.mp4', label: 'Story' },
];

const workImages = [

  ['imagens/big-nordeste-1.jpg', 'Projeto Rede Bignordeste'],

  ['imagens/big-nordeste-2.jpg', 'Campanha Rede Bignordeste'],

  ['imagens/big-nordeste-3.jpg', 'Conteúdo de varejo'],

  ['imagens/rede-paraiba-3.jpg', 'Projeto Rede Paraíba'],

  ['imagens/rede-paraiba-4.jpg', 'Campanha Rede Paraíba'],

];


function MediaCarousel({ items, type = 'image', onOpenImage }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = items.length;
  const previous = () => setActiveIndex((current) => (current - 1 + total) % total);
  const next = () => setActiveIndex((current) => (current + 1) % total);
  if (!total) return null;
  const activeItem = items[activeIndex];

  return (
    <div className="media-carousel" aria-roledescription="carrossel">
      <div className={`media-carousel-stage ${type === 'video' ? 'media-carousel-video' : 'media-carousel-image'}`}>
        {type === 'image' ? (
          <button type="button" className="media-carousel-image-button"
            onClick={() => onOpenImage?.(activeIndex)}
            aria-label={`Ampliar imagem ${activeIndex + 1}: ${activeItem.label}`}>
            <img key={activeItem.src} src={activeItem.src} alt={activeItem.label}
              loading="eager" decoding="async" fetchPriority="high" />
            <span className="media-carousel-expand"><Maximize2 size={15} /> Ampliar imagem</span>
          </button>
        ) : (
          <video key={activeItem.src} src={activeItem.src} controls playsInline
            preload="none" controlsList="nodownload" aria-label={activeItem.label} />
        )}
      </div>
      <div className="media-carousel-footer">
        <div className="media-carousel-caption">
          <span className="media-carousel-position">{String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
          <p>{activeItem.label}</p>
        </div>
        <div className="media-carousel-controls">
          <button type="button" onClick={previous} aria-label="Item anterior" disabled={total < 2}><ArrowLeft size={18} /></button>
          <button type="button" onClick={next} aria-label="Próximo item" disabled={total < 2}><ArrowRight size={18} /></button>
        </div>
      </div>
      <div className="media-carousel-progress" aria-hidden="true">
        <span style={{ width: `${((activeIndex + 1) / total) * 100}%` }} />
      </div>
      <style>{`
        .media-carousel{width:100%;min-width:0}
        .media-carousel-stage{position:relative;width:100%;height:clamp(260px,48vw,590px);display:flex;align-items:center;justify-content:center;overflow:hidden;background:#171613;border-radius:18px}
        .media-carousel-image-button{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;padding:0;border:0;background:transparent;cursor:zoom-in}
        .media-carousel-image-button img{display:block;width:100%;height:100%;max-height:590px;object-fit:contain}
        .media-carousel-expand{position:absolute;right:16px;bottom:16px;display:flex;align-items:center;gap:7px;padding:9px 12px;border-radius:30px;background:rgba(20,19,17,.78);color:#fff;font-size:12px;opacity:.92}
        .media-carousel-video video{display:block;width:100%;height:100%;object-fit:contain;background:#111}
        .media-carousel-footer{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:17px 2px 12px}
        .media-carousel-caption{display:flex;align-items:center;gap:14px;min-width:0}
        .media-carousel-position{flex:none;color:var(--gold,#b69a70);font-size:11px;letter-spacing:.12em;font-weight:700}
        .media-carousel-caption p{margin:0;color:var(--ink,#24211d);font-size:14px;line-height:1.5}
        .media-carousel-controls{display:flex;gap:8px;flex:none}
        .media-carousel-controls button{display:grid;place-items:center;width:42px;height:42px;border:1px solid var(--line,#ded8ce);border-radius:50%;background:transparent;color:var(--ink,#24211d);cursor:pointer;transition:background .2s,color .2s,border-color .2s}
        .media-carousel-controls button:hover{background:var(--dark,#24211d);color:#fff;border-color:var(--dark,#24211d)}
        .media-carousel-controls button:disabled{opacity:.4;cursor:not-allowed}
        .media-carousel-progress{height:2px;width:100%;overflow:hidden;background:var(--line,#ded8ce)}
        .media-carousel-progress span{display:block;height:100%;background:var(--gold,#b69a70);transition:width .25s ease}
        @media(max-width:640px){
          .media-carousel-stage{height:clamp(230px,68vw,390px);border-radius:12px}
          .media-carousel-image-button img{max-height:390px}
          .media-carousel-footer{align-items:flex-start;padding-top:13px}
          .media-carousel-caption{align-items:flex-start;gap:9px}
          .media-carousel-caption p{font-size:12px}
          .media-carousel-controls{gap:6px}
          .media-carousel-controls button{width:36px;height:36px}
          .media-carousel-expand{right:10px;bottom:10px;padding:7px 9px;font-size:11px}
        }
      `}</style>
    </div>
  );
}

function SectionHeading({ eyebrow, title, centered = false, children }) {

  return <div className={`section-heading ${centered ? 'centered' : ''}`}>
<span className="eyebrow">{eyebrow}</span>
<h2>{title}</h2>{children && <p>{children}</p>}</div>;

}

function App() {

  const [menuOpen, setMenuOpen] = useState(false);


  const [lightbox, setLightbox] = useState(null);

  const [scrolled, setScrolled] = useState(false);

  const canvasRef = useRef(null);


  useEffect(() => {

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 18);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {

      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }

    }), { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };

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


  const lightboxItems = useMemo(() => lightbox?.items || [], [lightbox]);

  const navigateTo = () => setMenuOpen(false);


  return <>

    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>

      <a className="brand" href="#inicio" aria-label="Sara Almeida, início">
<img src="/foto-aba.jpeg" alt="" />
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
<img src="/imagens/perfil2.jpg" alt="Sara Almeida, profissional de marketing digital" className="hero-portrait" fetchPriority="high" decoding="async" />
<div className="portrait-caption">
<span>Estratégia com propósito.</span>
<span>Cacimba De Dentro Grande · PB</span>
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
              <h2>Trabalhos em <em>destaque.</em></h2>
            </div>
            <p>Navegue pelos projetos de design e fotografia e pelas produções audiovisuais em galerias compactas e interativas.</p>
          </div>

          <div className="portfolio-galleries reveal">
            <section className="portfolio-gallery image-gallery" aria-labelledby="gallery-images-title">
              <div className="gallery-heading">
                <div className="gallery-icon"><ImageIcon size={21} /></div>
                <div>
                  <span className="gallery-kicker">Galeria 01</span>
                  <h3 id="gallery-images-title">Imagens &amp; Design</h3>
                  <p>Artes, identidades visuais e conteúdos gráficos.</p>
                </div>
                <span className="gallery-count">{imageProjects.reduce((total, project) => total + project.images.length, 0)} imagens</span>
              </div>
              <MediaCarousel
                items={imageProjects.flatMap((project) =>
                  project.images.map((image) => ({
                    src: `${assets}${image}`,
                    label: project.label,
                  }))
                )}
                type="image"
                onOpenImage={(index) => {
                  const items = imageProjects.flatMap((project) =>
                    project.images.map((image) => ({
                      src: `${assets}${image}`,
                      alt: project.label,
                    }))
                  );
                  setLightbox({ items, index, title: 'Portfólio de imagens e design' });
                }}
              />
            </section>

            <section className="portfolio-gallery video-gallery" aria-labelledby="gallery-videos-title">
              <div className="gallery-heading">
                <div className="gallery-icon"><Video size={21} /></div>
                <div>
                  <span className="gallery-kicker">Galeria 02</span>
                  <h3 id="gallery-videos-title">Vídeos &amp; Audiovisual</h3>
                  <p>Reels, registros e produções em movimento.</p>
                </div>
                <span className="gallery-count">{videoProjects.length} vídeos</span>
              </div>
              <MediaCarousel
                items={videoProjects.map(({ video, label }) => ({
                  src: `/${video}`,
                  label,
                }))}
                type="video"
              />
            </section>
          </div>

          <div className="portfolio-bottom reveal">
            <span>DESIGN · CONTEÚDO · VÍDEO</span>
            <span>CARROSSEIS DE IMAGENS E VÍDEOS</span>
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
<img src="/foto-aba.jpeg" alt="" />
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

    <style>{`
      .sara-chat-float {
        position: fixed; right: 26px; bottom: 26px; z-index: 120;
        display: flex; align-items: center; gap: 12px;
        width: max-content; max-width: min(360px, calc(100vw - 32px));
        padding: 9px 16px 9px 9px; border: 1px solid rgba(255,255,255,.72);
        border-radius: 999px; color: #fff; text-decoration: none;
        background: linear-gradient(115deg, #173d32 0%, #205846 58%, #286c50 100%);
        box-shadow: 0 12px 34px rgba(21, 57, 44, .28), 0 3px 10px rgba(21,57,44,.16);
        transition: transform .25s ease, box-shadow .25s ease, filter .25s ease;
        animation: saraChatEntrance .7s .8s both; isolation: isolate;
      }
      .sara-chat-float:hover { transform: translateY(-4px) scale(1.025); filter: brightness(1.08); box-shadow: 0 18px 42px rgba(21,57,44,.34); }
      .sara-chat-avatar-wrap { position: relative; flex: 0 0 54px; width: 54px; height: 54px; }
      .sara-chat-avatar { display:block; width:100%; height:100%; object-fit:cover; object-position:center 28%; border-radius:50%; border:2px solid #f1d6a5; box-shadow:0 0 0 3px rgba(255,255,255,.13); }
      .sara-chat-online { position:absolute; right:0; bottom:1px; width:13px; height:13px; border:2px solid #205846; border-radius:50%; background:#8ee0a4; box-shadow:0 0 0 0 rgba(142,224,164,.65); animation:saraOnlinePulse 2s infinite; }
      .sara-chat-copy { display:flex; flex-direction:column; gap:3px; min-width:0; }
      .sara-chat-kicker { color:#e9d5b2; font-size:9px; line-height:1; font-weight:700; letter-spacing:.13em; text-transform:uppercase; }
      .sara-chat-title { color:#fff; font-size:14px; line-height:1.15; font-weight:700; white-space:nowrap; }
      .sara-chat-subtitle { color:rgba(255,255,255,.78); font-size:10px; line-height:1.2; white-space:nowrap; }
      .sara-chat-action { display:grid; place-items:center; flex:0 0 36px; width:36px; height:36px; margin-left:3px; border-radius:50%; color:#174432; background:#f1d6a5; transition:transform .25s ease, background .25s ease; }
      .sara-chat-float:hover .sara-chat-action { transform:translateX(3px); background:#ffe6bb; }
      @keyframes saraChatEntrance { from { opacity:0; transform:translateY(18px) scale(.96); } to { opacity:1; transform:translateY(0) scale(1); } }
      @keyframes saraOnlinePulse { 0% { box-shadow:0 0 0 0 rgba(142,224,164,.65); } 70% { box-shadow:0 0 0 7px rgba(142,224,164,0); } 100% { box-shadow:0 0 0 0 rgba(142,224,164,0); } }
      @media (max-width: 600px) {
        /* No mobile, o convite vira um botão circular compacto com a foto da Sara. */
        .sara-chat-float {
          right:16px; left:auto; bottom:calc(16px + env(safe-area-inset-bottom));
          width:68px; height:68px; max-width:68px; box-sizing:border-box;
          display:block; padding:4px; border-radius:50%;
          border:2px solid #f1d6a5;
          background:linear-gradient(145deg, #286c50, #173d32);
          box-shadow:0 8px 24px rgba(21,57,44,.34), 0 0 0 5px rgba(241,214,165,.20);
          animation:saraChatEntrance .7s .8s both, saraMobilePulse 2.8s 1.5s infinite;
        }
        .sara-chat-float::before {
          content:""; position:absolute; inset:-6px; border:1px solid rgba(241,214,165,.62);
          border-radius:50%; pointer-events:none;
        }
        .sara-chat-avatar-wrap { position:absolute; inset:3px; width:auto; height:auto; }
        .sara-chat-avatar { border:0; box-shadow:none; }
        .sara-chat-online { right:1px; bottom:3px; width:12px; height:12px; border-color:#173d32; }
        .sara-chat-copy { display:none; }
        .sara-chat-action {
          position:absolute; right:-3px; bottom:-3px; z-index:2;
          display:grid; place-items:center; width:29px; height:29px;
          margin:0; border:2px solid #fff; border-radius:50%;
          color:#fff; background:#20b968; box-shadow:0 3px 10px rgba(0,0,0,.24);
        }
        .sara-chat-float:hover { transform:translateY(-3px) scale(1.04); }
      }
      @keyframes saraMobilePulse {
        0%, 100% { box-shadow:0 8px 24px rgba(21,57,44,.34), 0 0 0 5px rgba(241,214,165,.20); }
        50% { box-shadow:0 10px 28px rgba(21,57,44,.40), 0 0 0 8px rgba(241,214,165,.08); }
      }
      @media (prefers-reduced-motion: reduce) { .sara-chat-float, .sara-chat-online { animation:none; transition:none; } }
    `}</style>
    <a className="sara-chat-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Chamar Sara pelo WhatsApp e conversar sobre seu projeto">
      <span className="sara-chat-avatar-wrap">
        <img className="sara-chat-avatar" src="/imagens/perfil2.jpg" alt="Sara Almeida" loading="lazy" />
        <span className="sara-chat-online" aria-hidden="true" />
      </span>
      <span className="sara-chat-copy">
        <span className="sara-chat-kicker">Vamos tirar sua ideia do papel?</span>
        <span className="sara-chat-title">Converse com a Sara</span>
        <span className="sara-chat-subtitle">Conte o que você está planejando ✨</span>
      </span>
      <span className="sara-chat-action" aria-hidden="true"><MessageCircle size={19} /></span>
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
