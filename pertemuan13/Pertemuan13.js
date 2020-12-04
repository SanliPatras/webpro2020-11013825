//Rest Parameters
const abjad = (huruf1, huruf2, ...huruf) => {
	console.log("Argumen Pertama", huruf1);
	console.log("Argumen Kedua", huruf2);
	console.log("Sisa Argumen", huruf);
}
abjad("A", "B", "C", "D", "E");

//Spread Operator
let arrayBilangan =[1, 2, 3, 4, 5];
//tanpa spread operator
console.log(arrayBilangan);
//kalau pake spread operator
console.log(...arrayBilangan);

//membuat array cuplicat
let arrayAsli = [1, 2, 3];
let arrayDuplicat = [...arrayAsli];
console.log(arrayAsli);
console.log(arrayDuplicat);

//menggabungkan array (concatenate)
let arrayBuah = ["pisang", "mangga"];
let arraySayur = ["kangkong", "sambiki"];
 arrayBuah = [...arrayBuah, ...arraySayur];
 console.log(arrayBuah);
 
 //bisa juga digabungkan dgn spread operation
 const objek1 = {a: 1, b: 2};
 const objek2 = {c: 3, d: 4};
 const objekGabungan = object.assign({ }, objek1, objek2);
 console.log(objekGabungan);