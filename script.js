// !! Dragos Matteo 20.05.2021 OLX 

const navbar =  document.querySelector('.section--1');
let sticky = navbar.getBoundingClientRect().height;


// !! Sticky navigation
const navbarScroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
};

window.onscroll = navbarScroll;