let dataUsage = {}; // Contiene il consumo di dati per ogni URL
let startTime = {}; // Memorizza l'ora di inizio della visita per ogni URL

// Listener per gli eventi di completamento delle richieste web (quando una richiesta viene completata)
chrome.webRequest.onCompleted.addListener(
  (details) => {
    // Se l'URL non è una URL HTTP, ignora la richiesta
    if (!details.url.startsWith("http")) return;

    let url = details.url; // Ottieni l'URL della richiesta
    // Se l'URL non è presente in dataUsage, inizializza il valore
    if (!dataUsage[url]) {
      dataUsage[url] = 0; // Inizializza il consumo di dati per questo URL
      startTime[url] = Date.now(); // Registra l'ora di inizio per questo URL
    }

    // Aggiungi la quantità di dati trasferiti in MB (ottenuto dai dettagli della risposta)
    dataUsage[url] += details.responseHeaders ? details.responseHeaders.reduce((acc, header) => {
      // Cerca il valore "Content-Length" nell'header per calcolare i dati trasferiti
      return header.name.toLowerCase() === "content-length" ? acc + parseInt(header.value, 10) / (1024 * 1024) : acc;
    }, 0) : 0.01; // Se non ci sono header "Content-Length", assume un valore di 0.01 MB
  },
  { urls: ["<all_urls>"] }, // Ascolta tutte le richieste web
  ["responseHeaders"] // Solo le informazioni sugli header della risposta
);

// Listener per il messaggio che chiede i dati di utilizzo
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Se il messaggio richiede i dati di utilizzo
  if (request.action === "getDataUsage") {
    // Variabili per memorizzare i totali
    let totalDataUsed = 0; // Totale dati usati in MB
    let totalCO2Emitted = 0; // Totale CO2 emesso in grammi
    let totalTimeSpent = 0; // Totale tempo trascorso sul sito in secondi

    
    // Elenco dei dati per ciascun sito visitato
    let siteData = Object.entries(dataUsage).map(([url, dataUsed]) => {
      // Calcola il tempo trascorso su ogni sito (in secondi)
      
    let timeSpent = startTime[url] ? (Date.now() - startTime[url]) / 1000 : 0;

      // Fattore di emissione CO2 per ogni MB di dati trasferiti (0.05 g CO2 per MB)
      let co2Factor = 0.05;
      // Calcola l'emissione di CO2 per i dati trasferiti (dati in MB * fattore di emissione)
      let co2Emitted = dataUsed * co2Factor;
      
      // Somma i totali per i dati, le emissioni e il tempo trascorso
      totalDataUsed += dataUsed;
      totalCO2Emitted += co2Emitted;
      totalTimeSpent += timeSpent;
      
      // Ritorna un oggetto con i dettagli per ogni sito
      return { url, dataUsed, co2Emitted, timeSpent };
    });

    // Restituisce i dati completi al popup o altro componente che richiede i dati
    sendResponse({ sites: siteData, totalDataUsed, totalCO2Emitted, totalTimeSpent });
  }

  // Il listener deve restituire true per continuare l'ascolto asincrono
  return true;
});