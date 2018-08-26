$(document).ready(function() {
//.each odpowiednik petli w JS
//    nie wszystkie metody jquery moga wykonywac sie na grupach elementow, w tym przypadku musimy uzyc "each()" i wyciagnac pojedyncze elementy
    
    $('.list-item').each(function(index, element){
//        console.log(element);
        $(this).find('a').css('color', 'red'));
        
    })
})