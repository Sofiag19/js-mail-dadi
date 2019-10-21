// Gioco dei dadi, chi fa di più vince;

// lancio gicatore
var dadoUtente = Math.floor((Math.random() * 6)+1);

// lancio pc
var dadoPc = Math.floor((Math.random() * 6)+1);

// output
var mess = "Il tuo punteggio è " + dadoUtente + " mentre il pc ha totalizzato " + dadoPc;
var scrittaId = document.getElementById('scritta');

// comparazione
if (dadoUtente > dadoPc) {
  scrittaId.innerHTML = mess + " : Complimenti! Hai vinto!"
  console.log(mess + " : Complimenti! Hai vinto!");
}else if (dadoUtente < dadoPc) {
  scrittaId.innerHTML = mess + " : Mi dispiace! Hai perso!";
  console.log(mess + " : Mi dispiace! Hai perso!");
}else {
  scrittaId.innerHTML = "Avete totalizzato lo stesso punteggio! Aggiorna per battere il pc.";
  console.log("Avete totalizzato lo stesso punteggio! Riprova se vuoi battere il pc.");
}
