// Mendefinisikan function constructor untuk objek 'Person'
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Membuat instance baru dari objek 'Person'
var person1 = new Person("John", 30);
var person2 = new Person("Alice", 25);

// Mengakses properti dari instance 'person1' dan 'person2'
console.log(person1.name); // Output: John
console.log(person2.age); // Output: 25
