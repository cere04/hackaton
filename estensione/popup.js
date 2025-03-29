document.getElementById('inviaDati').addEventListener('click', function() {
  const valoreDaInviare = "aaa"; // Sostituisci con il valore desiderato
  console.log(valoreDaInviare)
  
  fetch('localhost/api', { // Sostituisci con l'URL del tuo database
    method: 'POST',
    headers: {  
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ valore: valoreDaInviare })
  })
  .then(response => {
    if (response.ok) {
      console.log('Dati inviati con successo!');
    } else {
      console.error('Errore durante l\'invio dei dati:', response.status);
    }
  })
  .catch(error => {
    console.error('Errore di rete:', error);
  });
});