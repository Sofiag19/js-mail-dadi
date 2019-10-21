// 1. Chiedi all’utente la sua email
// controlla che sia nella lista di chi può accedere e
// stampa un messaggio appropriato;

var emailReq, listaEmail;

emailReq = prompt("Inserisci la tua e-mail");

listaEmail = ["ciao@gmail.com", "bau@gmail.com" , "miao@gmail.com" , "bee@gmail.com" , "mu@gmail.com"];

for (var i = 0; i < listaEmail.length; i++) {
  if (emailReq === listaEmail[i]) {
    console.log("benvenuto");
  }else {
    console.log("non sei benvenuto");
  }
}
