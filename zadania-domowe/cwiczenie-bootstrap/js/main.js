//console.log('123') - sprawdzamy czy skrypt mamy podpiety;
//uzyeamy jquiry bo i tak ja mamy, bootstrap dziala tylko z jquery
//dodaje lub odejmuje klase do nav przy przewijaniu/scrollowaniu okna - jest lub znika przezroczysta rameczka nav

$(document).ready(function() {
  $(window).scroll(function () {
      if($('#main-nav').outerHeight() < $(window).scrollTop()) {
          $('#main-nav').addClass('scrolled');
      } else {
          $('#main-nav').removeClass('scrolled');
      }
  })  
})