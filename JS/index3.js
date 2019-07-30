// /* function fn() {
//   console.log(this.name);
// }
// var obj = { name: "Bibi" };
// var obj2 = { name: "Costi" };
// fn.bind(obj)();
// fn.call(obj);
// fn.bind(obj).call(obj2);
// fn.call(obj).Bibi(obj2);
//  */

//ca sa folosim if


function Atm(name, balance) {
  this.name = name;
  this.balance = balance;
  this.showDetails = function showDetails() {
  console.log(`My name is ${this.name} and I have ${this.balance} $`);
  };

  this.deposit = function deposit(amount) {
   return this.balance += amount;
  };
  this.withdraw = function withdraw(amount) { 
  return this.balance -= amount; 
  };  
}

var account = new Atm("WTA", 10000000);
console.log(account);
account.deposit(400);
account.showDetails();
account.withdraw(600);
account.showDetails();

var cont = {
  name: "Roxana",
  balance: 300000
};

account.showDetails.bind(cont)();
account.deposit.apply(cont,[567]);
account.showDetails.call(cont);
account.deposit.bind(cont);
account.showDetails.bind(cont)();
account.withdraw.bind(cont);
account.showDetails.bind(cont)();


// //const acc = new Account("wantsome");
// // const acc = new Account("wantsome", 1000);
// acc.deposit(200);
// acc.showDetails();
// acc.withdraw(400);
// acc.showDetails();

// // var obj = {
// //   name: "Saracu",
// //   balance: 100,
// // };

// // acc.showDetails.bind(obj)();
// // acc.deposit.apply(obj, [10]);
// // acc.showDetails.call(obj);



// exemplu pentru spread//
var obj1 = {
  name: "Saracu",
  age: 23,
};

var obj2 = {
  name: "Dana",
  lastName: "M",
};
var arr1 = [1, 4, 9];
var arr2 = [2, 3, 8];


//  //spread se aplica pentru obiecte si pentru array//
// cconsole.log(arr1.concat(arr2));
// console.log([].concat(arr1, arr2));
// console.log([...arr1, ...arr2]);
// console.log({ ...obj1, ...obj2 });

// console.log({ ...obj1, ...obj2 });
// console.log(Object.assign({}, obj1, obj2));
// console.log(obj1);

// console.log({ ...obj1, ...obj2 });
// //sau//
// console.log(Object.assign({}, obj1, obj2));


//exemplu pentru destructuring//

var obj2 = {
  firstName: "Dana",
  lastName: "M",
  age: 26,
  height: 180,
  kg: 70,
};

// var age = obj2.age;
// var kg = obj2.kg;
// var lastName = obj2.lastName;

var { age, kg, lastName } = obj2;

console.log(age, kg, lastName, obj2);
//*****************/ */
var {
  name: {
    firstName,
    details: { age: detailsAge },
  },
  age,
} = obj2;
console.log(detailsAge, age, firstName);


//exemplu pentru array-destructurare //
var arr1 = [1, 4, 9];
var arr2 = [2, 3, 8];

var [, , , b = 0] = arr1;
console.log(b);


////alt exemplu///
function useCeva(stare=0) {
  var state = stare;

  return [
    state,
    function(param) {
      console.log(state + param);
    },
  ];
}
//********//exemplu
var [stareaMea, logeazaStare] = useCeva(2000);
logeazaStare(2);
console.log(stareaMea);

///exemplu practica pentru rest// similar cu spread

var obj2 = {
  firstName: "Dana",
  lastName: "M",
  age: 200,
  height: 180,
  kg: 70,

};
var {firstName, ...rest} = obj2;
console.log(firstName, age, rest);
//rest este o conventie, poate fi trecut si orice altceva ca si mustar)
var { firstName, age, ...mustar } = obj2;

console.log(firstName, age, mustar);

///exemplu de practica pentru rest functii///
function fn(p1, p2, p3, p4, p5) {...}
fn(p1, p2, ...rest) {

};

exemplu
fn(3, 1, 7, 8, 0, -5, 10)
fn(1, -1)

//sau//
console.log(Math.min(3, 1, 7, 8, 0, -5, 10));
console.log(Math.min(1, -1));

//sau//

mfunction myMin() {
  console.log(...arguments);
}
myMin(3, 1, 7, 8, 0, -5, 10);
myMin(1, -1);


//sau//

///arrow function- exemplu///

var sum = (a, b) => {
  return a + b;
};

var car = {
  name: "Tesla",
  model: "Model S",
  showCar: function() {
    console.log(this.name + " " + this.model);
  },
  showCar2: () => console.log(this.name + " " + this.model),
};

car.showCar();
// car.showCar2();


***********

var matrix = {
  neo: 'Keanu Reeves',
  morpheus: 'Laurence Fishburne',
  trinity: 'Carie Anne',
  details: {
    year: 1999,
    rating: 8.7
  }
};
// var realeaseYear = matrix.details.year;
// var morpheus = matrix.morpheus;
// var neo = matrix.neo;

// console.log(morpheus, releaseYear);
var {...rest } = matrix;
console.log(rest);



console.log(k) console.log(matrix.neo[0]);

// ca si rezultat imi reda K

sau
var {
 neo: [, , , n]
}
console.log(neo);

arrow function

function sum(a, b) {
  console.log('Rezultatul adunarii este:');
  return a + b;
};
  sau 

let sumGras = (a,b) => {
  console.log('Rezultatul adunarii este:', this);
  return a + b;
};

alt exemplu

var obj = {
  fn: () => {
  }
};
  sau 
  var obj = {
  fn: function() {
    console.log(this);
  }
};
//
Bank account - exemplu

Solutie pentru a nu se multiplica cele 3 functii: definim functiile separat
//
function deposit () {}
function withdraw () {}
function showBalance () {}

//exemplu//

class BankAccount {
  constructor(name.initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -=amount;
  }
  showBalance() {
    console.log('Account name: $(this.name) \nBalance: $(this.balance) de RON');
  }
  static getBankBalance(){
    console.log('Ramai uimit!!!!\nBanca X are ratele cele mai bune!!!!');
  }
}
const acc = new BankAccount('Bogdan', 20000);
acc.deposit(2000);
BankAccount.getBankBalance();
acc.showBalance();

///Practice Object Create///
