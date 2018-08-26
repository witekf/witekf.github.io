class Ksiazka {
  constructor (tytul, autor, przeczytana) {
  this.tytul = tytul;
  this.autor = autor;
  this.przeczytana = przeczytana
  }
  opiszKsiazke() {
        if(this.przeczytana) {
            return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana`
        } else {
           return `Książka am tytuł ${this.tytul}, autorem jest ${this.autor} i została nieprzeczytana`
        };
  }

}
let ksiazka1 = new Ksiazka ('Wiedźmin', 'Andrzej Sapkowski', true);
let ksiazka2 = new Ksiazka ('Osiołkiem', 'Andrzej Stasiuk', false);
let ksiazka3 = new Ksiazka ('Ojcobójca', 'Martin Pollak', false);
let ksiazka4 = new Ksiazka ('Polska Piastów', 'Paweł Jasienica', true);
let ksiazka5 = new Ksiazka ('Heban', 'Ryszard Kapuściński', true);



//console.log(ksiazka1);
//cnsole.log(ksiazka2);
//console.log(ksiazka3);


//console.log(ksiazka3.opiszKsiazke());

let arrayBook = [ksiazka1, ksiazka2, ksiazka3, ksiazka4, ksiazka5];

//console.log(arrayBook);

function iloscPrzeczytanych(arrayBook) {
    
    let counter = 0;
    
    for (let i=0; i<arrayBook.length; i++) {

        if (arrayBook[i].przeczytana) {
            counter = counter+1;
            console.log(arrayBook[i].opiszKsiazke());
         }
        
    }

    return `liczba książek przeczytanych to: ${counter}`;
        
}

console.log(iloscPrzeczytanych(arrayBook));