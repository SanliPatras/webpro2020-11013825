//Ujian 02
// 1. ES6 sintax
function calculateAge(birthYear) {
	return 2020-birthYear;
}
const yearUntilRetirement = (object) => {
	var age = calculateAge(object.year);
	var retirement = 60 - age;
	if (retirement > 0) {
		console.log(object.firstName + "retires in" + retirement + "year");
	}else {
		console.log(firstName + "is already retired.");
	}
}
yearUntilRetirement({year: 1987, firstName: 'John'});

// 2. ES6 sintax
//const addNumber =(a, b, c, d, e, f, g) => {
//	const numbers = addNumber.map((el)  =>
//	let numbers = [a, b, c, d, e, f, g];
//	let sum = 0;
//	for(let i = 0; i < numbers.length; i++) {
//		sum += numbers [i];
//	}
//	return sum;
//};
//console.log(addNumber(1,2,3,4,5,6,7));

// 3. ES6 sintax
//var phi = 3.14;
//var power = 2;
//var radius = 0;

//var calculateArea = (obj) => {
//	return phi * math.pow(obj.radius, obj.power);
//};

//radius = 21;
//var area21 = calculateArea({radius: radius, power: 2});

//radius = 7;
//var area7 = calculateArea({radius: radius, power: 2});

//console.log('area with 21 radius: ' + area21 + ',and area with 7 radius: ' + area7);

// 4. ES6 sintax
//const makeAjaxRequest = (url, method) => {
//	if(!method) {
//		method = 'GET'
//	}
//	console.log(url, method);
//}
//makeAjaxRequest('www.google.com');

//BAGIAN 2
// 1.
const warnaKesukaan = {
	warna: "Putih",
};

let {warna = "WarnaPutih"} = warnaKesukaan;
console.log(warna);

const display = ({warna}) => {
	console.log(`Warna kesukaan saya adalah ${warna}`);
};
display(warnaKesukaan);

// 2
const buah1 = ["apel","mangga"];
 const buah2 = ["sirsak","semangka"];
 const gabungan = object.assign({ }, buah1, buah2);
 console.log(gabungan);
