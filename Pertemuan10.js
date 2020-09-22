//Var, Let, Const

//let nama = "Sanly";
//let nama = "Patras";

//console.log(nama);

//Scope dalan Javascript
//1. Function Scope (Var)
//2. Block Scope

//Cara untuk mengakses variabel Var di dalam for
//(function tes () {
//	for (var i = 0; i < 10; i++) {
//		console.log(i);
//	}
//})();
//console di bawah error karena di akses di luar for
//console.log(i);

//Template Literal
const person = {
	firstName: "Sanly",
	lastName: "Patras",
	age: 30,
};

console.log(
	"Hello nama saya " + person.firstName + " " + person.lastName + ". Umur saya adalah " + person.age + "tahun. "
	);

//ES6
console.log(`Hallo nama saya ${person.firstName} ${person.lastName}. Umur saya ${person.age}`);