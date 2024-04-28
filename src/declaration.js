// Deklarasi fungsi tanpa parameter
function greet() {
  console.log("Halo, selamat datang!");
}

// Deklarasi fungsi dengan parameter
function greetWithName(name) {
  console.log("Halo, " + name + "! Selamat datang kembali.");
}

// Deklarasi fungsi yang mengembalikan nilai
function multiply(a, b) {
  return a * b;
}

// Deklarasi fungsi dengan nilai default parameter
function greetWithDefault(name = "Teman") {
  console.log("Halo, " + name + "! Selamat datang kembali.");
}

// Deklarasi fungsi dengan rest parameter
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

// Deklarasi fungsi dengan ekspresi arrow function
const square = (x) => {
  return x * x;
};

// Contoh pemanggilan fungsi-fungsi di atas
greet(); // Output: Halo, selamat datang!
greetWithName("John"); // Output: Halo, John! Selamat datang kembali.
console.log(multiply(5, 3)); // Output: 15
greetWithDefault(); // Output: Halo, Teman! Selamat datang kembali.
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(square(4)); // Output: 16
