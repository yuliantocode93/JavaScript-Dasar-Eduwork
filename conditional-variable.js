console.clear();

let a = 10;
let b = 20;

if (a > b) {
  console.log("a > b");
} else if (a < b) {
  console.log("a < b");
} else {
  console.log("a = b");
}

//* ternary
console.log(a > b ? "a > b" : "a < b"); //* a < b

console.log(a > b ? "a > b" : a < b ? "a < b" : "a = b"); //* a < b

console.log(a > b ? "a > b" : a === b ? "a = b" : "a < b"); //* a < b

console.log(a === b ? "a = b" : a < b ? "a < b" : "a > b"); //* a < b

console.log(a === b ? "a = b" : a > b ? "a > b" : "a < b"); //* a < b

console.log(a < b ? "a < b" : a === b ? "a = b" : "a > b"); //* a < b

//* ternary operator dengan variable
const umur = 30;

const keterangan = umur < 18 ? "anak" : umur < 60 ? "dewasa" : "tua";
console.log(keterangan); //* dewasa

const keterangan2 = umur < 18 ? "anak" : umur > 60 ? "dewasa" : "lansia";
console.log(keterangan2); //* lansia

const kondisiAnd = umur < 50 && "dewasa";
console.log(kondisiAnd); //* false

const kondisiOr = umur < 50 || "dewasa";
console.log(kondisiOr); //* true

const kondisiAnd2 = umur > 50 && "dewasa";
console.log(kondisiAnd); //* false

const kondisiOr2 = umur > 50 || "dewasa";
console.log(kondisiOr); //* true

//* List Buku

const buku = [
  {
    judul: "Harry potter",
    harga: 250000,
    halaman: 1000,
    bab: 200,
    pengarang: {
      nama: "J. K. Rowling",
      negara: "inggris",
    },
  },
  {
    judul: "Lord of the rings",
    harga: 300000,
    halaman: 2000,
    bab: 300,
    pengarang: {
      nama: "J. R. R. Tolkien",
      negara: "inggris",
    },
  },
  {
    judul: "The Hobbit",
    harga: 200000,
    halaman: 800,
    bab: 100,
    pengarang: {
      nama: "J. R. R. Tolkien",
      negara: "inggris",
    },
  },
];

const listBuku = buku.map((buku) => {
  return {
    judul: buku.judul,
    harga: buku.harga,
    halaman: buku.halaman,
    bab: buku.bab,
    pengarang: buku.pengarang,
  };
});

//* Map
const listJudul = listBuku.map((buku) => buku.judul);
console.log(listJudul); //* ['Harry potter', 'Lord of the rings', 'The Hobbit']

const listHarga = listBuku.map((buku) => buku.harga);
console.log(listHarga); //* [250000, 300000, 200000]

const listPengarang = listBuku.map((buku) => buku.pengarang);
console.log(listPengarang);

const listHalaman = listBuku.map((buku) => buku.halaman);
console.log(listHalaman); //* [1000, 2000, 800]

//* Filter
const bukuMahal = listBuku.filter((buku) => buku.harga > 200000);
console.log(bukuMahal);

const bukuHalaman = listBuku.filter((buku) => buku.halaman > 1000);
console.log(bukuHalaman);
