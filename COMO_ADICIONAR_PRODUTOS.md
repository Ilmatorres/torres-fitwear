# Como Adicionar e Gerenciar Produtos - Torres Fitwear

## 🎯 Acessar Painel de Admin

### Método 1: Duplo Clique na Logo (Principal)
1. **Duplo clique** em **"TORRES"** no topo da página
2. Abre o painel de gerenciamento de produtos
3. Pode adicionar, ver e deletar produtos

### Método 2: Tech Shortcut (Alternativo)
- Qualquer arquivo `.html` pode ter um botão de admin se configurado
- Padrão: Duplo clique sempre funciona

---

## 📦 Funcionalidades do Painel

### ✅ Adicionar Novo Produto
1. Preencha os campos:
   - **Nome do Produto**: (ex: "Calça Legging Comfort")
   - **Preço**: (ex: 189.90)
   - **Descrição**: (ex: "Confortável e flexível para academia")
   - **Nome da Imagem**: (opcional, ex: "legging-comfort.jpg")

2. Clique em **"Adicionar Produto"**
3. ✅ Produto aparece na loja imediatamente!

### 🗑️ Deletar Produto
1. Vá para seção "Produtos Existentes"
2. Encontre o produto que quer deletar
3. Clique em **"Deletar"**
4. Confirme a ação
5. ✅ Produto removido da loja

### 🔄 Carregar Produtos Padrão
1. Clique em **"Carregar Produtos Padrão"**
2. Confirme
3. ✅ 4 produtos padrão aparecem na loja:
   - Legging Essência (R$ 189,90)
   - Top Força (R$ 129,90)
   - Short Movimento (R$ 149,90)
   - Jaqueta Visão (R$ 259,90)

### 🧹 Limpar Todos os Produtos
1. Clique em **"Limpar Todos"**
2. Confirme (cuidado, é irreversível!)
3. ✅ Todos os produtos são removidos

---

## 💾 Como Funciona

### Armazenamento
- **Todos os produtos são salvos automaticamente** em `localStorage`
- Os produtos permanecem mesmo depois de fechar o navegador
- Cada navegador/dispositivo tem seus próprios produtos

### Sincronização
- Ao adicionar/editar/deletar, a página atualiza imediatamente
- Não precisa recarregar
- Carrinho não é afetado

---

## 📋 Exemplos de Produtos

### Formato:
```
Nome: Legging Premium Flex
Preço: 199.90
Descrição: Cintura alta com suporte, tecido respirável, perfeita para treinos intensos
Imagem: legging-premium.jpg (opcional)
```

### Mais Exemplos:
```
Nome: Sutiã Esportivo Força
Preço: 99.90
Descrição: Máximo suporte, conforto total, tecnologia anti-transpiração

Nome: Bermuda Treino Power
Preço: 129.90
Descrição: Leve, confortável, com bolsos funcionais

Nome: Jaqueta Windproof
Preço: 279.90
Descrição: Corta vento, compacta, perfeita para outdoor
```

---

## ⚙️ Dicas & Truques

### ✨ Melhorar Produtos
- Use descrições **claras e descritivas**
- Mencione destaques: "compressão", "respirável", "anti-transpiração"
- Preços terminados em .90 são mais atrativos

### 🖼️ Adicionar Imagens
- Coloque arquivos `.jpg` ou `.png` na pasta `assets/`
- Referencie no painel apenas o nome: "legging.jpg"
- Se não adicionar imagem, usa o nome do produto como placeholder

### 📸 Substituir Placeholders
1. Adicione imagens em `assets/`
2. No HTML, mude de:
   ```html
   <div class="product-image placeholder-img">Nome</div>
   ```
   Para:
   ```html
   <img src="assets/legging.jpg" class="product-image" alt="Legging">
   ```

---

## 🚀 Próximas Ações

### 1. Adicionar Imagens Reais
```bash
/assets/
  ├── legging.jpg
  ├── top.jpg
  ├── short.jpg
  ├── jaqueta.jpg
  └── ... (mais imagens)
```

### 2. Personalizar Produtos
- Remova produtos padrão
- Adicione produtos reais da Torres Fitwear
- Ajuste preços corretos

### 3. Fazer Upload Online
- Vercel/Netlify
- Produtos salvos sem servidor (localStorage funciona em qualquer lugar)

---

## ❓ Dúvidas Frequentes

### P: Os dados salvos online?
**R:** Não! Salvos localmente no navegador. Para sincronizar entre dispositivos, precisaria de backend.

### P: Posso editar um produto adicionado?
**R:** Deletar e adicionar novamente (edição será adicionada em futuro).

### P: Quantos produtos posso adicionar?
**R:** Ilimitado! (até limite de localStorage ~5MB)

### P: Dados são perdidos se limpar cache?
**R:** Sim, dados deletados se limpar localStorage. Sempre faça backup!

---

## 💜 Tudo Pronto!

Agora você pode **adicionar seus produtos facilmente** sem editar HTML! 

**Duplo clique em "TORRES"** → Gerenciar produtos → Simples assim! 🎉

Feito com 💜 para Torres Fitwear
