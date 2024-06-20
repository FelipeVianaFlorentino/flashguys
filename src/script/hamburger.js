document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const bar1 = document.querySelector('.bar1');
    const bar2 = document.querySelector('.bar2');
    const bar3 = document.querySelector('.bar3');
    
    const menu = document.querySelector('.menu-mobile');
    
    
    
    hamburger.addEventListener('click', () => {
        if(hamburger.classList.contains('inactive')) {
            bar1.classList.add('changeBar1')
            bar2.classList.add('changeBar2')
            bar3.classList.add('changeBar3')
            hamburger.classList.remove('inactive')
            hamburger.classList.add('active')
            menu.style.transform = `translate(0)`
        } else {
            bar1.classList.remove('changeBar1')
            bar2.classList.remove('changeBar2')
            bar3.classList.remove('changeBar3')
            hamburger.classList.remove('active')
            hamburger.classList.add('inactive') 
            menu.style.transform = `translate(-100%)`   
        }
    })    
})