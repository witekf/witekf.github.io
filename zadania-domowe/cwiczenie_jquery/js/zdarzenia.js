$(document).ready(function() {
    
    $('a').click(function(e) {
        e.preventDefault();
        console.log(e);
        console.log('123');   
    })
    
//    metoda on() pozwala na obsluge >1 zdarzenia
    $('a').on({
        "click": function(e) {
            e.preventDefault();
            console.log('123');
        },
        "mouseover": function() {
        $(this).css('color', 'black');
        },
        "mouseout": function() {
        $(this).css('color', 'blue');    
        }
    })
})