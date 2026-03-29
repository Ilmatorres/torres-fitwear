# Guia Rápido - Torres Fitwear

## ✅ Página Pronta para Uso!

Seu site está 100% funcional e otimizado. Aqui está tudo o que precisa saber:

---

## 🚀 Como Abrir

### Opção 1: Abrir Direto (Mais Fácil)
1. Clique em `index.html`
2. Abre automaticamente no navegador
3. ✅ Pronto!

### Opção 2: Servidor Local (Melhor)
**Windows:**
```
python -m http.server 8000
```

**Mac/Linux:**
```
python3 -m http.server 8000
```

Depois acesse: `http://localhost:8000`

### Opção 3: Usar o Script
```bash
chmod +x start-server.sh
./start-server.sh
```

---

## 📦 O Que Está Incluído

✨ **Funcionalidades:**
- ✅ Carrinho de compras com localStorage
- ✅ Notificações motivacionais
- ✅ Formulário de contato com validação
- ✅ Menu responsivo (mobile)
- ✅ Métadados SEO
- ✅ Animações suaves

📁 **Arquivos:**
- `index.html` - Página principal
- `css/styles.css` - Estilos (roxo, moderno, responsivo)
- `js/main.js` - JavaScript (carrinho, validar, eventos)
- `README_COMPLETO.md` - Documentação detalhada

---

## 🎯 Testar Funcionalidades

### 1. Adicionar Produto ao Carrinho
- Clique em "Adicionar" em qualquer produto
- Veja a notificação motivacional
- Abra DevTools (F12) → Application → LocalStorage → torres_cart

### 2. Testar Responsividade
- Abra DevTools (F12)
- Clique no ícone de mobile (parte superior esquerda)
- Verie como muda em diferentes tamanhos

### 3. Validar Formulário
- Vá para "Contato"
- Tente enviar com dados inválidos
- Veja as mensagens de erro
- Preencha corretamente e envie

---

## 🌍 Deixar Online

### Vercel (Melhor e Mais Fácil)
1. Vá em https://vercel.com
2. Faça login (Create Account)
3. Clique em "Add New..." → "Project"
4. Faça upload da pasta completa ou conecte GitHub
5. Pronto! Seu site está online

**Resultado:** `seu-projeto.vercel.app`

### Netlify (Alternativa)
1. Vá em https://app.netlify.com
2. Clique em "Add new site"
3. Faça drag & drop da pasta
4. Pronto! Site online em 1 minuto

**Resultado:** `seu-projeto.netlify.app`

### GitHub Pages (Se usar Git)
1. Crie repositório em GitHub
2. Faça push dos arquivos para `gh-pages` branch
3. Ative Pages nas configurações
4. Site fica em `usuario.github.io/torres-fitwear`

---

## 🎨 Fazer Ajustes

### Mudar Cores
Abra `css/styles.css` e procure por `:root`:
```css
--primary-purple: #9f0ae5;  /* Mude aqui */
--accent-purple: #d946ef;   /* Ou aqui */
```

### Adicionar/Editar Produtos
Abra `index.html` e procure por `<section id="products">`:
```html
<button onclick="addToCart('Nome do Produto', 189.90)">
```

### Mudar Mensagens do Carrinho
Abra `js/main.js` e procure por `cartMessages`:
```javascript
const cartMessages = [
    'Nova mensagem aqui! 💜',
];
```

---

## 💡 Dicas Importantes

✅ **Boas Práticas:**
- O site funciona 100% sem servidor
- Os dados do carrinho ficam salvos no navegador (localStorage)
- Funciona offline depois de carregado uma vez
- Compatível com todos os navegadores modernos

⚠️ **Limitações:**
- Carrinho é por navegador (não sincroniza entre dispositivos)
- Sem banco de dados (adicione se quiser pedidos reais)
- Sem pagamento integrado (adicione se quiser vender)

---

## 📞 Próximos Passos

1. ✅ Testar todas as funcionalidades
2. ✅ Deixar online em Vercel/Netlify
3. ✅ Compartilhar link com amigos
4. 📝 Adicionar mais produtos quando necessário
5. 💳 Se quiser vender, integre com Stripe/PayPal

---

## 🆘 Dúvidas?

Verifique `README_COMPLETO.md` para documentação detalhada.

---

**Feito com 💜 para Torres Fitwear - Suas mulheres fortes merecem o melhor!**

Sucesso! 🚀✨
