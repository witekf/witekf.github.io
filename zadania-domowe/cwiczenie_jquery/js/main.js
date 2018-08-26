//.ready()M - odpowiednik "DOMContentLoaded"
//$(element) = jQuery(element) zapis dla jQuery z dawnych wersji

$(document).ready(function() {
    $('#first').css('background-color', 'red').hide(3000).show('slow');
    
    console.log($('#first'));
})


