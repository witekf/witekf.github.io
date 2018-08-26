let jsonPracownicy =
{
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

//jak wyciagnac Anke
console.log(jsonPracownicy.pracownicy[1].firstName);

//wyswietl w konsoli caly oboekt
console.log(jsonPracownicy);






jsonPracownicy.pracownicy.forEach(function(element, index) {
    console.log( 'imię: ' + element.firstName + ', nazwisko: ' + element.lastName + ', indeks: ' + index);



//otworz 3 nowe elementy (paragrafy), do pierwszego przypisz index, do drugiego imie, do trzeciego nazwisko. Nastepnie osadz te paragrafy na strone

    let paragraf1 = document.createElement('p');
    let paragraf2 = document.createElement('p');
    let paragraf3 = document.createElement('p');
    
    paragraf1.innerHTML = 'indeks: ' + index;
    paragraf2.innerHTML = element.firstName;
    paragraf3.innerHTML = element.lastName;
    
    
    document.body.appendChild(paragraf1);
    document.body.appendChild(paragraf2);
    document.body.appendChild(paragraf3);

})



//class Ksiazka {
//    constructor (autor, tytul, przeczytana) {
//        this.autor = autor;
//        if (przeczytana)...
//    }
//}