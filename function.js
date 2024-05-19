//* 0. anonymous function = function tanpa nama
const anonymous = function (a, b) {
  alert(`${a} + ${b} = ${a + b}`); // alert menggunakan browser bawaan browser
};

//* 1. function declaration
function deklarasi() {
  console.log("declaration");
}

//* 2. function expression
const ekspresi = function () {
  // anonymous function
  console.log("expression");
};

//* 3. arrow function
const panah = () => {
  console.log("arrow");
};

//* 4. function constructor
const konstruktor = new Function('console.log("constructor")'); // tidak disarankan karena tidak menggunakan this

//* 5. this keyword
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log(this); // window object bawaan browser
});
