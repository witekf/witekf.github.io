$(document).ready(function() {
    $('#show').click(function() {
//        $('#showHide').show(3000);
        $('#showHide').stop(true).slideDown(3000);
    })
    
    $('#hide').click(function() {
//        $('#showHide').hide(3000);
        $('#showHide').stop(true).slideUp(3000);
    })
    
    $('animacja').animate({
        "width": "300px",
        "height": "300px",
        "background-color": "red",
        "border-radius": "50%"
    }, 5000);
    
});