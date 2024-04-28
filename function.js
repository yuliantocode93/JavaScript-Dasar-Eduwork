// 4. anonymous function
const anonymous = function (a, b) {
  alert(`${a} + ${b} = ${a + b}`);
};

// 1. function declaration
function deklarasi() {
  console.log("declaration");
}

// 2. function expression
const ekspresi = function () {
  // anonymous function
  console.log("expression");
};

// 3. arrow function
const panah = () => {
  console.log("arrow");
};

// 4. function constructor
const konstruktor = new Function('console.log("constructor")');

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log(this);
});
