//Destrukturisasi
//destrukturisasi object
let orang = {
	nama: "sanli",
	umur: 30,
	sudahMenikah: false
};
let nama = orang.nama;
let umur = orang.umur;
let sudahMenikah = orang.sudahMenikah;

console.log(nama);
console.log(umur);
console.log(sudahMenikah);

//dengan destrukturisasi
let orang = {
	nama: "sanli",
	umur: 30,
	statusMenikah: false
};
let {nama, umur, statusMenikah} = orang;

console.log(nama);
console.log(umur);
console.log(sudahMenikah);