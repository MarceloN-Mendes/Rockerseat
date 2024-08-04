/* Abre e fecha o menu quando clica no icone: hamburuer e x*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*Mudar o header da pagina quando der scroll*/
const header = document.querySelector('header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

/*Testimonials carousel slider swiper*/

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperrSize: true
    }
  }
})

/*ScrollReveal: Mostrar elementos quando der scroll na pagina*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text,  
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links  
  footer .brand, footer .social

  
  `,
  { interval: 100 }
)

/*Botão voltar para o topo*/
const backToTopButton = document.querySelector('.back-to-top')
const iconSun = document.querySelector('.icon-sun')
const iconMoon = document.querySelector('.icon-moon')

function backToTop() {
  if (window.scrollY >= 348) {
    backToTopButton.classList.add('show')
    iconSun.classList.add('show')
    iconMoon.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
    iconSun.classList.remove('show')
    iconMoon.classList.remove('show')
  }
}

/*Menu aivo conforme a seção visivel da pagina*/
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionid = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionid + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionid + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

/* Dark-Mode */

function darkMode() {
  document.body.classList.toggle('dark-mode')
}
