$(document).ready (function() {
//    metody .text() i html () - kiedy nie ustawiamy parametrow to pobieramy wartosci z selectora jezeli ustawiamy parametr, to ustawiamy wartosci w selektorze
    console.log($('#first').text());
    
    console.log($('#first').html());
    
//    text i html zastepuja
    $('#first').text('123456');
    $('#first').html('<p>123456</p>');
    
//    dodajmy span do srodka p - element liniowy; metody dodajace tresci .append(), .prepend(), .before(), .after() - mozna wstawiac znaczniki html
    
    $('#paragraf').append('<span> dodany motodą append </span>');
    $('#paragraf').prepend('<span> dodany motodą prepend </span>');
    $('#paragraf').before('<p> dodany motodą before </p>');
    $('#paragraf').after('<p> dodany motodą after </p>');
    
    
//    metody empty() i remove()
//    empty usuwa tresc wewn znacznika oraz zagniezdzone inne znacznika
//    remove usuwa tresc wewn znacznika wraz ze znacznikiem
    
//    $('#paragraf').empty();
    $('#paragraf').remove();
    
    
//    metoda css, czyli manipulacja w class
//    zmieniając jedną wartosc, mozna uzyc ('wlasicwosc', 'wartosc')
//    zmieniając wiecej niz 1 wartosc, nalezy uzyc obiektu
    $('#first').css({
        "width": "20%",
        "height": "150px",
        "background-color": "violet"
    });
    
    
    
//    metoda .val()
//    bez parametru - targetuje pierwsze dopasowanie
    console.log($('#formularz input').val());
    
    $('#formularz input').val('lorem');
        
});

 $(window).scroll(function() {
        console.log($(this).scrollTop());
        console.log($('#main-nav').outerHeight());
     
     
     if($(this).scrollTop() >= $('#main-nav').outerHeight()) {
         $('#main-nav').addClass('affix');
     } else {
         $('#main-nav').removeClass('affix');
     }
});
    





