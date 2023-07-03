const sayilar = [1257, 554, 68921, 78521, 123];

for (let i = 0; i < sayilar.length; i++) {
  let toplam = 0;
  console.log(sayilar[i]);

  let temp = sayilar[i];
  let basamakSayisi = 0;

  while (temp > 0) {
    basamakSayisi++;
    temp = Math.floor(temp / 10);
  }

  const basamaklar = new Array(basamakSayisi);

  temp = sayilar[i];
  for (let j = basamakSayisi - 1; j >= 0; j--) {
    basamaklar[j] = temp % 10;
    temp = Math.floor(temp / 10);
  }

  for (let j = 0; j < basamakSayisi; j++) {
    if (sayilar[i] % basamaklar[j] === 0) {
      toplam++;
    }
  }
  console.log(toplam);
}