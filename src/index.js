import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<button id="coba">click me :) </button>
`;

/*
 *--------------------------------------------------
 * PARAMETER
 *--------------------------------------------------
 */
// parameter di fungsi deklarasi
function tambah(a, b) {
  alert(`${a} + ${b} = ${a + b}`);
}

// 2. function expression
const kali = function (a, b) {
  alert(`${a} * ${b} = ${a * b}`);
};

// 3. arrow function
// - jika hanya 1 parameter, tidak wajib dibungkus kurung ()
// - jika parameter lebih dari 1, wajib dibungkus kurung ()
// - jika tidak ada paramter, tetap wajib menggunakan kurung ()
// - konsep this akan berbeda ketika kita menggunakan arrow function
// const panah = () => {
//   alert(`nilai adalah ${a}`);
// };

const arrow = () => ({ name: "edi" });

let tes = arrow();

document.getElementById("coba").onclick = () => {
  console.log(tes);
};
