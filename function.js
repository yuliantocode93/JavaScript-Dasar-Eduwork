// 0. anonymous function
const anonymous = function (a, b) {
  alert(`${a} + ${b} = ${a + b}`); // alert menggunakan browser bawaan browser
};

// 1. function declaration
function deklarasi() {
  console.log("declaration"); // console.log menggunakan browser bawaan browser
}

// 2. function expression
const ekspresi = function () {
  // anonymous function
  console.log("expression"); // console.log menggunakan browser bawaan browser
};

// 3. arrow function
const panah = () => {
  console.log("arrow"); // console.log menggunakan browser bawaan browser
};

// 4. function constructor
const konstruktor = new Function('console.log("constructor")'); // tidak disarankan karena tidak menggunakan this

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log(this); // window object bawaan browser
});
