// ===== SECTIONS & NAVBAR =====
const sections = document.querySelectorAll('.section');
const navButtons = document.querySelectorAll('.nav-btn');

function showSection(id) {
  sections.forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

// Navbar buttons
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showSection(btn.dataset.target);
  });
});

// ===== JOIN SERVER =====
const joinBtn = document.getElementById('joinServer');
const copiedMsg = document.getElementById('copiedMsg');

joinBtn.addEventListener('click', () => {
  const serverIP = 'sisumaatwo.falixsrv.me';
  navigator.clipboard.writeText(serverIP);
  copiedMsg.style.opacity = 1;
  setTimeout(() => copiedMsg.style.opacity = 0, 1200);
});

// ===== DISCORD NAV =====
const discordBtn = document.getElementById('discordBtn');
const backHome = document.getElementById('backHome');

discordBtn.addEventListener('click', () => {
  navButtons.forEach(b => b.classList.remove('active'));
  showSection('discord');
});

backHome.addEventListener('click', () => {
  showSection('home');
  navButtons.forEach(b => b.classList.remove('active'));
  navButtons[0].classList.add('active'); // Home aktiivseks
});

// ===== CUSTOM CURSOR =====
const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top = mouseY + 'px';
});

function animateRing() {
  ringX += (mouseX - ringX - 15) * 0.15;
  ringY += (mouseY - ringY - 15) * 0.15;
  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// ===== CARD HOVER EFFECTS =====
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.boxShadow = '0 0 30px rgba(0,200,255,0.7)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
  });
});
