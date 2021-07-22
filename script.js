function getPilihanKomputer() {
  const comp = Math.round(Math.random() * 15 + 1);

  if (comp < 5) return "gajah";
  if (comp >= 5 && comp < 11) return "semut";
  return "orang";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}

//cara 2

//membuat function putar gambar
function putar() {
  const computerGambar = document.querySelector(".img-komputer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;

  const mulai = new Date().getTime();
  setInterval(function () {
    //untuk berhenti setelah satu detik
    if (new Date().getTime() - mulai > 1000) {
      clearInterval;
      return;
    }
    computerGambar.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (i) {
  i.addEventListener("click", function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = i.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    //menjalankan fungsi putar
    putar();

    //perintah di bawah akan di jalankan setelah 1 detik
    setTimeout(function () {
      const imgKomputer = document.querySelector("div.area-komputer img");

      imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

      const sHasil = document.querySelector("div.info");
      sHasil.innerHTML = hasil;
    }, 1000);
  });
});

// cara 1
// const playerGajah = document.querySelector("div.area-player ul li img.gajah");
// playerGajah.addEventListener("click", function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPlayer = playerGajah.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//   const imgKomputer = document.querySelector("div.area-komputer img");

//   imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

//   const sHasil = document.querySelector("div.info");
//   sHasil.innerHTML = hasil;
// });

// const playerOrang = document.querySelector("div.area-player ul li img.orang");
// playerOrang.addEventListener("click", function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPlayer = playerOrang.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//   const imgKomputer = document.querySelector("div.area-komputer img");

//   imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

//   const sHasil = document.querySelector("div.info");
//   sHasil.innerHTML = hasil;
// });

// const playerSemut = document.querySelector("div.area-player ul li img.semut");
// playerSemut.addEventListener("click", function () {
//   const pilihanKomputer = getPilihanKomputer();
//   const pilihanPlayer = playerSemut.className;
//   const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//   const imgKomputer = document.querySelector("div.area-komputer img");

//   imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

//   const sHasil = document.querySelector("div.info");
//   sHasil.innerHTML = hasil;
// });
