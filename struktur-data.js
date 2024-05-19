//todo: Structured Data Type

//* Variabel

let names = "Rizki"; //string
let age = 20; //number
let high = 170.5; // floating
let isMarried = false; //boolean
let hobbies = ["coding", "reading"]; //array
let person = { name: "Rizki", age: 20 }; //objects

names = "eko";
console.log(`hello ${names}, your age is ${age} and you are ${isMarried ? "married" : "single"} and your hobbies are ${hobbies} and your person is ${person}`);

//* Object Data Type
let person1 = {
  name: "eko",
  age: 20,
  hobbies: ["coding", "reading"],
  sayhello: function () {
    console.log(`hello ${this.name}`); // this
    console.log(this); // this
  },
};

person1.sayhello(); // hello eko, your age is 20 and you are single and your hobbies are ['coding', 'reading'] and your person is { name: 'eko', age: 20 }

console.log(22 + "oke"); // 22oke

//* Operator Arithmatika
let angka = 10;
console.log(angka ** 2); // kuadrat = 100
console.log(angka % 4); // modulus sisa bagi = 2
console.log(angka / 4); // pembagian = 2.5
console.log(angka); // 10
console.log(++angka); // 11
console.log(--angka); // 10

//* Operator Perbandingan

let angka1 = 10;
let angka2 = 20;
let angka3 = 2;
angka3 = angka3 + angka1;
console.log(`angka3 = ${angka3}`); // angka3 = 12
angka3 += angka1;
console.log(`angka3 ke2 = ${angka3}`); // angka3 ke2 = 22
console.log(angka1 < angka2); // true
console.log(angka1 > angka2); // false

//* Ternary Operator
let nilai1 = 90;
let nilai2 = 60;

let lulus1 = nilai1 > 70 ? "lulus" : "tidak lulus";
let lulus2 = nilai2 >= 70 ? "lulus" : "tidak lulus";

console.log(`lulus1 = ${lulus1}`); // lulus
console.log(`lulus2 = ${lulus2}`); // tidak lulus

//* Operator Logika

let x = 10;
let y = 20;

console.log(x < y && x > y); // and
console.log(x < y || x > y); // or
console.log(x < y || x < y); // or
console.log(!(x < y || x < y)); // not

//* Operator Spesial

console.log(!!(x < y || x < y)); // true
console.log(!!(x < y && x > y)); // false
console.log(!!(x < y && x < y)); // false
console.log(!!(x < y || x < y)); // true

//* Operator Logika

let a = 10;
let b = 20;

console.log(a > b ? "a > b" : a < b ? "a < b" : "a = b"); // a < b
console.log(a === b ? "a = b" : a < b ? "a < b" : "a > b"); // a < b
console.log(a === b ? "a = b" : a > b ? "a > b" : "a < b"); // a < b
console.log(a < b ? "a < b" : a === b ? "a = b" : "a > b"); // a < b

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
