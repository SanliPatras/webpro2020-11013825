/*
    1. Kondisi
*/
let nilaiSanli = 90;
//Jika nilai lebih besar dari 80 maka kalimat yang akan di tampilkan adalah saya sangat puas
if (nilaiSanli > 80) {
  console.log("SAYA SANGAT PUAS");
} else if (nilaiSanli >= 60 && nilaiSanli <= 80){
  console.log("SAYA CUKUP PUAS");
} 
//Jika nilai lebih besar atau sama dengan 60 dan kurang dari sama dengan 80 maka kalimat yang akan di tampilkan adalah saya cukup puas
else if (nilaiSanli >= 50 && nilaiSanli <= 60) {
  console.log("SAYA TIDAK PUAS");
}
//Dan jika nilai lebih besar atau sama dengan 50 dan kurang dari atau sama dengan 60 maka kalimat yang akan di tampulkan adalah saya tidak puas
else {
  console.log("TERUS SEMANGAT, COBA LAGI!");
}
//Tapi jika nilai tidak lebih besar sama dengan 50 maka kalimat yang akan di tampilkan adalah terus semangat coba lagi.

/*
    2. Perulangan
*/
//For
for (let i = 1; i <= 10; i++) {
	//Perintah yang akan di jalankan jika pernyataan benar
  console.log(i);
}

//While
let i = 1;

while (i <= 10) {
//Nilai yang akan di jalankan jika kondisi bernilai benar
  console.log(i);
  i++;
}
