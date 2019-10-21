// 1. Chiedi all’utente la sua email
// controlla che sia nella lista di chi può accedere e
// stampa un messaggio appropriato;

var emailReq, listaEmail, invitato;
var text = document.getElementById("messaggio");

emailReq = prompt("Inserisci la tua e-mail");

listaEmail = ['ciao@gmail.com', 'bau@gmail.com', 'miao@gmail.com', 'bee@gmail.com', 'mu@gmail.com'];

for(var i = 0; i < listaEmail.length; i++){
  if (emailReq == listaEmail[i]) {
    invitato = true;
  }
}

if (invitato == true) {
    text.innerHTML = "Benvenuto!";
} else {
    text.innerHTML = "Non sei il benvenuto!";
}
