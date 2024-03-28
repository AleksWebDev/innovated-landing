window.addEventListener('DOMContentLoaded', function(){

    /* Paralax mouse moving */

    let plxScene = document.querySelector('.header__content-row');
    let plxItem = document.querySelectorAll('.parallax-img');
    
    
    plxScene.addEventListener('mousemove', function(e){
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
    
    
            plxItem.forEach(item =>{
                item.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
            })
    })

    const menuBtn = document.querySelector('.nav__menu');
    const mobileMenu = document.querySelector('.mobile__menu');
    const body = document.body;

    menuBtn.addEventListener('click', function(){
        if(menuBtn.classList.contains('nav__icon-active')){
            menuBtn.classList.remove('nav__icon-active');
            mobileMenu.classList.remove('open');
            body.classList.remove('lock')
        }else{
            menuBtn.classList.add('nav__icon-active');
            mobileMenu.classList.add('open');
            body.classList.add('lock');
        }
    })

    /* histogram */
        
    const histogramBar = document.querySelectorAll('.histogram-item__bar');

    histogramBar.forEach(item => {
        const histogramLine = item.querySelector('.histogram-item__bar-line');
        const histogramVal = item.querySelector('.histogram-item__bar-val').textContent;
            
        histogramLine.style.width = histogramVal;
    })
})


$(document).ready(function() {
    const photoCarousel = $('#photo-carousel');

    photoCarousel.owlCarousel({   

        /* items: 2, */
        dots: true,
        margin: 120,

        responsive : {
            0: {
                items: 1,
            },

            1140: {
                items: 2,
            }
        }

    })
})