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


