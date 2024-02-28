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

})