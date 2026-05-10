// ─── Products Data ───
const products = [
  { name: 'Leather Magnetic Planner', price: 606, old: 750, icon: '📓', badge: 'Popular' },
  { name: 'Koblico Pen Stand', price: 88, old: null, icon: '✏️', badge: null },
  { name: 'Casio Calculator', price: 500, old: 620, icon: '🧮', badge: 'Sale' },
  { name: 'Classmate Spiral Notebook 100Pg', price: 100, old: null, icon: '📒', badge: null },
  { name: 'Parker Exacta Highlighters 70Pc', price: 330, old: 400, icon: '🖊️', badge: 'Sale' },
  { name: 'Parker Pen', price: 800, old: null, icon: '🖋️', badge: 'Premium' },
  { name: 'Document Clips (Pack of 10)', price: 45, old: null, icon: '📎', badge: null },
  { name: 'Geometry Box Set', price: 120, old: 150, icon: '📐', badge: null },
];

// ─── Render Products ───
function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = products.map((p, i) => `
    <div class="product-card fade-up" style="animation-delay:${i * 0.07}s">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      <div class="product-img">${p.icon}</div>
      <div class="product-body">
        <h4>${p.name}</h4>
        <div class="product-footer">
          <div>
            <span class="price">₹${p.price}</span>
            ${p.old ? `<span class="old-price">₹${p.old}</span>` : ''}
          </div>
          <button class="add-btn" onclick="addToCart('${p.name}')">+ Add</button>
        </div>
      </div>
    </div>
  `).join('');
  observeFadeUps();
}

// ─── Toast Notification ───
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function addToCart(name) {
  showToast(`🛒 "${name}" added to cart!`);
}

// ─── Contact Form Submit ───
function submitForm(e) {
  e.preventDefault();
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
  showToast('✅ Message sent successfully!');
}

// ─── Navbar Scroll Effect ───
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 30);

  const btn = document.getElementById('scroll-top');
  btn.classList.toggle('show', window.scrollY > 400);
});

// ─── Hamburger Menu ───
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('open');
});

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

// ─── Smooth Scroll Helper ───
function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ─── Intersection Observer (Fade-Up Animations) ───
function observeFadeUps() {
  const els = document.querySelectorAll('.fade-up:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  observeFadeUps();
});