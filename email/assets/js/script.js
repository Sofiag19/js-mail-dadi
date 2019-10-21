// 1. Chiedi all’utente la sua email
// controlla che sia nella lista di chi può accedere e
// stampa un messaggio appropriato;

var emailReq, listaEmail, invitato;

emailReq = prompt("Inserisci la tua e-mail");

listaEmail = ["ciao@gmail.com", "bau@gmail.com" , "miao@gmail.com" , "bee@gmail.com" , "mu@gmail.com"];



for (var i = 0; i < listaEmail.length; i++) {
  if (emailReq == listaEmail[i]) {
    invitato = true;
    // console.log("benvenuto");
    // document.getElementById("messaggio").innerHTML = "benvenuto";
  }else {
    invitato = false;
    // console.log("non sei benvenuto");
    // document.getElementById("messaggio").innerHTML = "non sei benvenuto";
  }
}
//
// var invitato = emailReq == listaEmail[i];
//
// var noninvitato = !(emailReq == listaEmail[i]);

if (invitato = true) {
  document.getElementById("messaggio").innerHTML = "benvenuto";
  console.log("benvenuto");
} else if (invitato = false) {
  document.getElementById("messaggio").innerHTML = "non sei benvenuto";
  console.log("non sei benvenuto");
}
