// function kali(a,b) {
//     return a * b;
// }

// console.log(kali(3,5));

let kali = (a,b) => a * b;
console.log(kali(4,2));

let zodiak = (bulan,tanggal) => {
    if (tanggal > 0 && tanggal < 32 && bulan > 0 && bulan < 13) {
        let hasil = "zodiak belum dibuat";
        if (bulan == 1) {
            hasil = "capricorn";
            if (tanggal > 20) {
                hasil = "aquarius"
            }
        }
        if (bulan == 2) {
            hasil = "aquarius";
            if (tanggal > 20) {
                hasil = "pisces";
            }
        }
    }
    return hasil;
}

console.log(zodiak(2,4));

