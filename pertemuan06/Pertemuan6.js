/*
     1. Object
*/

// const mahasiswa1 = ["John", "Doe", 31, true];

//Mendeklarasikan Object
//1. Object Literals
const mhs1 = {
	namaDepan: "John",
	namaBelakang: "Doe",
	umur: 31,
	sudahLulus: true,
	alamat: {
		jalan: "Jln. Arnold Mononutu",
		kecamatan: "Airmadidi",
		kabupaten: "Minahasa Utara",
	},
	IPSemester: [3.05, 3.25, 3.0, 3.4],
	hitungIPK: function () {
		let total = 0;
		this.IPSemester.forEach(function (el) {
			total = total + el;
		})
		this.IPKumulatif = total / 4;
	},
};
delete mhs1.namaBelakang;
console.log(mhs1);

//2. Kata Kunci New
const mhs2 = new Object ();
mhs2.namaDepan = "Jane";
mhs2.namaBelakang = "Smith";

//Mengakses Property Object
//1. Dot notation
console.log(mhs1.umur);
//2. Brecket notation
console.log(mhs1["namaBelakang"]);

console.log(mhs1.alamat.jalan);
console.log(mhs1.IPSemester[2]);
mhs1.hitungIPK();
console.log(mhs1);

//Array Object [JSON]
const pegawai = [
{
	ID: "001",
	namaDepan: "John",
	namaBelakang: "Doe",
},
{
	ID: "002",
	namaDepan: "Jesica ",
	namaBelakang: "Langkun",
},
{
	ID: "003",
	namaDepan: "Sanly ",
	namaBelakang: "Patras",
},
];
pegawai.forEach(function (el) {
	console.log(el);
});
