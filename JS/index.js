// var i=0;
// do {
//     console.log (i);
//     i++;
// } while (i<=100);

//Number - var a = 123;
// ● String - var a = “Wantsome” (putem folosi “” sau ‘ ‘) - orice valoare insotita de ghilimele va fi string
// ● Boolean - avem 2 valori ce reprezinta valoarea de tip bool - true (adevarat) si false (fals)
// ○ folosim boolean cand vrem sa facem o comparatie sau sa fim siguri ca ceva este true sau
// false
// ● Null - nu apartine niciunei valori de mai sus.
// ○ var a = null - inseamna ca variabila a este declarata goala, nu contine nimic in interior
// ● Undefined - aproximativ ca null-ul doar ca inseamna “valoarea nu a fost atribuita”
// ○ var a; (daca nu ii asignam o valoare va fi undefined)
// ● Object - este un tip special de date. Toate celelalte date numite mai sus sunt “primitive” pentru ca au
// // asignat un singur lucru (string, number, null, etc)//
// /afiseaza numarul 3/

// var numbers = [1, 2, 3, 4, 5];
// console.log (numbers[2]);

// la nume in array afisezi numarul care il are numele care vrei sa il afisezi, incepe de la 0...
// const arr = ["Maria", "Jan", "Emi", "Andrei", "Maria", "Cloe"];
// console.log (arr[1]);
// ========

// var numbers = [7, 4, 45, 3, 200, 67, 5, 10, 0];
// var min = Infinity;
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//         console.log ("min= , min);
//     }
// }
// =========

// var numbers = [14, 0, 24, 299, 2384, 2974];
// var min = Infinity;

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// =========
// var array = ["a cute feline", "best friend of man","gives us milk"];
// var dictionary = {
//     cat: "a cute feline",
//     dog: "best friend of man",
//     cow: "gives us milk",
//     "mustar de Tecuci": 10,
//      ":)": "smiley",
// };
// console.log(array[2]);
// console.log(dictionary.cat);
// console.log(dictionay["cat"]);
// console.log(dictionay["mustar de Tecuci"]);

// console.log(dictionay["smiley"]);
// // ======

function add(a, b) {
    const dif = a - b;
    console.log("dif=", dif);
}
add(4, 0);
add(7, 4);