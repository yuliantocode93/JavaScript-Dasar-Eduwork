// Contoh 1: Arrow function tanpa parameter
const greeting = () => {
  return "Hello, world!";
};

console.log(greeting()); // Output: Hello, world!

// Contoh 2: Arrow function dengan satu parameter
const double = (x) => {
  return x * 2;
};

console.log(double(5)); // Output: 10

// Contoh 3: Arrow function dengan beberapa parameter
const add = (a, b) => {
  return a + b;
};

console.log(add(3, 4)); // Output: 7

// Contoh 4: Arrow function dengan return implisit (hanya berlaku untuk satu baris pernyataan)
const square = (x) => x * x;

console.log(square(3)); // Output: 9

// Contoh 5: Arrow function sebagai callback
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
