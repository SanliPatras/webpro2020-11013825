/*
   1. Variabel dan tipe Data
*/

const firstName = "John";
let age = 20;
age = 21;

const isMarried = true;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);
console.log(age + " " + isMarried);

const info = 
      "My name is" + firstName + ", I'm " + age + "years old." + isMarried;

console.log(typeof info);

function display() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
  
}
display();
