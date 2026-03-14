// 生成星空
function createStars() {
  const starsBg = document.querySelector('.stars-bg');
  const starCount = 200;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() > 0.8 ? 3 : 2;
    if (size === 3) star.classList.add('large');
    
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    
    starsBg.appendChild(star);
  }
}

// 导航高亮
function highlightNavLink() {
  const sections = document.querySelectorAll('.content-section');
  const navLinks = document.querySelectorAll('.nav-link');
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
}

// 滚动显示/隐藏导航栏
let lastScrollTop = 0;
function toggleHeader() {
  const header = document.querySelector('.header');
  const currentScroll = window.scrollY;

  // 回到顶部 → 显示
  if (currentScroll <= 10) {
    header.classList.remove('hide');
  } 
  // 向下滚 → 隐藏
  else if (currentScroll > lastScrollTop) {
    header.classList.add('hide');
  } 
  // 向上滚 → 显示
  else {
    header.classList.remove('hide');
  }
  
  lastScrollTop = currentScroll;
}

// 加载执行
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  highlightNavLink();
});

// 滚动监听
window.addEventListener('scroll', () => {
  highlightNavLink();
  toggleHeader();
});
