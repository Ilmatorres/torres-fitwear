# Torres Fitwear - Website

Página web profissional, futurística e responsiva para a marca premium de roupas fitness **Torres Fitwear**. 
Desenvolvida com foco em empoderamento feminino, confiança e design minimalista moderno.

**Para Mulheres que Buscam Força, Estilo e Autoconfiança.**

## 💜 Design & Conceito

- **Cores Principais**: Roxo futurístico (#9f0ae5) + Rosa vibrante (#d946ef)
- **Estilo**: Minimalista, leve, moderno e futurístico
- **Foco**: Mulheres - confiança, força e empoderamento
- **Animações**: Suaves, fluidas e motivacionais

## 📋 Características

- ✨ **Design Futurístico**: Gradientes roxos, formas fluidas e animações modernas
- 💪 **Conteúdo Empoderador**: Mensagens focadas em força e confiança feminina
- 📱 **Responsivo**: Otimizado para desktop, tablet e mobile
- 🎯 **Minimalista**: Design limpo e direto, sem poluição visual
- 🎨 **Animações Elegantes**: Formas flutuantes, transições suaves, efeitos glow
- 💬 **Notificações Motivacionais**: Mensagens positivas ao adicionar produtos
- ⚡ **Performance**: Carregamento rápido e otimizado
- ♿ **Acessibilidade**: Semântica HTML adequada

## 📁 Estrutura de Diretórios

```
pagina-torres-fitwear/
├── index.html              # HTML principal
├── css/
│   └── styles.css          # Tema roxo futurístico
├── js/
│   └── main.js             # Interatividade e mensagens motivacionais
├── assets/                 # Imagens e recursos
└── README.md               # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir Localmente

Abra o arquivo `index.html` diretamente no navegador ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

Acesse: `http://localhost:8000`

### 2. Estrutura HTML

O site contém as seguintes seções:

- **Header**: Navegação sticky com menu responsivo
- **Hero**: Seção principal com formas flutuantes
- **Products**: Grid de 4 produtos com design motivacional
- **About**: "Mulheres em Movimento" com 4 benefícios
- **Contact**: Formulário elegante com mensagens motivacionais
- **Footer**: Links e informações da marca

## 🎨 Customização

### Alterar Cores Roxas

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
    --primary-purple: #9f0ae5;      /* Roxo principal */
    --primary-purple-light: #b832f0;
    --primary-purple-dark: #6d0a9e;
    --accent-purple: #d946ef;        /* Aceito/Pink */
    --light-bg: #faf9fc;
    --dark-bg: #0f0a1a;
}
```

### Adicionar Novos Produtos

No `index.html`, adicione um novo card na seção de produtos:

```html
<div class="product-card">
    <div class="product-image placeholder-img">Nome Produto</div>
    <h3 class="product-name">Nome Descrição</h3>
    <p class="product-description">Descrição motivacional...</p>
    <p class="product-price">R$ 199,90</p>
    <button class="btn btn-secondary" onclick="addToCart('Nome Produto')">Adicionar</button>
</div>
```

### Adicionar Imagens

1. Coloque as imagens em `assets/`
2. Substitua `.placeholder-img` por:

```html
<div class="product-image" style="background-image: url('assets/seu-produto.jpg')"></div>
```

### Modificar Mensagens Motivacionais

No `js/main.js`, edite o array `cartMessages`:

```javascript
const cartMessages = [
    'Sua mensagem aqui! 💜',
    'Outra mensagem! ✨',
    // ...
];
```

## 📱 Responsividade

O site se adapta para:
- **Desktop (1200px+)**: Layout full com 4 colunas, formas flutuantes
- **Tablet (768px)**: 1 coluna de produtos, menu hamburger
- **Mobile (480px)**: Layout otimizado, sem formas, elementos compactos

## 🌐 Deploy

### Netlify (Recomendado - Gratuito)

1. Crie conta em [netlify.com](https://netlify.com)
2. Arraste a pasta `pagina-torres-fitwear` para deploy
3. Pronto! Seu site estará online

### GitHub Pages

```bash
# Clone seu repo
cd seu-repo

# Copie os arquivos para a pasta
git add .
git commit -m "Torres Fitwear"
git push

# Ative Pages nas configurações do repo
```

### Vercel

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu GitHub
3. Selecione o repo e deploy em 1 clique

## 🔧 Tecnologias

- HTML5 semântico
- CSS3 com gradientes e animações modernas
- JavaScript vanilla (sem dependências)
- Responsive design
- Performance otimizado

## ⚡ Performance

- Sem frameworks/libraries externas
- Carregamento rápido
- Animações suaves com GPU acceleration
- Otimizado para mobile

## 🎯 Próximas Melhorias

- [ ] Integrar backend para carrinho persistente
- [ ] Filtros de produtos avançados
- [ ] Gateway de pagamento (Stripe/PayPal)
- [ ] Blog com conteúdo motivacional
- [ ] Integração com Instagram Feed
- [ ] Sistema de reviews de produtos
- [ ] PWA (Progressive Web App)
- [ ] Multilíngue (PT-BR, EN, ES)

## 📄 Licença

Código livre para uso pessoal e comercial.

---

**Torres Fitwear** © 2024

*Desenvolvido com 💜 para mulheres fortes que buscam força, estilo e autoconfiança.*

### Contato & Suporte
- Email: contato@torresfitwear.com
- Instagram: @torres.fitwear
- TikTok: @torres.fitwear
