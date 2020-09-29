//Multiple Arguments
//const calcAge = (birthYear, currenYear) //=> {
//	const x;
//	return currenYear - birthYear;
//};

//No argument with inplicit return value
//const calcAge = ( ) => 2020 - 1992;
//console.log(calcAge());

// Bukan Arrow Function
//const year = [1990, 1992, 2021, 2005];
//const calcAge5 = year.map(function (el) {
//	return 2020 - el;
//});

// Arrow Function
//const calcAge6 = year.map((el) => 2020 - el);
//console.log(calcAge6);

// EXERCISE 03 (Arrow Funtion)
//Convert to ES6 

// ES5 SYNTAX
//function yearUntilRetirement(year, firstName) {
//	var age = 28;
//	var retirement = 65 - age;
//	if (retirement > 0) {
//		console.log(firstName + "retired in" + retirement + "year");
//	}else {
//		console.log(firstName + "is already //retired.");
//	}
//}

//ES6 SYNTAX
const yearUntilRetirement = (year, firstName) => {
	var age = 28;
	var retirement = 65 - age;
	if (retirement > 0) {
		console.log(firstName + "retired in" + retirement + "year");
	}else {
		console.log(firstName + "is already retired.");
	}
}