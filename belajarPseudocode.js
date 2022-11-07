// nomor 1
function luasPersegiPanjang (panjang, lebar ) {
    let luas = panjang * lebar;
    return luas
}
console.log(luasPersegiPanjang(5,10));

// nomor 2
let jam = 3;
let menit = 15;
function konversiJamKeDetik(){
    let detik = (jam*3600)+(menit*60);
    return detik
}
console.log(konversiJamKeDetik (jam, menit), 'konversi jam ke detik')


//nomor 3
var angka = 45;
function bilanganGanjilGenap(angka){
    if(angka % 2 == 0)
    return 'Bilangan Genap';
    else return 'Bilangan Ganjil';
}
console.log(bilanganGanjilGenap())


//nomor 4
function luasLingkaran (r) {
    let luas = Math.PI * r* r ;
    return luas
}
console.log(luasLingkaran(14))

//nomor 5
var a = 45;
var b = 25;
var c = 65;

function bilanganTerbesar(){ 
if(a>b, a>c){
    return'paling besar a';
} else if(b>a, b>c){
    return 'paling besar b';
} else{
    return 'paling besar c';
}
}
console.log(bilanganTerbesar())

function bilanganTerkecil(){
if(a<b, a<c){
    return 'paling kecil a';
} else if(b<a, b<c){
    return 'paling kecil b';
} else
    return 'paling kecil c';
}
console.log(bilanganTerkecil())

function nilaiRatarata(){
    var nilaiRatarata = (a+b+c)/3
    return nilaiRatarata
}
console.log(nilaiRatarata(), 'nilai rata rata')


    


