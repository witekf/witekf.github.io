$(document).ready(function () {


    function ajaxBitCoin() {
        var currentBuyPrice = parseFloat($('#buy').html());
        var currentSellPrice = parseFloat($('#sell').html());
        $.getJSON('https://blockchain.info/pl/ticker', function (data) {

            $('#buy').html(parseFloat(data.PLN.buy));
            $('#sell').html(parseFloat(data.PLN.sell));

            if (currentBuyPrice > parseFloat(data.PLN.buy)) {
                $('#buy-arrow').removeAttr('class').addClass('fas fa-arrow-down').css('color', 'red');
            } else if (currentBuyPrice < parseFloat(data.PLN.buy)) {
                $('#buy-arrow').removeAttr('class').addClass('fas fa-arrow-up').css('color', 'green');
            } else {
                $('#buy-arrow').removeAttr('class').addClass('far fa-minus-square').css('color', 'blue');
            }

            if (currentSellPrice > parseFloat(data.PLN.sell)) {
                $('#sell-arrow').removeAttr('class').addClass('fas fa-arrow-down').css('color', 'red');
            } else if (currentSellPrice < parseFloat(data.PLN.buy)) {
                $('#sell-arrow').removeAttr('class').addClass('fas fa-arrow-up').css('color', 'green');
            } else {
                $('#sell-arrow').removeAttr('class').addClass('far fa-minus-square').css('color', 'blue');
            }
        })
        console.log('odswiezono');
    }

    setInterval(ajaxBitCoin, 5000);

})
