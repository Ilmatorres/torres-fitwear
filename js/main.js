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
    { name: 'Macacão Plus Pink', price: 160.00, description: 'Macacão fitness plus size na cor pink, modelagem perfeita com detalhe nas costas', images: ['assets/products/macacao-plus-pink-1.jpeg','assets/products/macacao-plus-pink-2.jpeg','assets/products/macacao-plus-pink-3.jpeg'], category: 'plus', colors: [{name:'Rosa',hex:'#e91e8c',stock:1}] },
    { name: 'Conjunto Plus Vermelho', price: 159.00, description: 'Top + legging plus size vermelho marsala, cintura alta e costas trançadas', images: ['assets/products/conjunto-plus-vermelho-1.jpeg','assets/products/conjunto-plus-vermelho-2.jpeg'], category: 'plus', colors: [{name:'Vermelho',hex:'#dc2626',stock:1}] },
    { name: 'Conjunto Plus Verde', price: 149.00, description: 'Top + legging plus size verde esmeralda, tecido brilhoso e compressão leve', images: ['assets/products/conjunto-plus-verde-1.jpeg','assets/products/conjunto-plus-verde-2.jpeg'], category: 'plus', colors: [{name:'Verde',hex:'#16a34a',stock:1}] },
    { name: 'Blusa Dryft Plus', price: 65.00, description: 'Blusa dry fit plus size azul com legging roxa, tecido leve e respirável', images: ['assets/products/blusa-dryft-plus-1.jpeg','assets/products/blusa-dryft-plus-2.jpeg','assets/products/blusa-dryft-plus-3.jpeg'], category: 'plus', colors: [{name:'Azul',hex:'#2563eb',stock:1},{name:'Roxo',hex:'#7c3aed',stock:1}] },
    { name: 'Conjunto Plus Preto', price: 150.00, description: 'Top + legging plus size preto, tecido brilhoso e elegante', images: ['assets/products/conjunto-plus-preto-1.jpeg','assets/products/conjunto-plus-preto-2.jpeg'], category: 'plus', colors: [{name:'Preto',hex:'#000000',stock:1}] },
    { name: 'Tule Plus', price: 59.00, description: 'Blusa tule plus size azul marinho com detalhe transparente na cintura', images: ['assets/products/tule-plus-1.jpeg','assets/products/tule-plus-2.jpeg'], category: 'plus', colors: [{name:'Azul Marinho',hex:'#1e3a5f',stock:1}] },
    { name: 'Conjunto Plus Branco e Preto', price: 150.00, description: 'Conjunto plus size bicolor: top branco + legging preta, costas nadador e conforto total. As duas cores vêm juntas no conjunto.', images: ['assets/products/conjunto-plus-branco-1.jpeg','assets/products/conjunto-plus-branco-2.jpeg'], category: 'plus', colors: [{name:'Branco e Preto',hex:'linear-gradient(90deg,#ffffff 50%,#000000 50%)',stock:1}] },
    { name: 'Conjunto Plus Short', price: 135.00, description: 'Regata + short bike plus size preto, perfeito para treino e dia a dia', images: ['assets/products/conjunto-plus-short-1.jpeg','assets/products/conjunto-plus-short-2.jpeg'], category: 'plus', colors: [{name:'Preto',hex:'#000000',stock:1}] },

    // ===== TAMANHO ÚNICO (36/42) =====
    { name: 'Macaquinho Bege Detalhe Branco', price: 100.00, description: 'Macaquinho bege brilhoso com viés branco no decote e costas cruzadas, peça única elegante', images: ['assets/products/conjunto-bege-short-1.jpeg','assets/products/conjunto-bege-short-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Bege',hex:'#a8836a',stock:1}] },
    { name: 'Conjunto Cinza', price: 115.00, description: 'Top cropped + legging cinza, tecido macio e confortável', images: ['assets/products/conjunto-cinza-1.jpeg','assets/products/conjunto-cinza-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Cinza',hex:'#6b7280',stock:1}] },
    { name: 'Conjunto Azul Claro', price: 149.00, description: 'Top + legging azul claro, tecido brilhoso com compressão leve', images: ['assets/products/conjunto-azul-claro-1.jpeg','assets/products/conjunto-azul-claro-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Azul',hex:'#2563eb',stock:1}] },
    { name: 'Conjunto Azul Royal', price: 125.00, description: 'Top triângulo + short azul royal, estilo praiano fitness', images: ['assets/products/conjunto-azul-royal-1.jpeg','assets/products/conjunto-azul-royal-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Azul',hex:'#2563eb',stock:1}] },
    { name: 'Conjunto Dourado', price: 139.00, description: 'Top + short bike dourado, cor vibrante e tecido premium', images: ['assets/products/conjunto-dourado-1.jpeg'], category: 'tamanho-unico', colors: [{name:'Amarelo',hex:'#d4a017',stock:1}] },
    { name: 'Conjunto Creme', price: 149.00, description: 'Top + legging creme, visual sofisticado e confortável', images: ['assets/products/conjunto-creme-1.jpeg','assets/products/conjunto-creme-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Branco',hex:'#ffffff',stock:1}] },
    { name: 'Conjunto Oliva Short', price: 100.00, description: 'Top cropped + short bike verde oliva, tecido canelado', images: ['assets/products/conjunto-oliva-1.jpeg','assets/products/conjunto-oliva-2.jpeg','assets/products/conjunto-oliva-3.jpeg'], category: 'tamanho-unico', colors: [{name:'Verde',hex:'#16a34a',stock:1}] },
    { name: 'Macaquinho Rosa', price: 115.00, description: 'Macaquinho rosa claro com detalhe nas costas trançado', images: ['assets/products/macaquinho-rosa-1.jpeg','assets/products/macaquinho-rosa-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Rosa',hex:'#e91e8c',stock:1}] },
    { name: 'Conjunto Chumbo', price: 190.00, description: 'Regata + legging chumbo com detalhe branco, estilo esportivo', images: ['assets/products/conjunto-chumbo-1.jpeg','assets/products/conjunto-chumbo-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Cinza',hex:'#6b7280',stock:1}] },
    { name: 'Macacão Verde Água', price: 150.00, description: 'Macacão menta/verde água com costas abertas cruzadas, peça única elegante', images: ['assets/products/macacao-verde-agua-1.jpeg','assets/products/macacao-verde-agua-2.jpeg','assets/products/macacao-verde-agua-3.jpeg'], category: 'tamanho-unico', colors: [{name:'Verde Água',hex:'#2dd4bf',stock:1}] },
    { name: 'Macaquinho Preto Animal Print', price: 115.00, description: 'Macaquinho preto com textura animal print, costas abertas e alças cruzadas', images: ['assets/products/macaquinho-marinho-1.jpeg','assets/products/macaquinho-marinho-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Preto',hex:'#000000',stock:1}] },
    { name: 'Macaquinho Marsala', price: 115.00, description: 'Macaquinho cor marsala texturizado com costas abertas e alças cruzadas', images: ['assets/products/macaquinho-marsala-1.jpeg','assets/products/macaquinho-marsala-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Marsala',hex:'#722f37',stock:1}] },
    { name: 'Conjunto Marinho', price: 139.00, description: 'Top + legging azul marinho com costas abertas, clássico e elegante', images: ['assets/products/conjunto-marinho-1.jpeg','assets/products/conjunto-marinho-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Azul Marinho',hex:'#1e3a5f',stock:1}] },
    { name: 'Macaquinho Preto Cruzado', price: 150.00, description: 'Macaquinho preto curto com costas cruzadas, visual poderoso e versátil', images: ['assets/products/macacao-preto-1.jpeg','assets/products/macacao-preto-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Preto',hex:'#000000',stock:1}] },
    { name: 'Macaquinho Bege com Recorte', price: 125.00, description: 'Macaquinho bege com recorte assimétrico e viés verde oliva, peça única moderna', images: ['assets/products/conjunto-bege-crop-1.jpeg','assets/products/conjunto-bege-crop-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Bege',hex:'#c9a890',stock:1}] },
    { name: 'Conjunto Marinho Zebra', price: 150.00, description: 'Conjunto azul marinho com textura zebra, top + legging com costas abertas, conjunto duas peças', images: ['assets/products/macacao-sage-1.jpeg','assets/products/macacao-sage-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Azul Marinho',hex:'#1e3a5f',stock:1}] },
    { name: 'Macaquinho Menta', price: 115.00, description: 'Macaquinho menta/verde claro com costas cruzadas', images: ['assets/products/macaquinho-menta-1.jpeg','assets/products/macaquinho-menta-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Verde Água',hex:'#2dd4bf',stock:1}] },
    { name: 'Conjunto Verde Esmeralda', price: 139.00, description: 'Top + short verde esmeralda, estilo moderno e elegante', images: ['assets/products/conjunto-bicolor-1.jpeg','assets/products/conjunto-bicolor-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Verde Esmeralda',hex:'#10b981',stock:1}] },
    { name: 'Conjunto Verde e Roxo Short', price: 150.00, description: 'Conjunto bicolor: top verde + short roxo com bolso lateral. As duas cores vêm juntas no conjunto.', images: ['assets/products/macacao-manga-longa-1.jpeg','assets/products/macacao-manga-longa-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Verde e Roxo',hex:'linear-gradient(90deg,#16a34a 50%,#7c3aed 50%)',stock:1}] },
    { name: 'Conjunto Bicolor com Viés Branco', price: 125.00, description: 'Conjunto bicolor azul marinho com viés branco, top + short bike', images: ['assets/products/conjunto-marinho-branco-1.jpeg','assets/products/conjunto-marinho-branco-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Azul Marinho',hex:'#1e3a5f',stock:1},{name:'Branco',hex:'#ffffff',stock:1}] },
    { name: 'Macacão Preto', price: 125.00, description: 'Macacão preto comprido com alças finas e costas em V abertas, peça única elegante', images: ['assets/products/conjunto-preto-branco-1.jpeg','assets/products/conjunto-preto-branco-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Preto',hex:'#000000',stock:1}] },
    { name: 'Conjunto Preto', price: 110.00, description: 'Conjunto preto top + legging, modelagem clássica para treino e dia a dia', images: ['assets/products/conjunto-preto-novo-1.jpeg','assets/products/conjunto-preto-novo-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Preto',hex:'#000000',stock:1}] },
    { name: 'Conjunto Canelado Marsala', price: 110.00, description: 'Conjunto canelado top + short na cor marsala, tecido com textura e caimento perfeito', images: ['assets/products/conjunto-canelado-marsala-1.jpeg'], category: 'tamanho-unico', colors: [{name:'Marsala',hex:'#9b2c4f',stock:1}] },
    { name: 'Conjunto Canelado Marinho', price: 110.00, description: 'Conjunto canelado top + short azul marinho, tecido com textura canelada elegante', images: ['assets/products/conjunto-canelado-marinho-1.jpeg'], category: 'tamanho-unico', colors: [{name:'Azul Marinho',hex:'#1e3a5f',stock:1}] },
    { name: 'Short Canelado', price: 55.00, description: 'Short bike canelado, tecido com textura. Disponível em várias cores: bege, azul marinho, marsala, branco e oliva', images: ['assets/products/short-canelado-1.jpeg','assets/products/short-canelado-2.jpeg'], category: 'tamanho-unico', colors: [{name:'Bege',hex:'#d4b896',stock:1},{name:'Azul Marinho',hex:'#1e3a5f',stock:1},{name:'Marsala',hex:'#9b2c4f',stock:1},{name:'Branco',hex:'#ffffff',stock:1},{name:'Verde Oliva',hex:'#808000',stock:1}] },

    // ===== BLUSAS =====
    { name: 'Blusa Tule Azul', price: 44.99, description: 'Regata em tule azul claro, leve e transparente, perfeita para usar sobre o top no treino', images: ['assets/products/blusa-tule-azul-1.jpeg','assets/products/blusa-tule-azul-2.jpeg'], category: 'blusas', colors: [{name:'Azul',hex:'#87CEEB',stock:1}] },
    { name: 'Blusa Tule Verde Oliva', price: 44.99, description: 'Regata em tule verde oliva, transparência estilosa e caimento solto', images: ['assets/products/blusa-tule-verde-1.jpeg','assets/products/blusa-tule-verde-2.jpeg'], category: 'blusas', colors: [{name:'Verde',hex:'#808000',stock:1}] },
    { name: 'Blusa Tule Manga Longa', price: 59.90, description: 'Blusa tule manga longa preta, transparência elegante para usar no dia a dia ou no treino', images: ['assets/products/blusa-tule-manga-longa-1.jpeg'], category: 'blusas', colors: [{name:'Preto',hex:'#000000',stock:1}] },
    { name: 'Cropt Tule Pink', price: 39.90, description: 'Cropped tule na cor pink, transparente e estiloso, perfeito para o treino', images: ['assets/products/cropt-tule-pink-1.jpeg'], category: 'blusas', colors: [{name:'Pink',hex:'#ec4899',stock:1}] },
    { name: 'Blusa UV Turquesa', price: 49.00, description: 'Blusa com proteção UV e secagem rápida, recorte nas costas, ideal para treinos ao ar livre', images: ['assets/products/blusa-uv-1.jpeg','assets/products/blusa-uv-2.jpeg','assets/products/blusa-uv-3.jpeg'], category: 'blusas', colors: [{name:'Verde Água',hex:'#2dd4bf',stock:1}] },
    { name: 'Blusa Tule Plus Marinho', price: 49.90, description: 'Blusa tule plus size azul marinho, detalhe transparente na cintura, moderna e confortável', images: ['assets/products/blusa-tule-plus-1.jpeg','assets/products/blusa-tule-plus-2.jpeg'], category: 'blusas', colors: [{name:'Azul Marinho',hex:'#1e3a5f',stock:1}] },
    { name: 'Blusa Dryft', price: 59.90, description: 'Blusa dry fit azul, tecido tecnológico com secagem rápida e toque macio', images: ['assets/products/blusa-dryft-1.jpeg','assets/products/blusa-dryft-2.jpeg'], category: 'blusas', colors: [{name:'Azul',hex:'#6B7FA0',stock:1}] },
    { name: 'Blusa Verde Neon', price: 50.00, description: 'Blusa verde neon, modelo solto e leve para treino', images: ['assets/products/blusa-verde-neon-1.jpeg'], category: 'blusas', colors: [{name:'Verde Neon',hex:'#84cc16',stock:1}] },
    { name: 'Blusa Branca', price: 50.00, description: 'Blusa branca leve e respirável, perfeita para o dia a dia e treino', images: ['assets/products/blusa-branca-1.jpeg','assets/products/blusa-branca-2.jpeg'], category: 'blusas', colors: [{name:'Branco',hex:'#ffffff',stock:1}] },
    { name: 'Blusa Azul', price: 50.00, description: 'Regata azul com tecido leve e respirável, ideal para treinos', images: ['assets/products/blusa-azul-1.jpeg','assets/products/blusa-azul-2.jpeg'], category: 'blusas', colors: [{name:'Azul',hex:'#3b82f6',stock:1}] },

    // ===== JAQUETAS =====
    { name: 'Jaqueta Corta-Vento', price: 99.90, description: 'Jaqueta corta-vento com capuz e zíper, leve e respirável, perfeita para treinos ao ar livre. Disponível em 4 cores.', images: ['assets/products/jaqueta-corta-vento-1.jpeg','assets/products/jaqueta-corta-vento-2.jpeg','assets/products/jaqueta-corta-vento-3.jpeg','assets/products/jaqueta-corta-vento-4.jpeg','assets/products/jaqueta-corta-vento-5.jpeg'], category: 'jaquetas', colors: [{name:'Preto',hex:'#000000',stock:1},{name:'Branco',hex:'#ffffff',stock:1},{name:'Bege',hex:'#d4b896',stock:1},{name:'Rosa',hex:'#f4a8b0',stock:1}] }
];

// ========== Products Management ==========
class ProductsManager {
    constructor() {
        this.products = this.loadProducts();
        // Reload defaults if empty or if products don't have asset images yet
        if (this.products.length === 0 || (this.products.length > 0 && !this.products[0].images?.some(i => i.startsWith('assets/')))) {
            this.loadDefaultProductsLocal();
            return;
        }
        // Merge: add any new default products missing from saved list (matched by name)
        const existingNames = new Set(this.products.map(p => p.name));
        let added = false;
        defaultProducts.forEach(dp => {
            if (!existingNames.has(dp.name)) {
                const maxId = Math.max(0, ...this.products.map(p => p.id || 0));
                this.products.push({ id: maxId + 1, ...dp });
                added = true;
            }
        });
        if (added) this._persistLocal();
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

    _persistLocal() {
        localStorage.setItem('torres_products', JSON.stringify(this.products));
    }

    saveProducts() {
        this._persistLocal();
        scheduleAutoSave();
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

    loadDefaultProductsLocal() {
        this.products = defaultProducts.map((p, i) => ({
            id: i + 1,
            ...p
        }));
        this._persistLocal();
    }

    loadDefaultProducts() {
        this.loadDefaultProductsLocal();
        scheduleAutoSave();
    }

    clear() {
        this.products = [];
        this.saveProducts();
    }

    replaceAllSilent(products) {
        this.products = products;
        this._persistLocal();
    }

    replaceAll(products) {
        this.products = products;
        this.saveProducts();
    }
}

// ========== GitHub Auto-Save ==========
const GH_OWNER = 'Ilmatorres';
const GH_REPO = 'torres-fitwear';
const GH_FILE = 'products.json';
const GH_TOKEN_KEY = 'torres_gh_token';
let saveTimer = null;
let isSaving = false;

function getGitHubToken() {
    return localStorage.getItem(GH_TOKEN_KEY);
}

function setGitHubToken(token) {
    if (token) localStorage.setItem(GH_TOKEN_KEY, token);
    else localStorage.removeItem(GH_TOKEN_KEY);
}

function utf8ToBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

async function getProductsFileSha(token) {
    try {
        const res = await fetch(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${GH_FILE}`, {
            headers: { 'Authorization': `Bearer ${token}`, 'Accept': 'application/vnd.github+json' },
            cache: 'no-store'
        });
        if (res.status === 404) return { ok: true, sha: null };
        if (res.status === 401 || res.status === 403) return { ok: false, reason: 'auth' };
        if (!res.ok) return { ok: false, reason: 'api' };
        const data = await res.json();
        return { ok: true, sha: data.sha };
    } catch (e) {
        return { ok: false, reason: 'network' };
    }
}

async function commitProductsToGitHub() {
    const token = getGitHubToken();
    if (!token) return { ok: false, reason: 'no-token' };

    const shaResult = await getProductsFileSha(token);
    if (!shaResult.ok) return shaResult;

    const content = utf8ToBase64(JSON.stringify(productsManager.products, null, 2));
    const body = {
        message: 'Atualizar produtos pelo painel admin',
        content
    };
    if (shaResult.sha) body.sha = shaResult.sha;

    try {
        const res = await fetch(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${GH_FILE}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (res.status === 401 || res.status === 403) {
            return { ok: false, reason: 'auth' };
        }
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            return { ok: false, reason: 'api', detail: err.message };
        }
        return { ok: true };
    } catch (e) {
        return { ok: false, reason: 'network' };
    }
}

function scheduleAutoSave() {
    if (!getGitHubToken()) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(runAutoSave, 1500);
    updateSaveStatus('pending');
}

async function runAutoSave() {
    if (isSaving) {
        saveTimer = setTimeout(runAutoSave, 1500);
        return;
    }
    isSaving = true;
    updateSaveStatus('saving');
    const result = await commitProductsToGitHub();
    isSaving = false;
    if (result.ok) {
        updateSaveStatus('saved');
        showNotification('Gravado no site! Publicação em ~1 min.');
    } else if (result.reason === 'auth') {
        setGitHubToken(null);
        updateSaveStatus('error');
        showNotification('Token GitHub inválido. Configure de novo.', 'error');
        renderTokenSetup();
    } else if (result.reason === 'network') {
        updateSaveStatus('error');
        showNotification('Sem ligação. Tente outra vez.', 'error');
    } else {
        updateSaveStatus('error');
        showNotification('Erro a gravar: ' + (result.detail || 'tente outra vez'), 'error');
    }
}

function updateSaveStatus(state) {
    const el = document.getElementById('saveStatus');
    if (!el) return;
    const map = {
        pending: { text: 'Alterações por gravar…', color: '#f59e0b' },
        saving: { text: 'A gravar no site…', color: '#3b82f6' },
        saved: { text: '✓ Gravado no site', color: '#16a34a' },
        error: { text: '⚠ Erro a gravar', color: '#dc2626' },
        idle: { text: '', color: '' }
    };
    const s = map[state] || map.idle;
    el.textContent = s.text;
    el.style.color = s.color;
}

function renderTokenSetup() {
    const container = document.getElementById('tokenSetup');
    if (!container) return;
    if (getGitHubToken()) {
        container.innerHTML = `
            <div style="background:#dcfce7;color:#15803d;padding:8px 12px;border-radius:6px;font-size:13px;display:flex;justify-content:space-between;align-items:center;gap:8px;">
                <span>✓ Token GitHub configurado — alterações são gravadas automaticamente</span>
                <button onclick="clearGitHubToken()" style="background:transparent;border:1px solid #15803d;color:#15803d;padding:4px 10px;border-radius:4px;cursor:pointer;font-size:12px;">Remover</button>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div style="background:#fef3c7;color:#92400e;padding:12px;border-radius:6px;font-size:13px;line-height:1.5;">
                <strong>⚠ Token GitHub não configurado</strong><br>
                Sem token, as alterações ficam só no seu navegador. <a href="#" onclick="showTokenInstructions(event)">Como criar?</a>
                <div style="margin-top:8px;display:flex;gap:6px;">
                    <input type="password" id="ghTokenInput" placeholder="Cole aqui o token (github_pat_...)" style="flex:1;padding:6px 10px;border:1px solid #d1d5db;border-radius:4px;font-size:13px;">
                    <button onclick="saveTokenInput()" style="background:#16a34a;color:#fff;border:none;padding:6px 14px;border-radius:4px;cursor:pointer;font-size:13px;">Guardar</button>
                </div>
            </div>
        `;
    }
}

function showTokenInstructions(event) {
    if (event) event.preventDefault();
    alert(
        'Como criar o token (~2 minutos):\n\n' +
        '1. Abra: https://github.com/settings/personal-access-tokens/new\n' +
        '2. Token name: Torres Fitwear admin\n' +
        '3. Expiration: 1 year (ou No expiration)\n' +
        '4. Repository access: Only select repositories → torres-fitwear\n' +
        '5. Permissions → Repository permissions → Contents: Read and write\n' +
        '6. Em baixo: Generate token\n' +
        '7. Copie o token (começa por github_pat_)\n' +
        '8. Cole no painel admin e carregue Guardar\n\n' +
        'O token fica só no seu navegador. Pode revogar a qualquer momento na mesma página do GitHub.'
    );
}

async function saveTokenInput() {
    const input = document.getElementById('ghTokenInput');
    if (!input) return;
    const token = input.value.trim();
    if (!token) {
        showNotification('Cole o token primeiro!', 'error');
        return;
    }
    setGitHubToken(token);
    showNotification('A validar token…');
    const result = await commitProductsToGitHub();
    if (result.ok) {
        showNotification('Token válido! Tudo gravado no site.');
        renderTokenSetup();
        updateSaveStatus('saved');
    } else if (result.reason === 'auth') {
        setGitHubToken(null);
        showNotification('Token inválido ou sem permissões. Verifique e tente outra vez.', 'error');
        renderTokenSetup();
    } else {
        showNotification('Token guardado, mas houve erro: ' + (result.detail || result.reason), 'error');
        renderTokenSetup();
    }
}

function clearGitHubToken() {
    if (!confirm('Remover o token? As alterações deixam de ser gravadas automaticamente.')) return;
    setGitHubToken(null);
    renderTokenSetup();
    updateSaveStatus('idle');
    showNotification('Token removido.');
}

let productsManager = new ProductsManager();

// ========== Cart System ==========
class ShoppingCart {
    constructor() {
        this.items = this.loadFromStorage();
    }

    loadFromStorage() {
        const saved = localStorage.getItem('torres_cart');
        const items = saved ? JSON.parse(saved) : [];
        // Migração: garantir que cada item tem id e color
        return items.map(item => ({
            id: item.id || Date.now() + Math.random(),
            color: item.color || '',
            ...item
        }));
    }

    saveToStorage() {
        localStorage.setItem('torres_cart', JSON.stringify(this.items));
    }

    addItem(productName, price = 0, image = '', color = '') {
        const existingItem = this.items.find(item => item.name === productName && (item.color || '') === color);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: Date.now() + Math.random(),
                name: productName,
                price,
                quantity: 1,
                image,
                color
            });
        }
        this.saveToStorage();
        this.updateCartBadge();
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveToStorage();
        this.updateCartBadge();
        renderCartItems();
    }

    updateQuantity(itemId, delta) {
        const item = this.items.find(item => item.id === itemId);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                this.removeItem(itemId);
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
        container.innerHTML = cart.items.map(item => {
            const imgHtml = item.image
                ? `<img class="cart-item-img" src="${item.image}" alt="${item.name}">`
                : `<div class="cart-item-letter">${item.name.charAt(0)}</div>`;
            const colorBadge = item.color
                ? `<div class="cart-item-color">Cor: <strong>${item.color}</strong></div>`
                : '';
            return `
            <div class="cart-item">
                ${imgHtml}
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    ${colorBadge}
                    <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="cart-item-qty-btn" onclick="cart.updateQuantity(${item.id}, -1)">-</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="cart-item-qty-btn" onclick="cart.updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="cart.removeItem(${item.id})" title="Remover">&times;</button>
            </div>`;
        }).join('');
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
        const colorPart = item.color ? ` — Cor: ${item.color}` : '';
        msg += `• ${item.name}${colorPart} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
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
    const product = productsManager.products.find(p => p.name === productName);
    if (!product) return;
    const colors = product.colors || [];
    const availableColors = colors.filter(c => typeof c.stock !== 'number' || c.stock > 0);

    if (availableColors.length === 0 && colors.length > 0) {
        showNotification('Produto esgotado!', 'error');
        return;
    }

    if (colors.length === 0) {
        addToCartWithColor(productName, price, '');
        return;
    }

    if (availableColors.length === 1 && colors.length === 1) {
        addToCartWithColor(productName, price, availableColors[0].name);
        return;
    }

    showColorPicker(product);
}

function addToCartWithColor(productName, price, colorName) {
    const product = productsManager.products.find(p => p.name === productName);
    const image = product && product.images && product.images.length > 0 ? product.images[0] : '';
    cart.addItem(productName, price, image, colorName);
    const msg = cartMessages[Math.floor(Math.random() * cartMessages.length)];
    const label = colorName ? `${productName} (${colorName})` : productName;
    showNotification(`${label} adicionado!\n${msg}`);
}

function showColorPicker(product) {
    const existing = document.getElementById('colorPickerOverlay');
    if (existing) existing.remove();

    const colors = product.colors || [];
    const overlay = document.createElement('div');
    overlay.id = 'colorPickerOverlay';
    overlay.className = 'color-picker-overlay';
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

    const optionsHtml = colors.map(c => {
        const stock = typeof c.stock === 'number' ? c.stock : null;
        const out = stock === 0;
        const stockLabel = stock !== null
            ? (out ? 'Esgotado' : stock + (stock === 1 ? ' disponível' : ' disponíveis'))
            : '';
        const safeName = c.name.replace(/'/g, "\\'");
        const safeProduct = product.name.replace(/'/g, "\\'");
        const onClick = out ? '' : `onclick="selectColorAndAdd('${safeProduct}', ${product.price}, '${safeName}')"`;
        return `
            <button type="button" class="color-picker-option${out ? ' out' : ''}" ${out ? 'disabled' : ''} ${onClick}>
                <span class="color-picker-dot" style="background:${c.hex}${c.hex === '#ffffff' ? ';border:2px solid #ccc' : ''}"></span>
                <span class="color-picker-name">${c.name}</span>
                ${stockLabel ? `<span class="color-picker-stock${out ? ' out' : ''}">${stockLabel}</span>` : ''}
            </button>`;
    }).join('');

    overlay.innerHTML = `
        <div class="color-picker-modal">
            <button class="color-picker-close" onclick="document.getElementById('colorPickerOverlay').remove()">&times;</button>
            <h3 style="margin:0 0 6px 0;">${product.name}</h3>
            <p style="color:#6b7280;margin:0 0 16px 0;font-size:14px;">Escolha a cor para fazer o pedido:</p>
            <div class="color-picker-options">${optionsHtml}</div>
        </div>
    `;
    document.body.appendChild(overlay);
}

function selectColorAndAdd(productName, price, colorName) {
    const overlay = document.getElementById('colorPickerOverlay');
    if (overlay) overlay.remove();
    addToCartWithColor(productName, price, colorName);
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
    loadProductsFromRepo();
});

async function loadProductsFromRepo() {
    try {
        const res = await fetch('products.json?t=' + Date.now(), { cache: 'no-store' });
        if (!res.ok) return;
        const remote = await res.json();
        if (!Array.isArray(remote) || remote.length === 0) return;
        const localJSON = JSON.stringify(productsManager.products);
        const remoteJSON = JSON.stringify(remote);
        if (localJSON === remoteJSON) return;
        productsManager.replaceAllSilent(remote);
        renderProducts();
        if (adminModal && adminModal.classList.contains('active')) {
            updateAdminProductsList();
        }
    } catch (e) {
        // products.json doesn't exist yet — first time setup
    }
}

function exportProducts() {
    const json = JSON.stringify(productsManager.products, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('Ficheiro descarregado! Faça upload no GitHub para publicar.');
}

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

        const totalStock = (product.colors || []).reduce((sum, c) => sum + (typeof c.stock === 'number' ? c.stock : 0), 0);
        const hasStockField = (product.colors || []).some(c => typeof c.stock === 'number');
        const esgotado = hasStockField && totalStock === 0;

        const colorsHtml = (product.colors && product.colors.length > 0)
            ? `<div class="product-colors">${product.colors.map(c => {
                const stock = typeof c.stock === 'number' ? c.stock : null;
                const out = stock === 0;
                const stockLabel = stock !== null ? `<span class="color-stock${out ? ' out' : ''}">${out ? 'Esgotado' : stock + (stock === 1 ? ' disponível' : ' disponíveis')}</span>` : '';
                return `<div class="color-item${out ? ' out' : ''}" title="${c.name}${stock !== null ? ' — ' + (out ? 'esgotado' : stock + ' disponíveis') : ''}">
                    <span class="product-color-dot" style="background:${c.hex}${c.hex === '#ffffff' ? ';border-color:#ccc' : ''}"></span>
                    <span class="color-name">${c.name}</span>
                    ${stockLabel}
                </div>`;
              }).join('')}</div>`
            : '';

        const esgotadoBadge = esgotado ? '<div class="esgotado-badge">ESGOTADO</div>' : '';
        const cardClass = esgotado ? 'product-card esgotado' : 'product-card';
        const buttonHtml = esgotado
            ? `<button class="btn btn-secondary" disabled style="opacity:0.5;cursor:not-allowed;">Esgotado</button>`
            : `<button class="btn btn-secondary" onclick="addToCart('${safeName}', ${product.price})">Adicionar ao Carrinho</button>`;

        return `
        <div class="${cardClass}">
            ${esgotadoBadge}
            ${imageHtml}
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            ${colorsHtml}
            <p class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
            ${buttonHtml}
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
    if (!adminModal) return;
    adminModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateAdminProductsList();
    renderTokenSetup();
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
        itemsEl.innerHTML = cart.items.map(item => {
            const colorPart = item.color ? ` <span style="color:#6b7280;font-size:13px;">(${item.color})</span>` : '';
            return `
            <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eee;">
                <span>${item.name}${colorPart} x${item.quantity}</span>
                <strong>R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</strong>
            </div>`;
        }).join('');
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
        const colorPart = item.color ? ` — Cor: ${item.color}` : '';
        msg += `• ${item.name}${colorPart} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
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

    // Montar itens do Mercado Pago (incluindo cor no título)
    const mpItems = cart.items.map(item => ({
        title: item.color ? `${item.name} (${item.color})` : item.name,
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
