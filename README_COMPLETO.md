# Torres Fitwear - Loja Online Premium

Página web profissional, futurística e responsiva para a marca premium de roupas fitness **Torres Fitwear**. 
Desenvolvida com foco em empoderamento feminino, confiança e design minimalista moderno.

**"Sua Força, Seu Estilo"** - Para mulheres que buscam força, autoconfiança e qualidade.

---

## 🎯 Características Principais

✨ **Design Futurístico & Minimalista**
- Paleta de cores roxo e rosa vibrante
- Gradientes elegantes e formas fluidas
- Animações modernas e fluidas

💪 **Funcionalidades E-commerce**
- Sistema de carrinho com persistência em localStorage
- Adicionar produtos ao carrinho
- Preços e descrições de produtos
- Carrinho salvo automaticamente no navegador

🛒 **Sistema de Carrinho Inteligente**
- Carrinho persiste mesmo após fechar o navegador
- Notificações motivacionais ao adicionar produtos
- Quantidade de itens no carrinho

📱 **Design Responsivo**
- Funciona perfeitamente em desktop, tablet e mobile
- Menu hamburger em dispositivos móveis
- Otimizado para todos os tamanhos de tela

🎨 **Validação de Formulário**
- Validação em tempo real de formulário de contato
- Mensagens de erro claras
- Email validation

💜 **Mensagens Motivacionais**
- Notificações personalizadas ao adicionar produtos
- Mensagens de empoderamento feminino

---

## 📋 Seções da Página

### 1. **Header & Navegação**
- Logo Torres Fitwear com tagline "Empoderamento em Movimento"
- Menu responsivo com hamburger em mobile
- Navegação suave entre seções

### 2. **Hero Section**
- Headline: "Sua Força, Seu Estilo"
- CTA para explorar coleção
- Elementos visuais flutuantes

### 3. **Produtos**
- Grade de produtos com descrições
- Preços bem destacados
- Botão "Adicionar ao Carrinho"
- Produtos: Legging Essência, Top Força, Short Movimento, Jaqueta Visão

### 4. **Sobre (Mulheres em Movimento)**
- Informações sobre a marca
- Benefícios dos produtos
- Valores: Tecnologia, Conforto, Autoconfiança, Sustentabilidade

### 5. **Contato**
- Formulário com validação
- Campo: Nome, Email, Mensagem
- Resposta automática ao envio

### 6. **Footer**
- Links de navegação
- Redes sociais
- Informações da empresa

---

## 🚀 Como Usar

### 1. **Abrir Localmente**
- Baixe ou clone todos os arquivos
- Abra `index.html` no navegador
- ✅ Pronto para usar!

### 2. **Estrutura de Arquivos**
```
pagina-torres-fitwear/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos CSS
├── js/
│   └── main.js             # JavaScript (interatividade + carrinho)
├── assets/                 # Imagens e arquivos
├── README.md               # Este arquivo
```

### 3. **Funcionalidades**

#### Adicionar ao Carrinho
```html
<button onclick="addToCart('Nome do Produto', preco)">Adicionar</button>
```

#### Ver Carrinho
O carrinho é visível via localStorage:
- Abra DevTools (F12)
- Vá para Application > LocalStorage
- Procure por "torres_cart"

#### Validação de Formulário
- Email deve ter formato válido
- Nome mínimo 3 caracteres
- Mensagem mínimo 10 caracteres

---

## 🎨 Customização

### Alterar Cores
No CSS (`styles.css`), altere as cores em `:root`:
```css
--primary-purple: #9f0ae5;      /* Roxo principal */
--accent-purple: #d946ef;       /* Rosa/Roxo claro */
```

### Adicionar Produtos
No HTML (`index.html`), dentro da seção `#products`:
```html
<div class="product-card">
    <div class="product-image placeholder-img">Nome</div>
    <h3>Nome do Produto</h3>
    <p>Descrição</p>
    <p class="product-price">R$ XX,XX</p>
    <button onclick="addToCart('Nome', preco)">Adicionar</button>
</div>
```

### Alterar Mensagens do Carrinho
No JavaScript (`js/main.js`):
```javascript
const cartMessages = [
    'Sua mensagem aqui! 💜',
    // ... mais mensagens
];
```

---

## 💻 Tecnologias Usadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos, flexbox, grid, animações
- **JavaScript Vanilla** - Interatividade sem dependências
- **LocalStorage** - Persistência de dados no navegador

---

## 📊 Dados de Produtos

| Produto | Preço | Descrição |
|---------|-------|-----------|
| Legging Essência | R$ 189,90 | Cintura alta, compressão leve |
| Top Força | R$ 129,90 | Suporte máximo, respirável |
| Short Movimento | R$ 149,90 | Bolsos funcionais, livre |
| Jaqueta Visão | R$ 259,90 | Corta vento, leva e prática |

---

## 🌐 Deploy

### Opção 1: Vercel (Recomendado)
1. Acesse [vercel.com](https://vercel.com)
2. Importe o repositório GitHub
3. Clique em Deploy
4. ✅ Seu site fica online em minutos

### Opção 2: Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Faça drag & drop dos arquivos
3. ✅ Seu site fica online instantaneamente

### Opção 3: GitHub Pages
1. Faça push para `gh-pages` branch
2. Ative Pages nas configurações
3. ✅ Seu site em `username.github.io/torres-fitwear`

---

## 📱 Responsividade

- **Desktop**: 1200px+ - Layout completo e otimizado
- **Tablet**: 768px-1199px - Layout adaptado
- **Mobile**: <768px - Menu hamburger, layout em coluna

---

## ♿ Acessibilidade

- ✅ Semântica HTML correta
- ✅ Contraste de cores adequado (WCAG AA)
- ✅ Labels em formulários
- ✅ Alt text em imagens
- ✅ Navegação por teclado

---

## 🔒 Segurança

- Sem dependências externas (não há risco de vulnerabilidades)
- Validação de formulário no cliente
- LocalStorage é seguro para dados não sensíveis

---

## 🎯 Próximas Melhorias

- [ ] Integração com backend para processamento de pedidos
- [ ] Sistema de autenticação de usuário
- [ ] Página de detalhes de produto
- [ ] Carrinho visual com quantidades ajustáveis
- [ ] Integração com gateway de pagamento (Stripe, PayPal)
- [ ] Dashboard de administrador
- [ ] Blog com dicas fitness

---

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do formulário na página.

---

## 📄 Licença

Torres Fitwear © 2024. Todos os direitos reservados.

---

**Desenvolvido para mulheres que buscam força, estilo e empoderamento.** 💜

Feito com dedicação para Torres Fitwear ✨
