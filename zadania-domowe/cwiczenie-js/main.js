"use strict";
function ekspresDoKawy(rodzaj, moneta) {
  
    let zrobionaKawa = "kawa";
    let reszta = moneta - 2;
  
    
    
    
    
    
    return {
      zrobionaKawa: zrobionaKawa,
      reszta: reszta
      }
}


let kawa = ekspresDoKawy(1, 5);
//bez returna w funkcji nie mozna przypisac do zmiannej jak powyzej


//console.log(kawa);


function klik() {
    console.log("klik");
}

let button = document.getElementById("button");
//button.onclick = klik;

button.addEventListener("click", klik);
//przypisujemy funkcje klik bez "()" czyli bez wywolania

//callback - funkcja, która wykonuje sie kiedy zaistnieja pewne sytuacje


//node.js to srodowisko uruchomieniowe dla javascriptu bez uzycia silnika przeglarki, czyli poza przeglarka


//tak jak java w windowsach jest srodowiskiem uruchomieniowym dla javy