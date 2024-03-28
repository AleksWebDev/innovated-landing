$(document).ready(function() {
    const photoCarousel = $('#photo-carousel');

    photoCarousel.owlCarousel({   
        items: 2,
        dots: true,
        margin: 120,

        responsive : {
            1140 : {
                items: 1,
                margin: 0,
                dots: false,
            }
        }
    })
})