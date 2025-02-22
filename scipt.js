// for navbar

const navul = document.getElementById('navul');
const closeMenu = document.getElementById('closeMenu');
const humburger = document.getElementById('humburger');

humburger.addEventListener('click', () => {
  navul.classList.add('activated');
})

closeMenu.addEventListener('click', () => {
  navul.classList.remove('activated');
})

const navbar = document.getElementById('navbar')

const heroDiv = document.querySelector('.heroDiv')
const heroImg = document.querySelector('.heroImg')

heroDiv.classList.add('active')
heroImg.classList.add('active')
//For Reveal

window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');

  let scrollTop = window.scrollY

  if(scrollTop > 100) {
    navbar.classList.add('activated');
  }
  else{
    navbar.classList.remove('activated');
  }

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top
    let revealPoint = 140;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }

  }

})