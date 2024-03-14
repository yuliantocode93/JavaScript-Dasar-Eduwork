//todo: Structured Data Type

//* Variabel

let names = "Rizki"; //string
let age = 20; //number
let high = 170.5; // floating
let isMarried = false; //boolean
let hobbies = ["coding", "reading"]; //array
let person = { name: "Rizki", age: 20 }; //object

names = "eko";
console.log(`hello ${names}, your age is ${age} and you are ${isMarried ? "married" : "single"} and your hobbies are ${hobbies} and your person is ${person}`);

//* Object Data Type
let person1 = {
  name: "eko",
  age: 20,
  hobbies: ["coding", "reading"],
  sayhello: function () {
    console.log(`hello ${this.name}`);
    console.log(this);
  },
};

person1.sayhello();

console.log(22 + "oke");

//* Operator Arithmatika
let angka = 10;
console.log(angka ** 2);
console.log(angka % 4); // sisa bagi
console.log(angka / 4); // pembagian
console.log(angka); // 10
console.log(++angka); // 11
console.log(--angka); // 10

//* Ternary Operator
let nilai1 = 90;
let nilai2 = 60;

let lulus1 = nilai1 > 70 ? "lulus" : "tidak lulus";
let lulus2 = nilai2 >= 70 ? "lulus" : "tidak lulus";

console.log(lulus2);

//* Operator Logika

let x = 10;
let y = 20;

console.log(x < y && x > y); // and
console.log(x < y || x > y); // or
console.log(x < y || x < y); // or
console.log(!(x < y || x < y)); // not

//* Type Of

// let nama = "eko";
// let age = 20;
// let isMarried = false;
// let hobbies = ["coding", "reading"];
// let person = {
//   name: "eko",
// };
// console.log(typeof nama);
// console.log(typeof null);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof hobbies);
// console.log(typeof person);
