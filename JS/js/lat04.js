let tampil = document.querySelector("#belajar");

zodiak(2, 10)
function zodiak(bln,tgl) {
    let hasil = "salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil = "zodiak belum dibuat";

        if (bln == 1) {
            hasil = "capricorn";
            if (tgl > 21 && tgl < 32) {
                hasil = "aquarius";
            }
        }

        if (bln == 2) {
            hasil = "aquarius";
            if (tgl > 18 && tgl < 30) {
                hasil = "pisces";
            }
        }

        if (bln == 4) {
            hasil = "aries";
            if (tgl > 18 && tgl < 31) {
                hasil = "taurus";
            }
        }
    }
    console.log(hasil);
    tampil.innerHTML=(hasil);
}
//=============================================================================================================
lulus(75);
function lulus(nilai) {
    
    let kkm = 75;
    let batas = 100;
    let batwa = 0;

    if (nilai <= batas && nilai >= batwa) {
        if (nilai >= kkm) {
            input = "lulus";
        }else {
            input = "tidak lulus";
        }

    }else {
        input = "diluar batas nilai";
    }
    console.log(input);
}
//============================================================================================================
const apakahPrima = (angka) => {
    let pembagi = 0;
    for (let i = 0; i <= angka; i++) {
        if (angka%i == 0) {
            pembagi++;
        }
    }
    if (pembagi == 2) {
        console.log("prima");
    }else{
        console.log("bukan prima");
    }
}

apakahPrima(2);
//==========================================================================================================
// deklrasi variabel & inputan
let number = prompt("masukkan angka ?");

// cek, jika bukan number && number >= 0 (tidak minus)
if (!isNaN(number) && number >= 0) {
  // cek, jika number di modulus 2 == 0
    if (number % 2 === 0) {
    console.log("Genap"); // maka genap
    } else {
    console.log("Ganjil"); // maka ganjil
    }
} else { // jika inputan salah
    console.log("Input salah");
}

