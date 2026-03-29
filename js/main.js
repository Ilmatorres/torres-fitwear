// ========== Configuration ==========
// Substitua pela sua chave PIX real (CPF, email, telefone ou chave aleatória)
const PIX_KEY = '27992669457';
// Número WhatsApp (com código do país, sem + ou espaços)
const WHATSAPP_NUMBER = '5527992669457';

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
    { name: 'Legging Essência', price: 189.90, description: 'Cintura alta, compressão leve e flexibilidade total para seu dia', images: [] },
    { name: 'Top Força', price: 129.90, description: 'Suporte máximo, tecido respirável e design elegante', images: [] },
    { name: 'Short Movimento', price: 149.90, description: 'Bolsos funcionais, ajuste perfeito e liberdade total', images: [] },
    { name: 'Jaqueta Visão', price: 259.90, description: 'Corta vento, leve e perfeita para treinar em qualquer lugar', images: [] }
];

// ========== Products Management ==========
class ProductsManager {
    constructor() {
        this.products = this.loadProducts();
        if (this.products.length === 0) {
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

    addProduct(name, price, description, images = []) {
        if (!name || !price || !description) return false;
        this.products.push({
            id: Date.now(),
            name,
            price: parseFloat(price),
            description,
            images: Array.isArray(images) ? images : [images].filter(Boolean)
        });
        this.saveProducts();
        return true;
    }

    removeProduct(id) {
        this.products = this.products.filter(p => p.id !== id);
        this.saveProducts();
    }

    updateProduct(id, name, price, description, images) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            product.name = name;
            product.price = parseFloat(price);
            product.description = description;
            product.images = Array.isArray(images) ? images : [images].filter(Boolean);
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
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeCart(); closeSizeGuide(); closeAdminPanel(); closeCheckout(); } });

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

    productsGrid.innerHTML = productsManager.products.map(product => {
        const imgs = product.images || [];
        const hasImages = imgs.length > 0 && imgs.some(i => i.startsWith('data:') || i.startsWith('http'));
        const safeName = product.name.replace(/'/g, "\\'");

        let imageHtml;
        if (hasImages) {
            const realImages = imgs.filter(i => i.startsWith('data:') || i.startsWith('http'));
            if (realImages.length === 1) {
                imageHtml = `<div class="product-image" style="padding:0;"><img src="${realImages[0]}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;"></div>`;
            } else {
                const slidesHtml = realImages.map((img, i) =>
                    `<img class="product-slide ${i === 0 ? 'active' : ''}" src="${img}" alt="${product.name} foto ${i + 1}">`
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

        return `
        <div class="product-card">
            ${imageHtml}
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
            <button class="btn btn-secondary" onclick="addToCart('${safeName}', ${product.price})">Adicionar ao Carrinho</button>
        </div>`;
    }).join('');

    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
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

            if (editId) {
                if (productsManager.updateProduct(parseInt(editId), name, price, description, pendingImages)) {
                    showNotification(`${name} atualizado!`);
                    cancelEdit();
                }
            } else {
                if (productsManager.addProduct(name, price, description, pendingImages)) {
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
        const firstReal = imgs.find(i => i.startsWith('data:') || i.startsWith('http'));
        const thumbContent = firstReal
            ? `<img src="${firstReal}" alt="${product.name}">`
            : product.name.charAt(0);
        const photoCount = imgs.filter(i => i.startsWith('data:') || i.startsWith('http')).length;
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
const checkoutModal = document.getElementById('checkoutModal');

function openCheckout() {
    if (cart.items.length === 0) {
        showNotification('Adicione produtos primeiro!', 'error');
        return;
    }
    closeCart();

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

    // Build WhatsApp link with order details
    updateCheckoutWhatsApp();

    // Show modal
    if (checkoutModal) {
        checkoutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCheckout() {
    if (checkoutModal) {
        checkoutModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function generatePixQrCode() {
    const qrImg = document.getElementById('pixQrCode');
    if (!qrImg) return;

    const total = cart.getTotal().toFixed(2);
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

function updateCheckoutWhatsApp() {
    const link = document.getElementById('checkoutWhatsApp');
    if (!link) return;

    const total = cart.getTotal().toFixed(2).replace('.', ',');
    let msg = `Ola! Gostaria de finalizar meu pedido:\n\n`;
    cart.items.forEach(item => {
        msg += `• ${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });
    msg += `\n*Total: R$ ${total}*\n\nVou pagar via PIX. Aguardo confirmacao!`;
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// Close checkout modal on outside click
if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) closeCheckout();
    });
}

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
