// Structuring
// Array
const colors = ["merah", "kuning", "hijau"];
//let satu = colors[0];
//let dua = colors[1];
//let tiga = colors[2];

let [satu, dua, tiga] = colors;
console.log(satu, dua, tiga);

// Object
const user = {
	name: "Sanly",
	gender: "Male",
	age: 30,
};

//let name = user.name;
//let gender = user.gender;
//let age = user.age;

//let {name, gender, age} = user;
//console.log(name, gender, age);

let {name, gender, age, born = "Manado"} = user;
console.log(name, gender, age, born);

const display = ({name, age}) => {
	console.log(`Nama saya adalah ${name}. Umur saya adalah ${age}`);
};
display(user);