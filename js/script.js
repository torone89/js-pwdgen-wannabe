
// VERIFICA JS COLLEGATO

console.log('JS OK');

/* 

1 Creare una variabile per contenere Nome e chiedere all'utente il proprio nome
2 Creare una variabile per contenere Cognome e chiedere all'utente il proprio cognome
3 Creare una variabile per contenere Colore e chiedere all'utente il suo colore preferito
4 Calcolo la password
5 Stampo la password nel paragrafo

*/

// FASE 1-2-3

const nome = prompt("Come ti chiami?");
console.log(nome);

const cognome = prompt("Quale è il tuo cognome?");
console.log(cognome);

const colore = prompt("Quale è il tuo colore preferito?");

console.log(colore);

// FASE 4

const password = nome + cognome + colore
console.log(password);

// FASE 5 SOULUZONE 1

// const namePlaceholder = document.getElementById('password-generata');
// namePlaceholder.innerText = password + 21;1
// console.log(password);

// SOLUZIONE 2 
const passwordGenerata = `<p>la tua password è <strong>${password}<strong>21<p>`
console.log(passwordGenerata);

const provad = document.getElementById('myPassword')
myPassword.innerHTML = passwordGenerata
