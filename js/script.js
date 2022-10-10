//console.log('ciao');

const nomeUtente = prompt('Qual è il tuo nome?');
const cognomeUtente = prompt('Qual è il tuo cognome?');
const coloreUtente = prompt('Qual è il tuo colore preferito?');

output = `
 ${nomeUtente} ${cognomeUtente} ${coloreUtente} 22;
`

document.getElementById('prova').innerHTML += output;