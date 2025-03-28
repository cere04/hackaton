document.addEventListener("DOMContentLoaded", () => {
  function updateStats() {
    chrome.runtime.sendMessage({ action: "getDataUsage" }, (response) => {
      let statsElement = document.getElementById("stats");
      let totalsElement = document.getElementById("totals");
      statsElement.innerHTML = "";

      if (response && response.sites.length > 0) {
        response.sites.forEach((site) => {
          let listItem = document.createElement("li");
          // listItem.innerText = `\nDati: ${site.dataUsed.toFixed(2)} MB\nCO2: ${site.co2Emitted.toFixed(4)} g\nTempo: ${site.timeSpent.toFixed(2)} sec`;
          // statsElement.appendChild(listItem);
        });
        
        totalsElement.innerText = `Dati totali: ${response.totalDataUsed.toFixed(2)} MB\nCO2 totale: ${response.totalCO2Emitted.toFixed(4)} g\nTempo totale: ${response.totalTimeSpent.toFixed(2)} sec`;
      } else {
        statsElement.innerText = "Nessun dato disponibile";
        totalsElement.innerText = "Nessun dato disponibile";
      }
    });
  }

  updateStats();
  setInterval(updateStats, 1000); // Aggiorna ogni 5 secondi
});