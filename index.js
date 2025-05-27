
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let isOpen = false;

toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    mobileMenu.style.display = isOpen ? 'flex' : 'none';
    toggleBtn.textContent = isOpen ? '✕' : '☰';
});

const products = [
    {
        title: 'Móveis Planejados',
        description: 'Soluções personalizadas para cada ambiente da sua casa',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=500&h=400&fit=crop',
        features: ['Cozinhas', 'Closets', 'Home Office', 'Quartos']
    },
    {
        title: 'Design de Interiores',
        description: 'Projetos completos com nossa equipe especializada',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=500&h=400&fit=crop',
        features: ['Projeto 3D', 'Acompanhamento', 'Decoração', 'Iluminação']
    },
    {
        title: 'Móveis Exclusivos',
        description: 'Peças únicas criadas especialmente para você',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=500&h=400&fit=crop',
        features: ['Madeira Nobre', 'Design Único', 'Artesanal', 'Sustentável']
    }
];

const grid = document.getElementById('product-grid');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="card-content">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="features">
                ${product.features.map(f => `
                    <div class="feature">
                    <div class="feature-dot"></div>${f}
                    </div>
                `).join('')}
                </div>
                <a href="#" class="btn">
                Saiba Mais
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
            </div>
            `;
    grid.appendChild(card);
});

const stats = [
    { icon: '🏆', number: '15+', label: 'Anos de Experiência' },
    { icon: '👥', number: '500+', label: 'Clientes Satisfeitos' },
    { icon: '⏰', number: '1000+', label: 'Projetos Entregues' },
    { icon: '❤️', number: '98%', label: 'Taxa de Satisfação' }
];

const statsContainer = document.querySelector('.stats');

stats.forEach(stat => {
    const card = document.createElement('div');
    card.className = 'stat-card';

    card.innerHTML = `
    <div class="stat-icon">${stat.icon}</div>
    <div class="stat-number">${stat.number}</div>
    <div class="stat-label">${stat.label}</div>
  `;

    statsContainer.appendChild(card);
});