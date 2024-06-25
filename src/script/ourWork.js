

document.addEventListener('DOMContentLoaded', () => {

const slides = document.querySelectorAll('.slide');
const buttonPrev = document.querySelector('button#prev');
const buttonNext = document.querySelector('button#next');
const dot = document.querySelector('.dot-active');

let index = 0;

slides[0].style.opacity = 1;

buttonNext.addEventListener('click', () => {

  switch (index) {
    case 0:
      
      index = 1;
      
      gsap.to(dot, 0.5, {
        x: '1rem',
      });

      gsap.to(slides[0], 0.2, {
        opacity: 0
      })

      gsap.to(slides[1], 0.2, {
        opacity: 1,
      })
      
      break;
    

    case 1: 
      index = 2;

      gsap.to(dot, 0.5, {
        x: '2rem',
      })

      gsap.to(slides[1], 0.2, {
        opacity: 0,
      })

      gsap.to(slides[2], 0.2, {
        opacity: 1
      })
      break;

    case 2:
      index = 3;

      gsap.to(dot, 0.5, {
        x: '3rem',
      })

      gsap.to(slides[2], 0.2, {
        opacity: 0,
      })

      gsap.to(slides[3], 0.2, {
        opacity: 1
      })
      break;

    case 3:
      index = 4;

      gsap.to(dot, 0.5, {
        x: '4rem',
      })

      gsap.to(slides[3], 0.2, {
        opacity: 0,
      })

      gsap.to(slides[4], 0.2, {
        opacity: 1
      })
      break;

    case 4:
      index = 0;

      gsap.to(dot, 0.5, {
        x: '0rem',
      })

      gsap.to(slides[4], 0.2, {
        opacity: 0,
      })

      gsap.to(slides[0], 0.2, {
        opacity: 1
      })
      break;
  
  }


})

buttonPrev.addEventListener('click', () => {

  switch (index) {
    case 0:
      
      index = 4;
      
      gsap.to(dot, 0.5, {
        x: '4rem',
      });

      gsap.to(slides[0], 0.2, {
        opacity: 0
      })

      gsap.to(slides[4], 0.2, {
        opacity: 1,
      })
      
      break;
    

    case 1: 
      index = 0;

      gsap.to(dot, 0.5, {
        x: '0rem',
      })

      gsap.to(slides[1], 0.2, {
        opacity: 0,
      })

      gsap.to(slides[0], 0.2, {
        opacity: 1
      })
      break;

    case 2:
      index = 1;

      gsap.to(dot, 0.5, {
        x: '1rem',
      })

      gsap.to(slides[2], 0.2, {
        opacity: 0,
      })

      gsap.to(slides[1], 0.2, {
        opacity: 1
      })
      break;

    case 3:
      index = 2;

      gsap.to(dot, 0.5, {
        x: '2rem',
      })

      gsap.to(slides[3], 0.2, {
        opacity: 0,
      })

      gsap.to(slides[2], 0.2, {
        opacity: 1
      })
      break;

    case 4:
      index = 3;

      gsap.to(dot, 0.5, {
        x: '3rem',
      })

      gsap.to(slides[4], 0.2, {
        opacity: 0,
      })

      gsap.to(slides[3], 0.2, {
        opacity: 1
      })
      break;
  
  }


})




})