// Numbers

let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.7");
sonuc = parseFloat("10.7");
sonuc = parseInt("105a");
sonuc = parseInt("a105");

sonuc = isNaN("a10"); // is not a number ?
sonuc = Number.isInteger(10.5);

let sayi = 10.12355;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(2); //ondalık kısmı jaç basamak olmalı

sonuc = Math.round(2.4);
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.2); //yukarı yuvarla
sonuc = Math.floor(2.6); //aşağı yuvarla
sonuc = Math.sqrt(25); //kök alma
sonuc = Math.pow(2, 3); //üs alma
sonuc = Math.min(2, 3, 5, 7, 9, 1); //en küçük
sonuc = Math.max(2, 3, 5, 7, 9, 1); //en büyük

sonuc = Math.floor(Math.random() * 100 + 1);

console.log(typeof sonuc);
console.log(sonuc);
