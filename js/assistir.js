$(document).ready(function(){
    $('#container-slider').slick({
        autoplay: false,
        arrows: false,
        dots: true
    });
});

$('#container-slider').on("afterChange", function() {
    numeroTemporada();
})

// Pra atualizar o numero da temporada...
function numeroTemporada() {
    
    var slideTemporada = $('.slick-current').attr("data-slick-index");

    slideTemporada = parseInt(slideTemporada);

    slideTemporada += 1;

    $('#texto-superior').html(`${slideTemporada}ª TEMPORADA`);
}