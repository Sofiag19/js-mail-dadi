// Gioco dei dadi, chi fa di più vince;

// lancio gicatore
var dadoUtente = Math.floor(Math.random() * 6);

// lancio pc
var dadoPc = Math.floor(Math.random() * 6);

// output
var mess = "Il tuo punteggio è " + dadoUtente + " mentre il pc ha totalizzato " + dadoPc;

// comparazione
if (dadoUtente > dadoPc) {
  alert (mess + " : Complimenti! Hai vinto!" );
  console.log(mess + " : Complimenti! Hai vinto!");
}else if (dadoUtente < dadoPc) {
  alert (mess + " : Mi dispiace! Hai perso!" );
  console.log(mess + " : Mi dispiace! Hai perso!");
}else {
  alert ("Avete totalizzato lo stesso punteggio! Riprova se vuoi battere il pc.");
  console.log("Avete totalizzato lo stesso punteggio! Riprova se vuoi battere il pc.");
}
