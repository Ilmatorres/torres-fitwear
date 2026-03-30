// ========== Configuration ==========
const PIX_KEY = '27992669457';
const WHATSAPP_NUMBER = '5527992669457';
const MP_ACCESS_TOKEN = 'APP_USR-3466812974287831-032920-a983d7de2b577fb07b1867d00e68e820-3302020500';
const SITE_URL = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');

// ========== DOM Elements ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');
const adminModal = document.getElementById('adminModal');
const productsGrid = document.getElementById('productsGrid');
const logo = document.querySelector('.logo');
const cartModal = document.getElementById('cartModal');
const sizeGuideModal = document.getElementById('sizeGuideModal');

// ========== Default Products ==========
const defaultProducts = [
    // ===== PLUS SIZE =====
    { name: 'Macacão Plus Pink', price: 160.00, description: 'Macacão fitness plus size na cor pink, modelagem perfeita com detalhe nas costas', images: ['assets/products/macacao-plus-pink-1.jpeg','assets/products/macacao-plus-pink-2.jpeg','assets/products/macacao-plus-pink-3.jpeg'], category: 'plus', colors: [{name:'Rosa',hex:'#e91e8c'}] },
    { name: 'Conjunto Plus Vermelho', price: 159.00, description: 'Top + legging plus size vermelho marsala, cintura alta e costas trançadas', images: ['assets/products/conjunto-plus-vermelho-1.jpeg','assets/products/conjunto-plus-vermelho-2.jpeg'], category: 'plus', colors: [{name:'Vermelho',hex:'#dc2626'}] },
    { name: 'Conjunto Plus Verde', price: 149.00, description: 'Top + legging plus size verde esmeralda, tecido brilhoso e compressão leve', images: ['assets/products/conjunto-plus-verde-1.jpeg','assets/products/conjunto-plus-verde-2.jpeg'], category: 'plus', colors: [{name:'Verde',hex:'#16a34a'}] },
    { name: 'Blusa Dryft Plus', price: 65.00, description: 'Blusa dry fit plus size azul com legging roxa, tecido leve e respirável', images: ['assets/products/blusa-dryft-plus-1.jpeg','assets/products/blusa-dryft-plus-2.jpeg','assets/products/blusa-dryft-plus-3.jpeg'], category: 'plus', colors: [{name:'Azul',hex:'#2563eb'},{name:'Roxo',hex:'#7c3aed'}] },
    { name: 'Conjunto Plus Preto', price: 150.00, description: 'Top cropped + legging plus size preto, tecido brilhoso e elegante', images: ['assets/products/conjunto-plus-preto-1.jpeg','assets/products/conjunto-plus-preto-2.jpeg'], category: 'plus', colors: [{name:'Preto',hex:'#000000'}] },
    { name: 'Tule Plus', price: 59.00, description: 'Blusa tule plus size azul marinho com detalhe transparente na cintura', images: ['assets/products/tule-plus-1.jpeg','assets/products/tule-plus-2.jpeg'], category: 'plus', colors: [{name:'Azul Marinho',hex:'#1e3a5f'}] },
    { name: 'Conjunto Plus Branco', price: 150.00, description: 'Top branco + legging preta plus size, costas nadador e conforto total', images: ['assets/products/conjunto-plus-branco-1.jpeg','assets/products/conjunto-plus-branco-2.jpeg'], category: 'plus', colors: [{name:'Branco',hex:'#ffffff'},{name:'Preto',hex:'#000000'}] },
    { name: 'Conjunto Plus Short', price: 135.00, description: 'Regata + short bike plus size preto, perfeito para treino e dia a dia', images: ['assets/products/conjunto-plus-short-1.jpeg','assets/products/conjunto-plus-short-2.jpeg'], category: 'plus', colors: [{name:'Preto',hex:'#000000'}] },

    // ===== TAMANHO ÚNICO (36/42) =====
    { name: 'Conjunto Bege Short', price: 100.00, description: 'Top + short bege, visual clean e elegante para treino', images: ['assets/products/conjunto-bege-short-1.jpeg','assets/products/conjunto-bege-short-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Branco',hex:'#ffffff'}] },
    { name: 'Conjunto Cinza', price: 115.00, description: 'Top cropped + legging cinza, tecido macio e confortável', images: ['assets/products/conjunto-cinza-1.jpeg','assets/products/conjunto-cinza-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Cinza',hex:'#6b7280'}] },
    { name: 'Conjunto Azul Claro', price: 149.00, description: 'Top + legging azul claro, tecido brilhoso com compressão leve', images: ['assets/products/conjunto-azul-claro-1.jpeg','assets/products/conjunto-azul-claro-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Azul',hex:'#2563eb'}] },
    { name: 'Conjunto Azul Royal', price: 125.00, description: 'Top triângulo + short azul royal, estilo praiano fitness', images: ['assets/products/conjunto-azul-royal-1.jpeg','assets/products/conjunto-azul-royal-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Azul',hex:'#2563eb'}] },
    { name: 'Conjunto Dourado', price: 139.00, description: 'Top + short bike dourado, cor vibrante e tecido premium', images: ['assets/products/conjunto-dourado-1.jpeg'], category: 'tamanho-unico', colors: [{name:'Rosa',hex:'#e91e8c'}] },
    { name: 'Conjunto Creme', price: 149.00, description: 'Top + legging creme, visual sofisticado e confortável', images: ['assets/products/conjunto-creme-1.jpeg','assets/products/conjunto-creme-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Branco',hex:'#ffffff'}] },
    { name: 'Conjunto Oliva Short', price: 100.00, description: 'Top cropped + short bike verde oliva, tecido canelado', images: ['assets/products/conjunto-oliva-1.jpeg','assets/products/conjunto-oliva-2.jpeg','assets/products/conjunto-oliva-3.jpeg'], category: 'tamanho-unico', colors: [{name:'Verde',hex:'#16a34a'}] },
    { name: 'Macaquinho Rosa', price: 115.00, description: 'Macaquinho rosa claro com detalhe nas costas trançado', images: ['assets/products/macaquinho-rosa-1.jpeg','assets/products/macaquinho-rosa-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Rosa',hex:'#e91e8c'}] },
    { name: 'Conjunto Chumbo', price: 125.00, description: 'Regata + legging chumbo com detalhe branco, estilo esportivo', images: ['assets/products/conjunto-chumbo-1.jpeg','assets/products/conjunto-chumbo-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Cinza',hex:'#6b7280'}] },
    { name: 'Macacão Verde Água', price: 150.00, description: 'Macacão menta/verde água com costas abertas cruzadas, peça única elegante', images: ['assets/products/macacao-verde-agua-1.jpeg','assets/products/macacao-verde-agua-2.jpeg','assets/products/macacao-verde-agua-3.jpeg'], category: 'tamanho-unico', colors: [{name:'Verde Água',hex:'#2dd4bf'}] },
    { name: 'Macaquinho Marinho', price: 115.00, description: 'Macaquinho azul marinho texturizado com costas abertas', images: ['assets/products/macaquinho-marinho-1.jpeg','assets/products/macaquinho-marinho-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Azul Marinho',hex:'#1e3a5f'}] },
    { name: 'Macaquinho Marsala', price: 115.00, description: 'Macaquinho cor marsala texturizado com detalhe nas costas', images: ['assets/products/macaquinho-marsala-1.jpeg','assets/products/macaquinho-marsala-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Vermelho',hex:'#dc2626'}] },
    { name: 'Conjunto Marinho', price: 139.00, description: 'Top + legging azul marinho com costas abertas, clássico e elegante', images: ['assets/products/conjunto-marinho-1.jpeg','assets/products/conjunto-marinho-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Azul Marinho',hex:'#1e3a5f'}] },
    { name: 'Macacão Preto', price: 150.00, description: 'Macacão preto com costas cruzadas, visual poderoso e versátil', images: ['assets/products/macacao-preto-1.jpeg','assets/products/macacao-preto-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Preto',hex:'#000000'}] },
    { name: 'Conjunto Bege Cropped', price: 125.00, description: 'Top cropped + short bege com costas trançadas', images: ['assets/products/conjunto-bege-crop-1.jpeg','assets/products/conjunto-bege-crop-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Branco',hex:'#ffffff'}] },
    { name: 'Macacão Sage', price: 150.00, description: 'Macacão verde sage texturizado com costas abertas', images: ['assets/products/macacao-sage-1.jpeg','assets/products/macacao-sage-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Verde',hex:'#16a34a'}] },
    { name: 'Macaquinho Menta', price: 115.00, description: 'Macaquinho menta/verde claro com costas cruzadas', images: ['assets/products/macaquinho-menta-1.jpeg','assets/products/macaquinho-menta-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Verde Água',hex:'#2dd4bf'}] },
    { name: 'Conjunto Bicolor', price: 139.00, description: 'Top verde + short roxo bicolor, estilo moderno e ousado', images: ['assets/products/conjunto-bicolor-1.jpeg','assets/products/conjunto-bicolor-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Verde',hex:'#16a34a'},{name:'Roxo',hex:'#7c3aed'}] },
    { name: 'Macacão Manga Longa Menta', price: 150.00, description: 'Macacão manga longa verde menta, proteção e estilo para treino', images: ['assets/products/macacao-manga-longa-1.jpeg','assets/products/macacao-manga-longa-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Verde Água',hex:'#2dd4bf'}] },
    { name: 'Conjunto Preto Detalhe Branco', price: 125.00, description: 'Top + short preto com detalhe branco, esportivo e estiloso', images: ['assets/products/conjunto-preto-branco-1.jpeg','assets/products/conjunto-preto-branco-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Preto',hex:'#000000'},{name:'Branco',hex:'#ffffff'}] },
    { name: 'Conjunto Marinho Detalhe Branco', price: 125.00, description: 'Top + short azul marinho com detalhe branco', images: ['assets/products/conjunto-marinho-branco-1.jpeg','assets/products/conjunto-marinho-branco-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Azul Marinho',hex:'#1e3a5f'},{name:'Branco',hex:'#ffffff'}] },

    // ===== BLUSAS =====
    { name: 'Blusa Tule', price: 44.99, description: 'Blusa com detalhe em tule, leve e estilosa', images: [], category: 'blusas' },
    { name: 'Blusa Tule Manga Longa', price: 59.90, description: 'Blusa tule manga longa, transparência elegante', images: [], category: 'blusas' },
    { name: 'Cropt Tule Pink', price: 39.90, description: 'Cropped tule na cor pink, perfeito para o treino', images: [], category: 'blusas' },
    { name: 'Blusa UV', price: 49.00, description: 'Blusa com proteção UV, ideal para treinos ao ar livre', images: [], category: 'blusas' },
    { name: 'Blusa Dryft', price: 59.90, description: 'Blusa dry fit, tecido tecnológico que seca rápido', images: [], category: 'blusas' }
];

// ========== Products Management ==========
class ProductsManager {
    constructor() {
        this.products = this.loadProducts();
        // Reload defaults if products don't have images yet
        if (this.products.length === 0 || (this.products.length > 0 && !this.products[0].images?.some(i => i.startsWith('assets/')))) {
            this.loadDefaultProducts();
        }
    }

    loadProducts() {
        const saved = localStorage.getItem('torres_products');
        if (!saved) return [];
        const products = JSON.parse(saved);
        // Migrate old format: convert single `image` to `images` array
        return products.map(p => {
            if (!p.images) {
                p.images = p.image && p.image !== '' ? [p.image] : [];
                delete p.image;
            }
            return p;
        });
    }

    saveProducts() {
        localStorage.setItem('torres_products', JSON.stringify(this.products));
    }

    addProduct(name, price, description, images = [], category = 'plus', colors = []) {
        if (!name || !price || !description) return false;
        this.products.push({
            id: Date.now(),
            name,
            price: parseFloat(price),
            description,
            images: Array.isArray(images) ? images : [images].filter(Boolean),
            category,
            colors
        });
        this.saveProducts();
        return true;
    }

    removeProduct(id) {
        this.products = this.products.filter(p => p.id !== id);
        this.saveProducts();
    }

    updateProduct(id, name, price, description, images, category, colors) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            product.name = name;
            product.price = parseFloat(price);
            product.description = description;
            product.images = Array.isArray(images) ? images : [images].filter(Boolean);
            product.category = category;
            product.colors = colors;
            this.saveProducts();
            return true;
        }
        return false;
    }

    loadDefaultProducts() {
        this.products = defaultProducts.map((p, i) => ({
            id: i + 1,
            ...p
        }));
        this.saveProducts();
    }

    clear() {
        this.products = [];
        this.saveProducts();
    }
}

let productsManager = new ProductsManager();

// ========== Cart System ==========
class ShoppingCart {
    constructor() {
        this.items = this.loadFromStorage();
    }

    loadFromStorage() {
        const saved = localStorage.getItem('torres_cart');
        return saved ? JSON.parse(saved) : [];
    }

    saveToStorage() {
        localStorage.setItem('torres_cart', JSON.stringify(this.items));
    }

    addItem(productName, price = 0) {
        const existingItem = this.items.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ name: productName, price, quantity: 1 });
        }
        this.saveToStorage();
        this.updateCartBadge();
    }

    removeItem(productName) {
        this.items = this.items.filter(item => item.name !== productName);
        this.saveToStorage();
        this.updateCartBadge();
        renderCartItems();
    }

    updateQuantity(productName, delta) {
        const item = this.items.find(item => item.name === productName);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                this.removeItem(productName);
                return;
            }
            this.saveToStorage();
            this.updateCartBadge();
            renderCartItems();
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    updateCartBadge() {
        const badge = document.getElementById('cartBadge');
        if (badge) {
            const count = this.getItemCount();
            badge.textContent = count;
            if (count > 0) badge.classList.add('visible');
            else badge.classList.remove('visible');
        }
    }

    clear() {
        this.items = [];
        this.saveToStorage();
        this.updateCartBadge();
        renderCartItems();
    }
}

let cart = new ShoppingCart();

// ========== Cart UI ==========
function openCart() {
    if (cartModal) {
        cartModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        renderCartItems();
    }
}

function closeCart() {
    if (cartModal) {
        cartModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    if (!container) return;

    if (cart.items.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5">
                    <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p>Seu carrinho está vazio</p>
                <span>Adicione produtos para começar!</span>
            </div>`;
    } else {
        container.innerHTML = cart.items.map(item => `
            <div class="cart-item">
                <div class="cart-item-color">${item.name.charAt(0)}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="cart-item-qty-btn" onclick="cart.updateQuantity('${item.name.replace(/'/g, "\\'")}', -1)">-</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="cart-item-qty-btn" onclick="cart.updateQuantity('${item.name.replace(/'/g, "\\'")}', 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="cart.removeItem('${item.name.replace(/'/g, "\\'")}')" title="Remover">&times;</button>
            </div>`).join('');
    }
    if (totalEl) totalEl.textContent = `R$ ${cart.getTotal().toFixed(2).replace('.', ',')}`;
}

function clearCart() {
    if (cart.items.length === 0) return;
    if (confirm('Limpar o carrinho?')) {
        cart.clear();
        showNotification('Carrinho limpo!');
    }
}

function checkoutWhatsApp() {
    if (cart.items.length === 0) {
        showNotification('Adicione produtos primeiro!', 'error');
        return;
    }
    let msg = 'Olá! Gostaria de fazer um pedido:\n\n';
    cart.items.forEach(item => {
        msg += `• ${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });
    msg += `\n*Total: R$ ${cart.getTotal().toFixed(2).replace('.', ',')}*\n\nPoderia me ajudar com esse pedido?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ========== Mobile Menu ==========
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ========== Cart Messages ==========
const cartMessages = [
    'Que escolha poderosa! 💜',
    'Você está ficando mais linda ainda! ✨',
    'Confiança adicionada à sua compra! 🔥',
    'Mais um passo para sua melhor versão! 💪',
    'Sua força, seu estilo! 👑'
];

function addToCart(productName, price = 0) {
    cart.addItem(productName, price);
    const msg = cartMessages[Math.floor(Math.random() * cartMessages.length)];
    showNotification(`${productName} adicionado!\n${msg}`);
}

// ========== Notifications ==========
function showNotification(message, type = 'success') {
    const el = document.createElement('div');
    el.textContent = message;
    const bg = type === 'success'
        ? 'linear-gradient(135deg, #2d1b4e, #c47a3a)'
        : 'linear-gradient(135deg, #dc2626, #991b1b)';
    el.style.cssText = `
        position:fixed;top:100px;right:20px;background:${bg};color:white;
        padding:18px 28px;border-radius:10px;box-shadow:0 8px 24px rgba(45,27,78,0.3);
        z-index:3000;animation:slideIn 0.4s cubic-bezier(0.34,1.56,0.64,1);
        font-weight:500;line-height:1.5;max-width:300px;white-space:pre-line;`;
    document.body.appendChild(el);
    setTimeout(() => {
        el.style.animation = 'slideOut 0.4s ease-out';
        setTimeout(() => el.remove(), 400);
    }, 4000);
}

// ========== Form Validation ==========
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = contactForm.querySelectorAll('input, textarea');
        const data = { name: inputs[0].value, email: inputs[1].value, message: inputs[2].value };
        const errors = [];
        if (!data.name || data.name.trim().length < 3) errors.push('Nome deve ter pelo menos 3 caracteres');
        if (!validateEmail(data.email)) errors.push('Email inválido');
        if (!data.message || data.message.trim().length < 10) errors.push('Mensagem deve ter pelo menos 10 caracteres');
        if (errors.length) { showNotification(errors.join('\n'), 'error'); return; }
        showNotification(`Olá ${data.name}! Sua mensagem foi recebida.\nEntraremos em contato em breve! 💜`);
        contactForm.reset();
    });
}

// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========== Testimonials ==========
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDotsContainer = document.getElementById('testimonialDots');

function initTestimonials() {
    if (!testimonialDotsContainer || testimonialCards.length === 0) return;
    testimonialCards.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('testimonial-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonial(i));
        testimonialDotsContainer.appendChild(dot);
    });
    setInterval(() => changeTestimonial(1), 6000);
}

function changeTestimonial(dir) {
    testimonialCards[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + dir + testimonialCards.length) % testimonialCards.length;
    testimonialCards[currentTestimonial].classList.add('active');
    updateDots();
}

function goToTestimonial(i) {
    testimonialCards[currentTestimonial].classList.remove('active');
    currentTestimonial = i;
    testimonialCards[currentTestimonial].classList.add('active');
    updateDots();
}

function updateDots() {
    document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentTestimonial);
    });
}

// ========== Size Guide ==========
function openSizeGuide() {
    if (sizeGuideModal) { sizeGuideModal.classList.add('active'); document.body.style.overflow = 'hidden'; }
}
function closeSizeGuide() {
    if (sizeGuideModal) { sizeGuideModal.classList.remove('active'); document.body.style.overflow = ''; }
}
function switchSizeTab(tab) {
    const tops = document.getElementById('sizeTableTops');
    const bottoms = document.getElementById('sizeTableBottoms');
    const tabs = document.querySelectorAll('.size-tab');
    tabs.forEach(t => t.classList.remove('active'));
    if (tab === 'tops') { tops.style.display = 'block'; bottoms.style.display = 'none'; tabs[0].classList.add('active'); }
    else { tops.style.display = 'none'; bottoms.style.display = 'block'; tabs[1].classList.add('active'); }
}

// Close modals
if (cartModal) cartModal.addEventListener('click', (e) => { if (e.target === cartModal) closeCart(); });
if (sizeGuideModal) sizeGuideModal.addEventListener('click', (e) => { if (e.target === sizeGuideModal) closeSizeGuide(); });
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeLightbox(); closeCart(); closeSizeGuide(); closeAdminPanel(); closeCheckout(); }
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
});

// ========== Image Lightbox ==========
let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(productId, startIndex = 0) {
    const product = productsManager.products.find(p => p.id === productId);
    if (!product) return;
    const imgs = (product.images || []).filter(i => i.startsWith('data:') || i.startsWith('http') || i.startsWith('assets/'));
    if (imgs.length === 0) return;

    lightboxImages = imgs;
    lightboxIndex = startIndex;

    const lightbox = document.getElementById('imageLightbox');
    const img = document.getElementById('lightboxImg');
    const counter = document.getElementById('lightboxCounter');

    img.src = lightboxImages[lightboxIndex];
    counter.textContent = lightboxImages.length > 1 ? `${lightboxIndex + 1} / ${lightboxImages.length}` : '';

    // Hide nav buttons if only 1 image
    document.querySelector('.lightbox-prev').style.display = lightboxImages.length > 1 ? '' : 'none';
    document.querySelector('.lightbox-next').style.display = lightboxImages.length > 1 ? '' : 'none';

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
    if (event && event.target !== event.currentTarget && event.target.tagName !== 'BUTTON') return;
    const lightbox = document.getElementById('imageLightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function lightboxNav(dir) {
    if (lightboxImages.length <= 1) return;
    const lightbox = document.getElementById('imageLightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;

    lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
    document.getElementById('lightboxImg').src = lightboxImages[lightboxIndex];
    document.getElementById('lightboxCounter').textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

// ========== Category Filter ==========
const PRODUCTS_PER_PAGE = 8;
let productsShown = PRODUCTS_PER_PAGE;
let currentCategory = 'all';

function filterCategory(category) {
    currentCategory = category;
    productsShown = PRODUCTS_PER_PAGE;
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === getCategoryLabel(category));
    });
    renderProducts();
}

function getCategoryLabel(category) {
    const labels = { 'all': 'Todos', 'plus': 'Plus Size', 'tamanho-unico': 'Tamanho 36 ao 42', 'blusas': 'Blusas' };
    return labels[category] || 'Todos';
}

// ========== Initialize ==========
window.addEventListener('load', () => {
    cart.updateCartBadge();
    renderProducts();
    initializeAdmin();
    initTestimonials();
});

// ========== Product Image Carousel ==========
function slideProduct(productId, direction) {
    const container = document.querySelector(`[data-product-id="${productId}"]`);
    if (!container) return;
    const slides = container.querySelectorAll('.product-slide');
    const dots = container.querySelectorAll('.product-dot');
    const total = slides.length;
    let current = parseInt(container.dataset.currentSlide || 0);

    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');

    current = (current + direction + total) % total;

    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
    container.dataset.currentSlide = current;
}

function goToProductSlide(productId, index) {
    const container = document.querySelector(`[data-product-id="${productId}"]`);
    if (!container) return;
    const slides = container.querySelectorAll('.product-slide');
    const dots = container.querySelectorAll('.product-dot');
    const current = parseInt(container.dataset.currentSlide || 0);

    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');

    slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
    container.dataset.currentSlide = index;
}

// ========== Render Products ==========

function renderProducts() {
    if (!productsGrid) return;

    const filtered = currentCategory === 'all'
        ? productsManager.products
        : productsManager.products.filter(p => p.category === currentCategory);

    if (filtered.length === 0) {
        productsGrid.innerHTML = '<p style="text-align:center;color:#999;grid-column:1/-1;padding:40px;">Nenhum produto nessa categoria.</p>';
        removeLoadMoreBtn();
        return;
    }

    const visible = filtered.slice(0, productsShown);

    productsGrid.innerHTML = visible.map(product => {
        const imgs = product.images || [];
        const hasImages = imgs.length > 0 && imgs.some(i => i.startsWith('data:') || i.startsWith('http') || i.startsWith('assets/'));
        const safeName = product.name.replace(/'/g, "\\'");

        let imageHtml;
        if (hasImages) {
            const realImages = imgs.filter(i => i.startsWith('data:') || i.startsWith('http') || i.startsWith('assets/'));
            if (realImages.length === 1) {
                imageHtml = `<div class="product-image" style="padding:0;cursor:pointer;" onclick="openLightbox(${product.id})"><img src="${realImages[0]}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;"></div>`;
            } else {
                const slidesHtml = realImages.map((img, i) =>
                    `<img class="product-slide ${i === 0 ? 'active' : ''}" src="${img}" alt="${product.name} foto ${i + 1}" onclick="openLightbox(${product.id}, ${i})">`
                ).join('');
                const dotsHtml = realImages.map((_, i) =>
                    `<span class="product-dot ${i === 0 ? 'active' : ''}" onclick="event.stopPropagation(); goToProductSlide(${product.id}, ${i})"></span>`
                ).join('');
                imageHtml = `
                <div class="product-carousel" data-product-id="${product.id}" data-current-slide="0">
                    ${slidesHtml}
                    <button class="carousel-btn carousel-prev" onclick="event.stopPropagation(); slideProduct(${product.id}, -1)">&#8249;</button>
                    <button class="carousel-btn carousel-next" onclick="event.stopPropagation(); slideProduct(${product.id}, 1)">&#8250;</button>
                    <div class="product-dots">${dotsHtml}</div>
                    <span class="photo-count">${realImages.length} fotos</span>
                </div>`;
            }
        } else {
            imageHtml = `<div class="product-image">${product.name}</div>`;
        }

        const colorsHtml = (product.colors && product.colors.length > 0)
            ? `<div class="product-colors">${product.colors.map(c =>
                `<span class="product-color-dot" style="background:${c.hex}${c.hex === '#ffffff' ? ';border-color:#ccc' : ''}" title="${c.name}"></span>`
              ).join('')}</div>`
            : '';

        return `
        <div class="product-card">
            ${imageHtml}
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            ${colorsHtml}
            <p class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
            <button class="btn btn-secondary" onclick="addToCart('${safeName}', ${product.price})">Adicionar ao Carrinho</button>
        </div>`;
    }).join('');

    // Show/hide "Ver mais" button
    if (filtered.length > productsShown) {
        showLoadMoreBtn(filtered.length - productsShown);
    } else {
        removeLoadMoreBtn();
    }

    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

function showLoadMoreBtn(remaining) {
    let btn = document.getElementById('loadMoreBtn');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'loadMoreBtn';
        btn.className = 'btn btn-primary load-more-btn';
        btn.onclick = loadMoreProducts;
        productsGrid.parentElement.appendChild(btn);
    }
    btn.textContent = `Ver mais produtos (${remaining} restantes)`;
}

function removeLoadMoreBtn() {
    const btn = document.getElementById('loadMoreBtn');
    if (btn) btn.remove();
}

function loadMoreProducts() {
    productsShown += PRODUCTS_PER_PAGE;
    renderProducts();
}


// ========== Product Templates ==========
const productTemplates = {
    legging: { name: 'Legging ', price: 189.90, description: 'Cintura alta, compressão leve e flexibilidade total' },
    top: { name: 'Top ', price: 129.90, description: 'Suporte máximo, tecido respirável e design elegante' },
    short: { name: 'Short ', price: 149.90, description: 'Bolsos funcionais, ajuste perfeito e liberdade total' },
    jaqueta: { name: 'Jaqueta ', price: 259.90, description: 'Corta vento, leve e perfeita para treinar em qualquer lugar' },
    conjunto: { name: 'Conjunto ', price: 299.90, description: 'Top + Legging combinando, conforto e estilo completo' },
    calcinha: { name: 'Calcinha ', price: 59.90, description: 'Sem costura, tecido antibacteriano e conforto total' },
    macacao: { name: 'Macacão ', price: 229.90, description: 'Peça única, modelagem impecável e visual poderoso' }
};

// ========== Multi-Image Upload State ==========
let pendingImages = [];

function renderImagesPreview() {
    const list = document.getElementById('imagesPreviewList');
    if (!list) return;

    if (pendingImages.length === 0) {
        list.innerHTML = '';
        return;
    }

    list.innerHTML = pendingImages.map((src, i) => `
        <div class="img-preview-item">
            <img src="${src}" alt="Foto ${i + 1}">
            <button type="button" class="img-preview-remove" onclick="removeImage(${i})">&times;</button>
            <span class="img-preview-num">${i + 1}</span>
        </div>
    `).join('');
}

function addImageData(src) {
    if (src && !pendingImages.includes(src)) {
        pendingImages.push(src);
        renderImagesPreview();
    }
}

function removeImage(index) {
    pendingImages.splice(index, 1);
    renderImagesPreview();
}

function handleImageFiles(files) {
    Array.from(files).forEach(file => {
        if (!file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = (e) => addImageData(e.target.result);
        reader.readAsDataURL(file);
    });
}

function addImageFromUrl() {
    const input = document.getElementById('productImageUrl');
    const url = input.value.trim();
    if (url) {
        addImageData(url);
        input.value = '';
        showNotification('Foto adicionada!');
    }
}

function resetImageUpload() {
    pendingImages = [];
    renderImagesPreview();
    const fileInput = document.getElementById('imageFileInput');
    if (fileInput) fileInput.value = '';
}

function getSelectedColors() {
    const checks = document.querySelectorAll('#colorOptions input:checked');
    return Array.from(checks).map(c => ({ name: c.value, hex: c.dataset.color }));
}

function setSelectedColors(colors) {
    document.querySelectorAll('#colorOptions input').forEach(c => c.checked = false);
    if (!colors || !colors.length) return;
    colors.forEach(color => {
        const input = document.querySelector(`#colorOptions input[value="${color.name}"]`);
        if (input) input.checked = true;
    });
}

function fillTemplate(type) {
    const t = productTemplates[type];
    if (!t) return;
    document.getElementById('productName').value = t.name;
    document.getElementById('productPrice').value = t.price;
    document.getElementById('productDescription').value = t.description;
    const nameInput = document.getElementById('productName');
    nameInput.focus();
    nameInput.setSelectionRange(nameInput.value.length, nameInput.value.length);
    showNotification(`Template "${type}" carregado!`);
}

// ========== Admin Panel ==========
function initializeAdmin() {
    const form = document.getElementById('addProductForm');
    const uploadArea = document.getElementById('imageUploadArea');
    const fileInput = document.getElementById('imageFileInput');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const editId = document.getElementById('editProductId').value;
            const name = document.getElementById('productName').value.trim();
            const price = document.getElementById('productPrice').value;
            const description = document.getElementById('productDescription').value.trim();
            const category = document.getElementById('productCategory').value;
            const colors = getSelectedColors();

            if (editId) {
                if (productsManager.updateProduct(parseInt(editId), name, price, description, pendingImages, category, colors)) {
                    showNotification(`${name} atualizado!`);
                    cancelEdit();
                }
            } else {
                if (productsManager.addProduct(name, price, description, pendingImages, category, colors)) {
                    showNotification(`${name} adicionado!`);
                    form.reset();
                    resetImageUpload();
                } else {
                    showNotification('Preencha todos os campos!', 'error');
                }
            }
            renderProducts();
            updateAdminProductsList();
        });
    }

    if (uploadArea) {
        uploadArea.addEventListener('click', () => fileInput.click());
        uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.classList.add('dragover'); });
        uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            handleImageFiles(e.dataTransfer.files);
        });
    }

    if (fileInput) {
        fileInput.addEventListener('change', (e) => handleImageFiles(e.target.files));
    }
}

function openAdminPanel() {
    if (adminModal) {
        adminModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateAdminProductsList();
    }
}

function closeAdminPanel() {
    if (adminModal) {
        adminModal.classList.remove('active');
        document.body.style.overflow = '';
        cancelEdit();
    }
}

function editProduct(productId) {
    const product = productsManager.products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('editProductId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productCategory').value = product.category || 'plus';
    setSelectedColors(product.colors || []);

    pendingImages = [...(product.images || [])];
    renderImagesPreview();

    document.getElementById('adminFormTitle').textContent = 'Editando: ' + product.name;
    document.getElementById('adminSaveBtn').innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Salvar Alterações';
    document.getElementById('adminCancelEdit').style.display = 'block';
    document.querySelector('.admin-panel-left').scrollTop = 0;
}

function cancelEdit() {
    const editId = document.getElementById('editProductId');
    const formTitle = document.getElementById('adminFormTitle');
    const saveBtn = document.getElementById('adminSaveBtn');
    const cancelBtn = document.getElementById('adminCancelEdit');
    if (editId) editId.value = '';
    if (formTitle) formTitle.textContent = 'Adicionar Produto';
    if (saveBtn) saveBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Adicionar Produto';
    if (cancelBtn) cancelBtn.style.display = 'none';
    const form = document.getElementById('addProductForm');
    if (form) form.reset();
    resetImageUpload();
    setSelectedColors([]);
}

function duplicateProduct(productId) {
    const p = productsManager.products.find(p => p.id === productId);
    if (!p) return;
    productsManager.addProduct(p.name + ' (cópia)', p.price, p.description, [...(p.images || [])]);
    renderProducts();
    updateAdminProductsList();
    showNotification(`"${p.name}" duplicado!`);
}

function updateAdminProductsList() {
    const list = document.getElementById('adminProductsList');
    const count = document.getElementById('productCount');
    if (!list) return;
    if (count) count.textContent = productsManager.products.length;

    if (productsManager.products.length === 0) {
        list.innerHTML = '<p style="text-align:center;color:#999;padding:40px 20px;">Nenhum produto. Use os templates para adicionar!</p>';
        return;
    }

    list.innerHTML = productsManager.products.map(product => {
        const imgs = product.images || [];
        const firstReal = imgs.find(i => i.startsWith('data:') || i.startsWith('http') || i.startsWith('assets/'));
        const thumbContent = firstReal
            ? `<img src="${firstReal}" alt="${product.name}">`
            : product.name.charAt(0);
        const photoCount = imgs.filter(i => i.startsWith('data:') || i.startsWith('http') || i.startsWith('assets/')).length;
        const photoLabel = photoCount > 0 ? `<span class="admin-photo-count">${photoCount} foto${photoCount > 1 ? 's' : ''}</span>` : '';

        return `
        <div class="admin-prod-card">
            <div class="admin-prod-thumb">${thumbContent}</div>
            <div class="admin-prod-info">
                <div class="admin-prod-name">${product.name} ${photoLabel}</div>
                <div class="admin-prod-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <div class="admin-prod-desc">${product.description}</div>
            </div>
            <div class="admin-prod-actions">
                <button class="admin-prod-btn edit" onclick="editProduct(${product.id})">Editar</button>
                <button class="admin-prod-btn duplicate" onclick="duplicateProduct(${product.id})">Duplicar</button>
                <button class="admin-prod-btn delete" onclick="deleteProduct(${product.id})">Deletar</button>
            </div>
        </div>`;
    }).join('');
}

function deleteProduct(productId) {
    productsManager.removeProduct(productId);
    renderProducts();
    updateAdminProductsList();
    showNotification('Produto removido!');
}

function loadDefaultProducts() {
    if (confirm('Carregar produtos padrão?')) {
        productsManager.loadDefaultProducts();
        renderProducts();
        updateAdminProductsList();
        showNotification('Produtos padrão carregados!');
    }
}

function clearAllProducts() {
    if (confirm('Limpar TODOS os produtos?')) {
        productsManager.clear();
        renderProducts();
        updateAdminProductsList();
        showNotification('Todos removidos', 'error');
    }
}

if (adminModal) adminModal.addEventListener('click', (e) => { if (e.target === adminModal) closeAdminPanel(); });

// ========== Checkout System ==========
function openCheckout() {
    if (cart.items.length === 0) {
        showNotification('Adicione produtos primeiro!', 'error');
        return;
    }
    closeCart();

    // Reset frete
    freteAtual = 0;
    const freteInfo = document.getElementById('freteInfo');
    const freteRow = document.getElementById('checkoutFreteRow');
    const totalFinalRow = document.getElementById('checkoutTotalFinalRow');
    if (freteInfo) freteInfo.style.display = 'none';
    if (freteRow) freteRow.style.display = 'none';
    if (totalFinalRow) totalFinalRow.style.display = 'none';

    const modal = document.getElementById('checkoutModal');

    // Populate order summary
    const itemsEl = document.getElementById('checkoutItems');
    const totalEl = document.getElementById('checkoutTotal');
    if (itemsEl) {
        itemsEl.innerHTML = cart.items.map(item => `
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eee;">
                <span>${item.name} x${item.quantity}</span>
                <strong>R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</strong>
            </div>
        `).join('');
    }
    if (totalEl) totalEl.textContent = `R$ ${cart.getTotal().toFixed(2).replace('.', ',')}`;

    // Show PIX info
    const pixKeyDisplay = document.getElementById('pixKeyDisplay');
    if (pixKeyDisplay) pixKeyDisplay.value = PIX_KEY;
    generatePixQrCode();

    // Show modal
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function generatePixQrCode() {
    const qrImg = document.getElementById('pixQrCode');
    if (!qrImg) return;

    const total = (cart.getTotal() + freteAtual).toFixed(2);
    const pixPayload = `PIX:${PIX_KEY}:${total}`;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixPayload)}`;
    qrImg.alt = 'QR Code PIX - R$ ' + total.replace('.', ',');
}

function copyPixKey() {
    const pixKeyDisplay = document.getElementById('pixKeyDisplay');
    if (!pixKeyDisplay) return;

    navigator.clipboard.writeText(pixKeyDisplay.value).then(() => {
        showNotification('Chave PIX copiada!');
    }).catch(() => {
        pixKeyDisplay.select();
        document.execCommand('copy');
        showNotification('Chave PIX copiada!');
    });
}

function getCheckoutAddress() {
    return {
        nome: document.getElementById('checkoutNome')?.value.trim() || '',
        telefone: document.getElementById('checkoutTelefone')?.value.trim() || '',
        cep: document.getElementById('checkoutCep')?.value.trim() || '',
        rua: document.getElementById('checkoutRua')?.value.trim() || '',
        numero: document.getElementById('checkoutNumero')?.value.trim() || '',
        complemento: document.getElementById('checkoutComplemento')?.value.trim() || '',
        bairro: document.getElementById('checkoutBairro')?.value.trim() || '',
        cidade: document.getElementById('checkoutCidade')?.value.trim() || '',
        uf: document.getElementById('checkoutUf')?.value.trim().toUpperCase() || ''
    };
}

function validateCheckout() {
    const addr = getCheckoutAddress();
    const missing = [];
    if (!addr.nome) missing.push('Nome');
    if (!addr.telefone) missing.push('Telefone');
    if (!addr.cep) missing.push('CEP');
    if (!addr.rua) missing.push('Rua');
    if (!addr.numero) missing.push('Número');
    if (!addr.bairro) missing.push('Bairro');
    if (!addr.cidade) missing.push('Cidade');
    if (!addr.uf) missing.push('UF');

    if (missing.length > 0) {
        showNotification(`Preencha: ${missing.join(', ')}`, 'error');
        return false;
    }
    return true;
}

function sendCheckoutWhatsApp(e) {
    e.preventDefault();

    if (!validateCheckout()) {
        return;
    }

    const addr = getCheckoutAddress();
    // Garantir que o frete está calculado pelo UF
    if (freteAtual === 0 && addr.uf) {
        calcularFrete(addr.uf);
    }
    const subtotal = cart.getTotal();
    const totalComFrete = subtotal + freteAtual;
    let msg = `Ola! Gostaria de finalizar meu pedido:\n\n`;
    cart.items.forEach(item => {
        msg += `• ${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });
    msg += `\n*Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}*`;
    if (freteAtual > 0) {
        msg += `\n*Frete (Correios PAC): R$ ${freteAtual.toFixed(2).replace('.', ',')}*`;
        msg += `\n*TOTAL: R$ ${totalComFrete.toFixed(2).replace('.', ',')}*\n`;
    } else {
        msg += `\n*TOTAL: R$ ${subtotal.toFixed(2).replace('.', ',')}*`;
        msg += `\n_(Frete a calcular)_\n`;
    }
    msg += `\n*Endereco de entrega:*\n`;
    msg += `${addr.nome}\n`;
    msg += `${addr.rua}, ${addr.numero}`;
    if (addr.complemento) msg += ` - ${addr.complemento}`;
    msg += `\n${addr.bairro}\n`;
    msg += `${addr.cidade} - ${addr.uf}\n`;
    msg += `CEP: ${addr.cep}\n`;
    msg += `Tel: ${addr.telefone}\n`;
    msg += `\nJa fiz o PIX. Aguardo confirmacao!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

// Busca automatica de CEP + calculo de frete
function buscarCep(cep) {
    cep = cep.replace(/\D/g, '');
    if (cep.length !== 8) return;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(r => r.json())
        .then(data => {
            if (data.erro) return;
            if (data.logradouro) document.getElementById('checkoutRua').value = data.logradouro;
            if (data.bairro) document.getElementById('checkoutBairro').value = data.bairro;
            if (data.localidade) document.getElementById('checkoutCidade').value = data.localidade;
            if (data.uf) document.getElementById('checkoutUf').value = data.uf;
            calcularFrete(data.uf);
        })
        .catch(() => {});
}

// Tabela de frete por região (baseado nos Correios PAC)
let freteAtual = 0;

function calcularFrete(uf) {
    uf = (uf || '').toUpperCase();

    // Frete por região - valores aproximados Correios PAC
    const freteTabela = {
        // Espírito Santo (local)
        'ES': { valor: 18.90, prazo: '3-5 dias úteis' },
        // Sudeste
        'RJ': { valor: 24.90, prazo: '5-8 dias úteis' },
        'SP': { valor: 26.90, prazo: '5-8 dias úteis' },
        'MG': { valor: 24.90, prazo: '5-8 dias úteis' },
        // Sul
        'PR': { valor: 32.90, prazo: '7-10 dias úteis' },
        'SC': { valor: 35.90, prazo: '8-12 dias úteis' },
        'RS': { valor: 37.90, prazo: '8-12 dias úteis' },
        // Centro-Oeste
        'DF': { valor: 32.90, prazo: '7-10 dias úteis' },
        'GO': { valor: 32.90, prazo: '7-10 dias úteis' },
        'MT': { valor: 38.90, prazo: '10-15 dias úteis' },
        'MS': { valor: 36.90, prazo: '10-15 dias úteis' },
        // Nordeste
        'BA': { valor: 29.90, prazo: '7-10 dias úteis' },
        'SE': { valor: 32.90, prazo: '8-12 dias úteis' },
        'AL': { valor: 34.90, prazo: '8-12 dias úteis' },
        'PE': { valor: 35.90, prazo: '8-12 dias úteis' },
        'PB': { valor: 36.90, prazo: '10-12 dias úteis' },
        'RN': { valor: 37.90, prazo: '10-12 dias úteis' },
        'CE': { valor: 38.90, prazo: '10-15 dias úteis' },
        'PI': { valor: 39.90, prazo: '10-15 dias úteis' },
        'MA': { valor: 42.90, prazo: '12-15 dias úteis' },
        // Norte
        'PA': { valor: 44.90, prazo: '12-18 dias úteis' },
        'TO': { valor: 39.90, prazo: '10-15 dias úteis' },
        'AP': { valor: 49.90, prazo: '15-20 dias úteis' },
        'AM': { valor: 52.90, prazo: '15-20 dias úteis' },
        'RR': { valor: 54.90, prazo: '15-20 dias úteis' },
        'AC': { valor: 54.90, prazo: '15-20 dias úteis' },
        'RO': { valor: 46.90, prazo: '12-18 dias úteis' }
    };

    const frete = freteTabela[uf] || { valor: 39.90, prazo: '10-15 dias úteis' };
    freteAtual = frete.valor;

    // Mostrar resultado do frete no formulário
    const freteInfo = document.getElementById('freteInfo');
    const freteValor = document.getElementById('freteValor');
    const fretePrazo = document.getElementById('fretePrazo');
    if (freteInfo) freteInfo.style.display = 'flex';
    if (freteValor) freteValor.textContent = `Frete: R$ ${frete.valor.toFixed(2).replace('.', ',')}`;
    if (fretePrazo) fretePrazo.textContent = `Prazo estimado: ${frete.prazo} (Correios PAC)`;

    // Atualizar totais no resumo e QR code
    atualizarTotalComFrete();
    generatePixQrCode();
}

function atualizarTotalComFrete() {
    const subtotal = cart.getTotal();
    const total = subtotal + freteAtual;

    const freteRow = document.getElementById('checkoutFreteRow');
    const freteEl = document.getElementById('checkoutFrete');
    const totalFinalRow = document.getElementById('checkoutTotalFinalRow');
    const totalFinalEl = document.getElementById('checkoutTotalFinal');

    if (freteAtual > 0) {
        if (freteRow) freteRow.style.display = 'flex';
        if (freteEl) freteEl.textContent = `R$ ${freteAtual.toFixed(2).replace('.', ',')}`;
        if (totalFinalRow) totalFinalRow.style.display = 'flex';
        if (totalFinalEl) totalFinalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}

// ========== Payment Tabs ==========
function switchPayment(type) {
    document.querySelectorAll('.payment-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.payment-panel').forEach(p => p.classList.remove('active'));

    if (type === 'pix') {
        document.querySelector('.payment-tab:first-child').classList.add('active');
        document.getElementById('paymentPix').classList.add('active');
    } else {
        document.querySelector('.payment-tab:last-child').classList.add('active');
        document.getElementById('paymentCartao').classList.add('active');
    }
}

// ========== Mercado Pago - Cartão ==========
function pagarComCartao() {
    if (!validateCheckout()) return;

    const addr = getCheckoutAddress();
    if (freteAtual === 0 && addr.uf) calcularFrete(addr.uf);

    const btn = document.getElementById('btnPagarCartao');
    const btnOriginal = btn ? btn.innerHTML : '';
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner"></span> Processando...';
    }

    // Montar itens do Mercado Pago
    const mpItems = cart.items.map(item => ({
        title: item.name,
        quantity: item.quantity,
        unit_price: parseFloat(item.price),
        currency_id: 'BRL'
    }));

    // Adicionar frete como item
    if (freteAtual > 0) {
        mpItems.push({
            title: 'Frete Correios PAC',
            quantity: 1,
            unit_price: parseFloat(freteAtual),
            currency_id: 'BRL'
        });
    }

    const preference = {
        items: mpItems,
        payer: {
            name: addr.nome,
            phone: { number: addr.telefone },
            address: {
                zip_code: addr.cep,
                street_name: addr.rua,
                street_number: parseInt(addr.numero) || 0
            }
        },
        back_urls: {
            success: SITE_URL + '?status=approved',
            failure: SITE_URL + '?status=failure',
            pending: SITE_URL + '?status=pending'
        },
        auto_return: 'approved',
        statement_descriptor: 'TORRES FITWEAR',
        external_reference: 'order_' + Date.now()
    };

    fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + MP_ACCESS_TOKEN,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(preference)
    })
    .then(r => r.json())
    .then(data => {
        if (data.init_point) {
            window.location.href = data.init_point;
        } else {
            showNotification('Erro ao criar pagamento. Tente via PIX.', 'error');
            if (btn) { btn.disabled = false; btn.innerHTML = btnOriginal; }
        }
    })
    .catch(err => {
        console.error('Erro MP:', err);
        showNotification('Erro de conexão. Tente via PIX.', 'error');
        if (btn) { btn.disabled = false; btn.innerHTML = btnOriginal; }
    });
}

// Check payment status on return
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');
    if (status === 'approved') {
        showNotification('Pagamento aprovado! Obrigada pela compra! 💜');
        cart.items = [];
        cart.saveToStorage();
        cart.updateCartBadge();
        window.history.replaceState({}, '', window.location.pathname);
    } else if (status === 'failure') {
        showNotification('Pagamento não aprovado. Tente novamente.', 'error');
        window.history.replaceState({}, '', window.location.pathname);
    } else if (status === 'pending') {
        showNotification('Pagamento pendente. Aguarde a confirmação.');
        window.history.replaceState({}, '', window.location.pathname);
    }
});

// Attach click validation to WhatsApp button
document.addEventListener('DOMContentLoaded', () => {
    const whatsBtn = document.getElementById('checkoutWhatsApp');
    if (whatsBtn) whatsBtn.addEventListener('click', sendCheckoutWhatsApp);
});

// Close checkout modal on outside click
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'checkoutModal') closeCheckout();
});

// ========== Scroll Animations ==========
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

document.querySelectorAll('.benefit-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// ========== Injected Animations ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn { from{transform:translateX(400px);opacity:0}to{transform:translateX(0);opacity:1} }
    @keyframes slideOut { from{transform:translateX(0);opacity:1}to{transform:translateX(400px);opacity:0} }
    @keyframes fadeInUp { from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1} }
    @keyframes glow { 0%,100%{box-shadow:0 0 20px rgba(45,27,78,0.3)}50%{box-shadow:0 0 30px rgba(196,122,58,0.5)} }
`;
document.head.appendChild(style);

window.addEventListener('load', () => { document.body.style.animation = 'fadeInUp 0.8s ease-out'; });

// ========== Active Nav on Scroll ==========
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(s => {
        if (scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
    });
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent-purple)' : 'white';
    });
});

// ========== Button Glow ==========
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function() { this.style.animation = 'glow 1.5s ease-in-out'; });
    btn.addEventListener('mouseleave', function() { this.style.animation = 'none'; });
});

// ========== Hero Background Detection ==========
const heroBgImg = document.querySelector('.hero-bg-img');
if (heroBgImg) {
    heroBgImg.addEventListener('load', () => {
        document.querySelector('.hero').classList.add('has-bg-image');
    });
    // If already loaded (cached)
    if (heroBgImg.complete && heroBgImg.naturalWidth > 0) {
        document.querySelector('.hero').classList.add('has-bg-image');
    }
}

// ========== Logo Fallback ==========
const logoImg = document.querySelector('.logo-img');
if (logoImg) {
    logoImg.addEventListener('load', () => {
        const logoText = document.querySelector('.logo-text');
        if (logoText) logoText.style.display = 'none';
    });
    if (logoImg.complete && logoImg.naturalWidth > 0) {
        const logoText = document.querySelector('.logo-text');
        if (logoText) logoText.style.display = 'none';
    }
}

console.log('%cTorres Fitwear', 'color: #2d1b4e; font-size: 14px; font-weight: bold;');
