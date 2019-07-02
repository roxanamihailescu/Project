// {
//     var b = 1;
//   }
  
//   console.log(b);
  
//   var a = 1;
  
//   function foo() {
//     var a = 10;
//     console.log(a);
//   }
  
//   // console.log(a);
//   // foo();
//   var i = 10;
//   // for (var i = 0; i < 5; i++) {
//   // 
//   // }
  
//   // console.log(i);
//   //
// //   rezultat 5
// // //   daca vrem sa fie 10 schimbam var cu let si atunci rezultatul va fi de la 0 la 4 si i din global scope 10
// si adaugam si un console.log(i); in interior
// var i = 10;
//   // for (var i = 0; i < 5; i++) {
//   // console.log(i);
//   // }
  
//   // console.log(i);

// ****
//   if ( 3 > 2) {
//       var x = 2;
//       let y = 2;
//   }
  
//   console.log(x); //2
//   console.log(y); // error reference

//   *****

// function testFn() {
//  var x = 2;
//  let y = 3;
//   }

// testFn()
// //console.log(x);
// // console.log(y);

// // ****
// alt exemplu

// const arr = [];
// for (let i = 0; i < 2; i++) {
//   arr.push(i);
// }

// console.log(arr);

// rezultatul este [0,1]

// alt exemplu

// const arr = [];
// // for (var i = 0; i < 2; i++) {
// //   arr.push(i);
// // }

// // console.log(arr);

// // rezultatul este [0,1]

// alt exemplu

// function testFn() {
// var x = 2;
// for (var i = 0; i < 5; i++) {
// let y = 3;
//  }
    
// console.log(x);
// console.log(y);

// }
//  testFn();

//  pentru linia 85 ne da eroare ca nu are valoare

// alt exemplu

// var x = 10;
// function testFn() {
//     for (var i =0; i < 1; i++) {
//         var y = 3;
//         if (y === 3) {
//             var x = 2
//         }
//     }
//     console.log(x);
//     console.log(y);
       
// }

// console.log(x);
// testFn();


//Functii in interiorul unei functii//
//  exemplu la closure

//  creati o functie numita makediff care primeste un argument si returneaza o alta functie

//  const Diff10 = makeDiff(10)
//  Console.log(diff10(3)) rezulta 7
//  Console.log(diff10(5)) rezulta 5
///
// asta este functia standard
 function makeDiff(d) {

    function inner(s) {
        return d - s;
    }
     return inner;
 }


const diff10 = makeDiff(10);
Console.log(diff10(3));
// rezultat 7
// sau
// console.log(makeDiff(10)(3));
// rezultat 7