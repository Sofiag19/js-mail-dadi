// Gioco dei dadi, chi fa di più vince;

// lancio gicatore
var dadoUtente = Math.floor((Math.random() * 6)+1);

// lancio pc
var dadoPc = Math.floor((Math.random() * 6)+1);

// output
var mess = "Il tuo punteggio è " + dadoUtente + " mentre il pc ha totalizzato " + dadoPc;
var scrittaId = document.getElementById('scritta');
var puntegUt = document.getElementById('animut');
var puntegPc = document.getElementById('animpc');

// comparazione
if (dadoUtente > dadoPc) {
  scrittaId.innerHTML = mess + " : Complimenti! HAI VINTO!"
  console.log(mess + " : Complimenti! Hai vinto!");
}else if (dadoUtente < dadoPc) {
  scrittaId.innerHTML = mess + " : Mi dispiace! HAI PERSO!";
  console.log(mess + " : Mi dispiace! Hai perso!");
}else {
  scrittaId.innerHTML = "Avete totalizzato lo stesso punteggio! Clicca su GIOCA per battere il pc.";
  console.log("Avete totalizzato lo stesso punteggio! Riprova se vuoi battere il pc.");
}

var valDadoUtente = [1,2,3,4,5,6];
var valDadoPc = [1,2,3,4,5,6];
var imgDado = ["<img src='assets/img/uno.jpg' alt='uno'>","<img src='assets/img/due.jpg' alt='due'>","<img src='assets/img/tre.jpg' alt='tre'>","<img src='assets/img/quattro.jpg' alt='quattro'>","<img src='assets/img/cinque.jpg' alt='cinque'>","<img src='assets/img/sei.jpg' alt='sei'>"]

for (var i = 0; i < valDadoUtente.length; i++) {
  if (dadoUtente === valDadoUtente[i] ) {
    puntegUt.innerHTML = imgDado[dadoUtente -1];
  }
}

for (var a = 0; a < valDadoPc.length; a++) {
  if (dadoPc === valDadoPc[a] ) {
    puntegPc.innerHTML = imgDado[dadoPc -1];
  }
}



// imgDado[dadoUtente -1]
// if (dadoUtente == 1) {
//   puntegUt.innerHTML = "<img src='assets/img/uno.jpg' alt='uno'>";
// }else if (dadoUtente == 2) {
//   puntegUt.innerHTML = "<img src='assets/img/due.jpg' alt='due'>";
// }else if (dadoUtente == 3) {
//   puntegUt.innerHTML = "<img src='assets/img/tre.jpg' alt='tre'>";
// }else if (dadoUtente == 4) {
//   puntegUt.innerHTML = "<img src='assets/img/quattro.jpg' alt='quattro'>";
// }else if (dadoUtente == 5) {
//   puntegUt.innerHTML = "<img src='assets/img/cinque.jpg' alt='cinque'>";
// }else if (dadoUtente == 6) {
//   puntegUt.innerHTML = "<img src='assets/img/sei.jpg' alt='sei'>";
// }
//
//
//
// if (dadoPc == 1) {
//   puntegPc.innerHTML = "<img src='assets/img/uno.jpg' alt='uno'>";
// }else if (dadoPc == 2) {
//   puntegPc.innerHTML = "<img src='assets/img/due.jpg' alt='due'>";
// }else if (dadoPc == 3) {
//   puntegPc.innerHTML = "<img src='assets/img/tre.jpg' alt='tre'>";
// }else if (dadoPc == 4) {
//   puntegPc.innerHTML = "<img src='assets/img/quattro.jpg' alt='quattro'>";
// }else if (dadoPc == 5) {
//   puntegPc.innerHTML = "<img src='assets/img/cinque.jpg' alt='cinque'>";
// }else if (dadoPc == 6) {
//   puntegPc.innerHTML = "<img src='assets/img/sei.jpg' alt='sei'>";
// }
