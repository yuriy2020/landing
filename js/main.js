$(function () {

    $('.slider__inner').slick({
        // настройки берем с сайта слика https://kenwheeler.github.io/slick/
        // ищем необходимые кнопки для настройки 
        nextArrow: '<button type="button" class="slick__btn slick-next"></button>',  //position: absolute;
        prevArrow: '<button type="button" class="slick__btn slick-prev"></button>',
        // там же настройки loop 
        infinite: false

    });

    // стилизация формы ввода (селект)
    $('select').styler({

    })


})
