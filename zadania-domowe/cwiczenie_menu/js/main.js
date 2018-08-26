//po kliknieciu w #red, #main-nav ma dostac klase affix

document.getElementById('red').addEventListener('click', function() {
    event.stopPropagation(); //uaktywnie funkcje przypisana tylko do elementu, blokuje funckje przypisane do rodzicow
    document.getElementById('main-nav').classList.toggle('affix');//toggle dodaje i zabiera klase po kliknieciu w red
})

//klikajac w body zawsze zabieram klase
document.body.addEventListener('click', function() {
    document.getElementById('main-nav').classList.remove('affix');
})

//po klikniecu w #main-nav uzywam stoppropagation zeby wylaczyc funckje rodzica (z body)

document.getElementById('main-nav').addEventListener('click',function(event) {
    event.stopPropagation();
})