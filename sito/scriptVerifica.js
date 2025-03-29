// Fattori di emissione per regione (g CO2 per visita)
const emissionFactors = {
    'global': 1.2,
    'europe': 0.8,
    'north-america': 1.5,
    'asia': 1.3,
    'south-america': 1.0,
    'africa': 0.7,
    'oceania': 1.4
};

// Valore fisso per i visitatori mensili
const FIXED_VISITORS = 10000;

function calculateCO2() {
    const url = document.getElementById('url').value.trim();
    const country = document.getElementById('country').value;
    
    if (!url) {
        alert("Per favore inserisci un URL valido");
        return;
    }
    
    // Estrai dominio principale per visualizzazione
    let domain = url;
    try {
        domain = new URL(url.startsWith('http') ? url : 'https://' + url).hostname;
    } catch (e) {
        console.log("URL non valido, usando testo inserito");
    }
    
    // Calcola emissioni usando il valore fisso di visitatori
    const co2PerVisit = emissionFactors[country];
    const totalCO2 = (FIXED_VISITORS * co2PerVisit) / 1000; // Converti in kg
    
    // Mostra risultati
    document.getElementById('result-url').textContent = domain;
    document.getElementById('result-country').textContent = document.getElementById('country').options[document.getElementById('country').selectedIndex].text;
    document.getElementById('co2-per-page').textContent = co2PerVisit.toFixed(2);
    document.getElementById('co2-total').textContent = totalCO2.toFixed(2);
    
    // Calcola equivalenti
    if (totalCO2 > 0) {
        const trees = (totalCO2 * 12) / 21; // Alberi necessari per assorbire emissioni annuali
        const kmCar = totalCO2 / 0.12; // km equivalenti in auto
        const bulbs = totalCO2 / 0.05; // lampadine accese per un giorno
        
        document.getElementById('trees-equivalent').textContent = trees.toFixed(1);
        document.getElementById('car-equivalent').textContent = kmCar.toFixed(0);
        document.getElementById('bulbs-equivalent').textContent = bulbs.toFixed(0);
    } else {
        document.getElementById('trees-equivalent').textContent = "0";
        document.getElementById('car-equivalent').textContent = "0";
        document.getElementById('bulbs-equivalent').textContent = "0";
    }
    
    // Mostra risultati
    document.getElementById('result').style.display = 'block';
}