$(document).ready(function() {
    $('#pobierzDane').click(function() {
        $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data) {
        var p1 = $('<p>');
            console.log(p1);
        var p2 = $('<p>');
        var p3 = $('<p>');
            
        p1.text(data.userId);
        p2.text(data.userId);
        p3.text(data.userId);
            
        $('body').append(p1);
        $('body').append(p2);
        $('body').append(p3);
        }) 
    })
    
})

