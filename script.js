function mostrarConteudo() {
  const conteudo = document.getElementById('conteudo');
  const avatar = document.getElementById('avatar');
  
  avatar.classList.remove('floating');
  avatar.classList.add('animate-pulse');

  if (conteudo) {
    conteudo.classList.remove("hidden");
    setTimeout(() => {
      conteudo.classList.add("opacity-100");
      conteudo.classList.remove("opacity-0");
      conteudo.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }
  
  setTimeout(() => {
    conteudo.classList.remove('hidden');
    setTimeout(() => {
      conteudo.classList.add('opacity-100');
      const progressBars = document.querySelectorAll('.progress-bar');
      progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 300);
      });
    }, 50);
  }, 500);
}

window.onload = function () {
  const sheets = document.querySelectorAll(".sheet");
  const prevBtn = document.getElementById("btn-prev");
  const nextBtn = document.getElementById("btn-next");
  let currentIndex = 0;

  function showSlide(index) {
    sheets.forEach((sheet, i) => {
      sheet.classList.remove("active");
      if (i === index) sheet.classList.add("active");
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + sheets.length) % sheets.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % sheets.length;
    showSlide(currentIndex);
  });
  showSlide(currentIndex);
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('hidden', i !== index);
  });
}

document.getElementById('btn-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

document.getElementById('btn-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);

document.addEventListener('DOMContentLoaded', function() {
  if (projects.length > 0) {
    showProject(0);
    setupCarousel();
  }
});

window.addEventListener('load', function() {
  showProject(0);
  setupCarousel();
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

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('shadow-lg');
    navbar.classList.add('bg-blue-950/90');
  } else {
    navbar.classList.remove('shadow-lg');
    navbar.classList.remove('bg-blue-950/90');
  }
});

projects.forEach(project => {
  project.addEventListener('transitionend', () => {
    if (project.classList.contains('active')) {
      const links = project.querySelectorAll('a');
      links.forEach(link => {
        link.style.pointerEvents = 'auto';
      });
    } else {
      const links = project.querySelectorAll('a');
      links.forEach(link => {
        link.style.pointerEvents = 'none';
      });
    }
  });
});