const readline = require("readline-sync");

const angakaPertama = parseFloat(readline.question("Masukan Angka Pertama:"));
const  operator = readline.question("Masukkan operator (+,-,*,/):");
const angkakedua = parseFloat(readline.question("Masukkan Angka Kedua :"));

// validasi inputan
if (isNaN(angakaPertama) || isNaN(angkakedua)) {
    // maka tampilan error
 return console.log("Inputan tidak sesuai !!!");
}else{
   // lanjutkan eksekusi kode
   const hasil = execute(angakaPertama, angkakedua, operator);
    console.log(`Hasilnya adalah ${hasil}`);
}

function execute(angakaPertama,angkakedua,operator){
    switch (operator) {
        case "+":
           return angakaPertama + angkakedua;
        case "-":
            return angakaPertama - angkakedua;
        case "*":
            return angakaPertama * angkakedua;
        case "/":
            // validasi angkakedua
            if (angkakedua  === 0){
                return console.log("Error: Tidak bisa dibagi dengan nol");
            }
        case "%":
            return angakaPertama % angkakedua;
        default:
            console.log("operator tidak valid")
    }
}

