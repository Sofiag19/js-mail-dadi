// 1. Chiedi all’utente la sua email
// controlla che sia nella lista di chi può accedere e
// stampa un messaggio appropriato;

var emailReq, listaEmail;

emailReq = prompt("Inserisci la tua e-mail");

listaEmail = ["ciao@gmail.com", "bau@gmail.com" , "miao@gmail.com" , "bee@gmail.com" , "mu@gmail.com"];

var invitato = emailReq == listaEmail[i];

for (var i = 0; i < listaEmail.length; i++) {
  if (invitato = true) {
    console.log("benvenuto");
    // document.getElementById('messaggio').innerHTML = "benvenuto";
  }else if (invitato = false){
    console.log("pussa via!");
    // document.getElementById('messaggio').innerHTML = "pussa via!";
  }
}
