# Sara Almeida — Portfólio React

Portfólio responsivo desenvolvido com React + Vite, com visual editorial, paleta off-white e champanhe, tipografia serifada nos títulos e componentes interativos.

## Requisitos
- Node.js 18 ou superior
- npm

## Executar localmente
```bash
npm install
npm run dev
```

## Gerar build de produção
```bash
npm run build
npm run preview
```

## Importante: arquivos de mídia
Os arquivos HTML/CSS enviados referenciam imagens, vídeos e certificado que não vieram anexados junto com os dois arquivos de código. Para manter as mídias originais, copie para `public/` as pastas/arquivos originais com os mesmos nomes:

- `public/imagens/` — foto de perfil, imagens de experiência, ícones sociais e favicon;
- `public/imagens-serviço/` — imagens e vídeos do portfólio;
- `public/CERTIFICADO - Sara de Almeida Oliveira.pdf` — certificado.

Os caminhos estão referenciados no código. Se algum nome de arquivo diferir, atualize o caminho correspondente em `src/App.jsx`.

## Interações incluídas
- Menu adaptável para celular e navegação por seções;
- cabeçalho com efeito ao rolar;
- animações de entrada com respeito à preferência de movimento reduzido;
- portfólio com navegação anterior/próximo, progresso e vídeos com controles;
- visualização ampliada de imagens (lightbox), navegação por teclado e fechamento com Escape;
- gráfico ilustrativo responsivo desenhado em canvas;
- links de contato para WhatsApp, Instagram e e-mail.

O gráfico é explicitamente ilustrativo e não apresenta dados reais de desempenho.
