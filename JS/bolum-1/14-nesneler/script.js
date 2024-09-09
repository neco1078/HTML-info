//objects(nesneler)
// let kullanici=[
//     "necmi",
//     "ertürk",
//     40
// ];

//key-value

let kullanici = {
  ad: "necmi",
  soyad: "ertürk",
  yas: 40,
  adres: {
    sehir: "kocaeli",
    ilce: "körfez",
  },
  hobiler: ["sinema", "futbol"],
};

let kullanici2 = {
  hobiler: ["basket", "tenis"],
};

let kullanicilar = [kullanici, kullanici2];
let sonuc;

sonuc = kullanici.ad;

sonuc = kullanici["yas"];
sonuc = kullanici["adres"]["ilce"];
sonuc = kullanici.adres.sehir;
sonuc = kullanici.hobiler[0];

sonuc = kullanicilar[1].hobiler[0];
console.log(sonuc);
