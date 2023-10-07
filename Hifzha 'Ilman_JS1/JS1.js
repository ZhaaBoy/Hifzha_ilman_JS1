// Menggunakan if, else, dan nested if
let nama = "Hifzha 'Ilman";
let nilai = 95;
if (nilai >= 90) {
  console.log(nama + " Anda mendapatkan nilai A");
} else if (nilai >= 80) {
  console.log(nama + " Anda mendapatkan nilai B");
} else {
  if (nilai >= 70) {
    console.log(nama + " Anda mendapatkan nilai C");
  } else {
    console.log(nama + " Anda mendapatkan nilai D");
  }
}

// Menggunakan switch case
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa");
    break;
  default:
    console.log("Hari ini bukan Senin atau Selasa");
}

// Menggunakan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Menggunakan while
let angka = 1;
while (angka <= 5) {
  console.log("Nilai angka: " + angka);
  angka++;
}

// Menggunakan do while
let nilaiAwal = 1;
do {
  console.log("Nilai awal: " + nilaiAwal);
  nilaiAwal++;
} while (nilaiAwal <= 5);

// Menggunakan function
function tambah(a, b) {
  return a + b;
}

let hasilTambah = tambah(3, 4);
console.log("Hasil penambahan: " + hasilTambah);
