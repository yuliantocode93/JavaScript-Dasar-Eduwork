// * Control Flow

//* Contoh 0: If-else

let nilai = 60;
let gender = "pria";

if (nilai > 80) {
  console.log("Nilai anda A");
} else if (nilai > 70) {
  console.log("Nilai anda B");
} else if (nilai > 60) {
  console.log("Nilai anda C");
} else if (nilai > 50) {
  console.log("Nilai anda D");
} else {
  console.log("Nilai anda E");
}

//* Contoh 1: Loop dari 1 hingga 5
for (let i = 1; i <= 5; i++) {
  console.log(i); // 1, 2, 3, 4, 5
}

//* Contoh 2: Loop melalui elemen-elemen dalam sebuah array
const fruits = ["apel", "pisang", "jeruk", "anggur"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // apel, pisang, jeruk, anggur
}

// Contoh 3: Loop melalui properti-properti dalam sebuah objek
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`); // name: John, age: 30, city: New York
}

// Contoh 4: Loop melalui properti-properti dalam sebuah array
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num); // 1, 2, 3, 4, 5
}

// Contoh 5: Loop melalui elemen-elemen dalam sebuah array
let buah = document.querySelectorAll(".buah");
for (let e of buah) {
  e.addEventListener("click", function () {
    this.style.color = "red";
  });
}

let keluarga = [
  {
    name: "eko",
    status: "kerja",
    pendapatan: 5000000,
    age: 20,
  },
  {
    name: "budi",
    status: "pelajar",
    pendapatan: 3000000,
    age: 21,
  },
  {
    name: "wati",
    status: "mahasiswa",
    pendapatan: 2000000,
    age: 22,
  },
];

let kk1 = keluarga.map(function (kk) {
  return kk;
}); //* [ { name: 'eko', age: 20 }, { name: 'budi', age: 21 }, { name: 'wati', age: 22 } ]

let kk2 = keluarga.filter(function (kk) {
  return kk.age > 20;
}); //* [ { name: 'budi', age: 21 }, { name: 'wati', age: 22 } ]

let kk3 = keluarga.find(function (kk) {
  return kk.age > 20;
}); //* { name: 'budi', age: 21 }

let kk4 = keluarga.findIndex(function (kk) {
  return kk.age > 20;
}); //* 1

let kk5 = keluarga.some(function (kk) {
  return kk.age > 20;
}); //* true

let kk6 = keluarga.every(function (kk) {
  return kk;
}); //* true

let kk7 = keluarga.reduce(function (total, kk) {
  return total + kk.age;
}, 0); //* 63

console.log("kk1 sampai kk7 = ");
console.log(kk1);
console.log(kk2);
console.log(kk3);
console.log(kk4);
console.log(kk5);
console.log(kk6);
console.log(kk7);

let kk8 = keluarga.map(function (kk) {
  return {
    name: kk.name,
    pendapatan: kk.pendapatan,
    age: kk.age,
  };
});
console.log("kk8 = ");
console.log(kk8); //* [ { name: 'eko', pendapatan: 5000000, age: 20 }, { name: 'budi', pendapatan: 3000000, age: 21 }, { name: 'wati', pendapatan: 2000000, age: 22 } ]

let kk9 = keluarga.map(function (kk) {
  if (kk.status === "pelajar") {
    return kk;
  }
});
console.log("kk9 = ");
console.log(kk9); //* [ { name: 'budi', age: 21 }, { name: 'wati', age: 22 } ]

let kk10 = keluarga.filter(function (kk) {
  if (kk.status === "kerja") {
    return kk;
  }
});
console.log("kk10 = ");
console.log(kk10); //* [ { name: 'eko', age: 20 } ]

let kk11 = keluarga.find(function (kk) {
  if (kk.status === "pelajar") {
    return kk;
  }
});
console.log("kk11 = ");
console.log(kk11); // * { name: 'budi', age: 21 }

let kk12 = kk10.reduce(function (prev, curr) {
  return prev + curr.pendapatan;
}, 0);

let kkBaru = keluarga
  .map((kk) => {
    return {
      name: kk.name.toUpperCase(),
      pendapatan: kk.pendapatan,
      age: kk.age,
    };
  })
  .filter((kk) => kk.status == "kerja")
  .reduce((prev, curr) => prev + curr.pendapatan, 0);

console.log(`kkBaru : ${kkBaru}`); // * 15000000
