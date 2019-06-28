// function isPrime(n) {
//     if (n === 2) return true;
//     if (n <= 0 || n % 2 === 0 || n === 1) return false;
  
//     for (var i = 3; i <= Math.sqrt(n); i += 2) {
//       if (n % 2 === 0) return false;
//     }
  
//     return true;
//   }
  
//   function isPrime2(n) {
//     var prime = true;
  
//     if (n <= 1 || (n % 2 === 0 && n !== 2)) {
//       prime = false;
//     }
  
//     for (var i = 3; i <= Math.sqrt(n) && prime; i += 2) {
//       if (n % i === 0) {
//         prime = false;
//       }
//     }
  
//     if (prime) {
//       console.log(`${n} is prime`);
//     } else {
//       console.log(`${n} is not prime`);
//     }
//   }
  
//   function primeNumber(number) {
//     if (number > 1) {
//       for (var i = 2; i < number - 1; i++) {
//         var prime;
//         if (number % i === 0) {
//           prime = false;
//           console.log(number + " is NOT a prime number!");
//           break;
//         } else {
//           prime = true;
//         }
//       }
//       if (prime) {
//         console.log(number + " is a prime number.");
//       }
//     } else {
//       console.log(number + " is NOT a prime number!");
//     }
//     if (number === 2) {
//       console.log(number + " is a prime number.");
//     }
//   }
  
//   console.log("**** Test for -2 *****");
//   console.log(primeNumber(-2));
//   console.log("**** Test for 1 *****");
//   console.log(primeNumber(1));
//   console.log("**** Test for 2 *****");
//   console.log(primeNumber(2));
//   console.log("**** Test for 21 *****");
//   console.log(primeNumber(21));
//   console.log("**** Test for 23 *****");
//   console.log(primeNumber(23));
  
//   function repeatString(str, num) {
//     let result = "";
//     for (var i = 0; i < num; i++) {
//       result += str;
//     }
//     return result;
//   }
//   function truncate(str, max) {}
//   function splitWords(str) {}
  
//   truncate("Abcdef", 4); // "Abcd..."
//   truncate("Abcdef", 8); // "Abcdef"
  
//   // console.log(repeatString("ceva", 3));

//   *********************
//   function isPrime(n) {
//   }
//   if (n === 2) return true;
//   if (n <= 0 || n % 2 === 0 || n === 1) return false;

//   for (var i = 3; i <= Math.sqrt(n); i += 2) {
//     if (n % 2 === 0) return false;
//   }

//   return true;

// // *************
  ////

//   function is primeNumber (n) {
//       if (n <= 1) return false;
//       if (n === 2 ||  n % 2 === 0) return false;
//     //   for (var i=3; i<=n/2; i+=2) {
//         for (var i=3; i<=n/2; i+=2) {
//           if (n % i === 0) {
// return false;
//           }
//         }
//         return true;
//     }
    // console.log(isPrimenumber(21));
    // console.log("***Test for 21*****");
       
// 

// // &&&&
// exemplu

//  function repeatString(str,n) {
// // str = "Ioana" -
// // n = 5
//      var result = "";

//      for (var i = 0; i < n; i++) {
// result += str;
//      }
//      return result;
//  }
//  console.log(repeatString("Ioana", 5));

&&&&&&

//     // *var str = "Venit anual al unui angajat in dolari";*
//     calcul taxa corespunzatoare:
//      if A<30 000 $ return taxa 0%;
// if A  este intre 50 000$- 90 000$ return taxa 35%;
// if a > 100 000$ return taxa 40%; reprezentand 40.000

// var venit =function(salariu) {
// var taxa;
//     if(salariu <= 30000) {

// return "Taxa este de 0%";
//     }
//     if(salariu > 30000 && salariu < 50000) {
        
// return "Taxa este de 15%" . Taxa  este " + taxa;";
//     }
//     if(salariu > 50000 && salariu < 100000) {
//         taxa = salariu * 0.35;
        
// return "Taxa este de 35%" . Taxa  este " + taxa;";
//     }
//     taxa = salariu * 0.4;
// return "Taxa este de 40%" . Taxa  este " + taxa;";
//     }
// };


//  consile.log(venit(40 000));



//  ;;;;;;;;;;;;;;;;;;;;\

// gasiti un array cu 5 elemente, 
//  elementul " Gabriel Cotabita" folosind elementul indexof

// var cantareti = [ "Dua Lipa", "Gabriel  Cotabita", "Nu am", "The weekend", "Margareta Paslaru"];
// console.log(cantareti.indexof("Gabriel Cotabita"));
////functie  find off//

var cantareti = [
    { name: "Dua Lipa" },
    { name: "Gabriel Cotabita" },
    { name: "Nu Am" },
    { name: "The Weeknd" },
    { name: "Elene Gheorghe" },
    { name: "Vasile Seicaru" },
    { name: "Margareta Paslaru" },
  ];
  
  function greet(mesage) {
    console.log("fac ceva pe mesajul tau", mesage);
  }
  
  const result = cantareti.findIndex(function(element) {
    console.log("* -> ", element);
  
    return element.name === "The Weeknd";
  });
  
  console.log("Result = ", result);


  // sau ///
  
function findCotabita(element) {
    return element.name === "Gabriel Cotabita";
  }
  
  const result = cantareti.findIndex(findCotabita);
  
  console.log("Result = ", result);

  ////folosire functie filter///

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const result3 = numbers.filter(function(element) {
//   console.log("in filter => ", element);
//   return element % 2 === 0;
// });

function myFilter(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  console.log("Result 3 = ", result3);
  