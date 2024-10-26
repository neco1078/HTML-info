console.log("merhaba javascript");

//değişkenler
var a = 5000;
var b = 6000;
var c = 7000;
let d = 8000; //number

d += 2000;
console.log(5000);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//değişken tanımlama kuralları

var urunAdi;
urunAdi = "samsung"; //string
let x = 8000; //number
console.log(urunAdi);
console.log(x);
console.log(typeof x);
var y = 2000;

console.log(x + y);
var sinavNotu = 40;
var basarilimi = sinavNotu >= 50; //boolean değer

console.log(basarilimi);

//string işlemler

var ad = "Necmi";
var soyad = "ertürk";
var yas = 37;
var sehir = "kocaeli";

console.log(ad[1]);
var mesaj =
  "benim adım " +
  ad +
  " ve soyadım " +
  soyad +
  "," +
  sehir +
  "'de yaşıyorum." +
  " emekliliğe " +
  (65 - yas) +
  " yılım kaldı";
console.log(mesaj);

mesaj = `benim adım ${ad} ve soyadım ${soyad}, ${sehir}'de yaşıyorum. emekliliğe ${
  65 - yas
} yılım kaldı`;
console.log(mesaj);

//string metodları

var kursAdi = "komple uygulamaı web geliştirme";

var sonuc;
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[25];
sonuc = kursAdi.slice(3, 6);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.replace("web");

console.log(sonuc);
