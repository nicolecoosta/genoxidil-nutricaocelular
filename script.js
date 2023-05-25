//hamburguer
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "./img/HAMBURGUER.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "./img/close-hamburguer.svg";
  }
}

btnMobile.addEventListener(`click`, toggleMenu);

//scroll suave para links internos
const linksInternos = document.querySelectorAll(`.js-menu a[href^="#"]`);

function scrollToSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  const topo = section.offsetTop;

  window.scrollTo(0, topo);
}

linksInternos.forEach((link) => {
  link.addEventListener(`click`, scrollToSection);
});


