"use strict"

// kaip pasiimti kintamaji is dizaino
document.getElementById("patvirtinti").addEventListener("click", function(){ // narsykle gaudo tam tikrus ivykius "click" paspaudimus
let kintamasis, kintamasis1; // apibrezti kintamieji
let suma;

// parseFloat pavercia i realuju skaiciu, sudeda skaicius i suma, o ne kaip teksta
// i viena input irasius 5, i kita 1 gausis 51, nes sudes kaip teksta
// nurodzius parseFloat gausis 6, sudes jau kaip skaiciu suma
// parasius teksta ismes NaN
// is string pakeista i float
kintamasis = parseFloat(document.getElementById("kintamasis").value); // paimtas kintamasis pagal ID .value laukelio reiksme, pasiimti jo reiksme 
kintamasis1 = parseFloat(document.getElementById("kintamasis1").value);

suma = kintamasis + kintamasis1;

console.log("kintamasis " + kintamasis);
console.log("kintamasis1 " + kintamasis1);
console.log(suma);
}
)

// 1 uzduotis sekundes i valandas, minutes ir sekundes
let sekundes = 25*3600 + 2 * 60 + 3; // 3600 sekundes 60 minutes ir sekundes
let valandos, minutes, lsekundes; // reikia gauti valandas minutes ir likusias sekundes

valandos = parseInt(sekundes/3600); // parseInt pavercia i sveika skaiciu, be kablelio // visos valandos sveikoji dalis
minutes = parseInt(sekundes/60); // visos minutes sveikoji dalis


// pvz sekundziu 3601 / 3601 - 60*60= 1sekunde, tas likutis kuris eina per kableli gautusi sekundziu formatu
lsekundes = sekundes - minutes * 60;  // likusios sekundes

// 25
// true
// 25 % 24 = 1, gaunasi 1 valanda nakties
if (valandos >= 24) {
    valandos = valandos % 24;
}


// 
if (minutes >= 60) {
    minutes = minutes % 60;
}

console.log(valandos);
console.log(minutes);
console.log(lsekundes);


// Parasyti script, kuris sugeneruotu 40 div elementu.  / sugeneruoti reiskias automatiskai sukurtu, zemiau po ciklu uzrasu

// Ciklai 
// for ciklas --> intervalas / nurodomas intervelas nuo kiek iki kiek vyksta 
// while --> vyksta kol // pvz kol buna true

let zingsniai = 0;

for (let i=0; i<40; i++) { // pradzioje apibreziamas ciklo kintamasis, dazniausiai nurodomas i ir dazniausiai prasideda nuo 0. i<40 iki kiek turi vykti sitas ciklas. i++ po kiekvieno ciklo ivykdymo i padideja vienetu
   
    let divElementas = document.createElement("div") // dokumento sukurtas divas, bet neatvaizduojamas
    divElementas.classList.add("div-dydis"); // prie div elemento klasiu saraso pridek div dydis
    divElementas.innerText = i+1; // div elemento vidinis tekstas / i+1 kad pradetu numeruoti nuo 1, o ne nuo nulio

    if ((i + 1) % 2 ==0 ) { // kas antras langelis zalias, 2 dalinasi is 2 be liekanos, tai jis bus zalias
        divElementas.classList.add("zalias"); // priskirta klase
    }

    document.querySelector(".container").append(divElementas); // pasirink dokumente elementa container ir prijunk (append) sukurta div elementa
   
   
    console.log(i);
    zingsniai++; // suskaiciavo kiek atlikta zingsniu

}
console.log("Zingsniai " + zingsniai);


// Isvesti n-zenklio skaiciaus visus skaitmenis atskirai ir suraskite ju suma. 

let skaicius, skaitmuo, suma;

suma = 0;
skaicius = 123456;

// 123456
// 123456 / 10 = 12345
// 12345 / 10 = 1234
// 1234 / 10 = 123
// 123 / 10 = 12
// 12 / 10 = 1
// 1 / 10 = 0

while (skaicius !=0) {
    skaitmuo = skaicius % 10;
    skaicius = parseInt(skaicius / 10);
    suma = suma + skaitmuo;
    console.log ("skaitmuo " + skaitmuo);
    

}
console.log ("suma " + suma);

