function mostrarConteudo() {
    const conteudo = document.getElementById('conteudo');
    const avatar = document.getElementById('avatar');
  
    avatar.classList.remove('floating');
    avatar.classList.add('animate-pulse');
  }
  
  window.onload = function () {
    const sheets = document.querySelectorAll(".sheet");
    const prevBtn = document.getElementById("btn-prev");
    const nextBtn = document.getElementById("btn-next");
    let currentIndex = 0;
  
    function showSheet(index) {
      sheets.forEach((sheet, i) => {
        sheet.classList.toggle("active", i === index);
      });
    }
  
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + sheets.length) % sheets.length;
      showSheet(currentIndex);
    });
  
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % sheets.length;
      showSheet(currentIndex);
    });
  
    showSheet(currentIndex);
  };
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  const slides = document.querySelectorAll('.slide');
  let currentSlideIndex = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('hidden', i !== index);
    });
  }
  
  document.getElementById('btn-prev').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  });
  
  document.getElementById('btn-next').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  });
  
  showSlide(currentSlideIndex);
  
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof projects !== 'undefined' && projects.length > 0) {
      showProject(0);
      setupCarousel();
    }
  });
  
  window.addEventListener('load', function () {
    if (typeof projects !== 'undefined' && projects.length > 0) {
      showProject(0);
      setupCarousel();
    }
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 300);
        });
      }
    });
  }, { threshold: 0.5 });
  
  const habilidadesSection = document.getElementById('habilidades');
  if (habilidadesSection) {
    observer.observe(habilidadesSection);
  }
  
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('shadow-lg', 'bg-blue-950/90');
    } else {
      navbar.classList.remove('shadow-lg', 'bg-blue-950/90');
    }
  });
  
  if (typeof projects !== 'undefined') {
    projects.forEach(project => {
      project.addEventListener('transitionend', () => {
        const links = project.querySelectorAll('a');
        const enable = project.classList.contains('active');
        links.forEach(link => {
          link.style.pointerEvents = enable ? 'auto' : 'none';
        });
      });
    });
  }
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    grabCursor: true,
  });
