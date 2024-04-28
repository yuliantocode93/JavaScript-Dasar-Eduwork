// Function expression
var greet = function (name) {
  return "Hello, " + name + "!";
};

// Memanggil function expression
console.log(greet("John")); // Output: Hello, John!

// Function expression
var calculate = function (operation, num1, num2) {
  // Menentukan operasi yang dilakukan berdasarkan parameter 'operation'
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      // Memastikan tidak terjadi pembagian oleh nol
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error: Pembagian oleh nol!";
      }
    default:
      return "Error: Operasi tidak valid!";
  }
};

// Memanggil function expression
console.log(calculate("add", 5, 3)); // Output: 8
console.log(calculate("subtract", 10, 4)); // Output: 6
console.log(calculate("multiply", 2, 6)); // Output: 12
console.log(calculate("divide", 8, 2)); // Output: 4
console.log(calculate("divide", 6, 0)); // Output: Error: Pembagian oleh nol!
console.log(calculate("power", 3, 2)); // Output: Error: Operasi tidak valid!
