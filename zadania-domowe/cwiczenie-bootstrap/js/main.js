//console.log('123') - sprawdzamy czy skrypt mamy podpiety;
//uzyeamy jquiry bo i tak ja mamy, bootstrap dziala tylko z jquery
//dodaje lub odejmuje klase do nav przy przewijaniu/scrollowaniu okna - jest lub znika przezroczysta rameczka nav

$(document).ready(function() {
    ifScrolled();   
    
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } 
  });
});
    

$(window).scroll(function () {
    ifScrolled();
});


function ifScrolled() {
    if ($(window).width() > 991) {
        if($('#main-nav').outerHeight() < $(window).scrollTop()) {
          $('#main-nav').addClass('scrolled');
      } else {
          $('#main-nav').removeClass('scrolled');
      }
    }
}