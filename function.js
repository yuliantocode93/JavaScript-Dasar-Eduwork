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
// - jika hanya 1 parameter, tidak wajib dibungkus kurung ()
// - jika parameter lebih dari 1, wajib dibungkus kurung ()
// - jika tidak ada paramter, tetap wajib menggunakan kurung ()
// - konsep this akan berbeda ketika kita menggunakan arrow function
const panah1 = (a, b) => {
  document.write("arrow function: ");
  document.write(`${a} + ${b} = ${a + b}`);
  return a + b;
};

panah1(1, 2);

const panah = () => {
  console.log("arrow");
};

//* 4. function constructor
const konstruktor = new Function('console.log("constructor")'); //* tidak disarankan dipakai karena tidak menggunakan this

//* 5. this keyword DOM event

document.getElementById("btn").innerHTML = `
        <h1>Hello btn</h1>
        <button id="coba2">click me :) </button>
        `;

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log(this); // window object bawaan browser
});
