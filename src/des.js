// Belajar Destructuring

// contoh destructur array
const listBuah = ["jeruk", "salak", "mangga", "anggur", "durian"];
const buah1 = listBuah[0];
const buah2 = listBuah[1];
const buah3 = listBuah[2];
console.log(buah1, buah2, buah3);

// Destructur
const [pertama, kedua, ketiga, ...lainnya] = listBuah;
console.log(pertama, kedua, ketiga, lainnya); //* ['jeruk', 'salak', 'mangga', 'anggur', 'durian']

// contoh destructur object
const buku = {
  judul: "Harry potter",
  harga: 250000,
  halaman: 1000,
  bab: 200,
  pengarang: {
    nama: "J. K. Rowling",
    negara: "inggris",
  },
};

const judulBuku = buku.judul;
const hargaBuku = buku.harga;
const namaPengarang = buku.pengarang.nama;
console.log(judulBuku, hargaBuku, namaPengarang); //* Harry potter 250000 J. K. Rowling

// destructur
const {
  judul,
  harga,
  pengarang: { nama },
  ...dataLainnya
} = buku;
console.log(judul, harga, nama, dataLainnya); //* Harry potter 250000 J. K. Rowling {}

// contoh destructur di function parameter
function penjumlahan([angka1, angka2]) {
  const penjumlahan = angka1 + angka2;
  const pesan = `hasil penjulahan kedua bilangan adalah ${penjumlahan}`;
  console.log(pesan); //* 15
}

function printBuku({ judul, harga, pengarang: { nama } }) {
  const pesan = `Buku ${judul} karya ${nama} dijual dengan harga ${harga}`;
  console.log(pesan); //* Buku Harry potter karya J. K. Rowling dijual dengan harga 250000
}

printBuku(buku); //* Buku Harry potter karya J. K. Rowling dijual dengan harga 250000
penjumlahan([10, 5]); //* 15

//todo: contoh destructuring function
//* List of students
const students = [
  { name: "John", age: 20, grade: "A" },
  { name: "Jane", age: 21, grade: "B" },
  { name: "Doe", age: 19, grade: "A" },
];

// Destructuring array dan object
const [, { name: secondStudentName, age: secondStudentAge }] = students;
console.log(`Name: ${secondStudentName}, Age: ${secondStudentAge}`); // Output: Name: Jane, Age: 21

// Default value dan alias
const [, , { name: thirdStudentName = "Unknown", grade: thirdStudentGrade = "Not Available" }] = students;
console.log(`Name: ${thirdStudentName}, Grade: ${thirdStudentGrade}`); // Output: Name: Doe, Grade: A

//* List of products
const products = [
  { id: 1, name: "Phone", price: 500 },
  { id: 2, name: "Laptop", price: 1200 },
  { id: 3, name: "Headphones", price: 100 },
];

// Destructuring array dan object
const [, { name: secondProductName, price: secondProductPrice }] = products;
console.log(`Product: ${secondProductName}, Price: $${secondProductPrice}`); // Output: Product: Laptop, Price: $1200

// Default value dan alias
const [, , { name: thirdProductName = "Unknown", stock: thirdProductStock = 0 }] = products;
console.log(`Product: ${thirdProductName}, Stock: ${thirdProductStock}`); // Output: Product: Headphones, Stock: 0

//* contoh destructuring function
const users = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    hobbies: ["Reading", "Cooking"],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    hobbies: ["Gardening", "Painting"],
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 35,
    hobbies: ["Hiking", "Photography"],
  },
];

// Destructuring array, object, dan alias
const [
  ,
  {
    name: secondUserName,
    age: secondUserAge,
    hobbies: [hobby1, hobby2],
  },
] = users;
console.log(`Second User: ${secondUserName}, Age: ${secondUserAge}, Hobbies: ${hobby1}, ${hobby2}`);

// Default value
const [, , { name: thirdUserName = "Unknown", age: thirdUserAge = 0, hobbies: thirdUserHobbies = [] }] = users;
console.log(`Third User: ${thirdUserName}, Age: ${thirdUserAge}, Hobbies: ${thirdUserHobbies.join(", ")}`);

// Destructuring di dalam parameter fungsi
function printUserInfo({ name, age, hobbies }) {
  console.log(`Name: ${name}, Age: ${age}, Hobbies: ${hobbies.join(", ")}`);
}

printUserInfo(users[0]); // Output: Name: John Doe, Age: 30, Hobbies: Reading, Cooking
