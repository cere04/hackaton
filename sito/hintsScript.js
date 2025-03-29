const tips = [
    // ===== CONSIGLI SERI (40) ===== //
    // Streaming
    { icon: "🎬", title: "Qualità video ottimale", content: "Usa 720p invece di 4K per lo streaming: -70% di dati e CO₂", category: "Streaming" },
    { icon: "🎧", title: "Modalità audio", content: "Ascolta solo l'audio quando guardi musica su YouTube", category: "Streaming" },
    { icon: "📺", title: "TV efficiente", content: "Disattiva l'upscaling automatico sulla smart TV", category: "Streaming" },
    
    // Email
    { icon: "✉️", title: "Pulizia inbox", content: "Cancella 100 email vecchie = 5g di CO₂ risparmiati", category: "Email" },
    { icon: "📎", title: "Allegati leggeri", content: "Comprimi i file prima di inviarli via email", category: "Email" },
    { icon: "📩", title: "Newsletter", content: "Disiscriviti da almeno 5 newsletter non lette", category: "Email" },
    
    // Cloud
    { icon: "☁️", title: "Pulizia cloud", content: "Elimina i backup duplicati dal cloud storage", category: "Cloud" },
    { icon: "🖼️", title: "Foto ottimizzate", content: "Riduci la qualità delle foto di backup al 90%", category: "Cloud" },
    { icon: "📦", title: "Archiviazione locale", content: "Sposta i file usati raramente su disco esterno", category: "Cloud" },
    
    // Dispositivi
    { icon: "📱", title: "Durata smartphone", content: "Usa il telefono per almeno 4 anni prima di cambiarlo", category: "Dispositivi" },
    { icon: "🔋", title: "Batteria sana", content: "Mantieni la batteria tra 20% e 80% per prolungarne la vita", category: "Dispositivi" },
    { icon: "💻", title: "Manutenzione PC", content: "Pulizia regolare migliora l'efficienza energetica", category: "Dispositivi" },
    
    // Rete
    { icon: "📶", title: "Wi-Fi vs mobile", content: "Il Wi-Fi consuma fino a 10x meno dei dati mobili", category: "Rete" },
    { icon: "🌙", title: "Download notturni", content: "Programma i download grandi nelle ore serali", category: "Rete" },
    { icon: "🔄", title: "Aggiornamenti", content: "Metti in pausa gli aggiornamenti automatici non urgenti", category: "Rete" },
    
    // Lavoro
    { icon: "💼", title: "Videoconferenze", content: "Usa solo audio quando il video non è necessario", category: "Lavoro" },
    { icon: "📊", title: "File condivisi", content: "Collabora su documenti cloud invece di inviare versioni", category: "Lavoro" },
    { icon: "🖨️", title: "Stampa intelligente", content: "Usa font eco-friendly come Ryman Eco", category: "Lavoro" },
    
    // Social
    { icon: "📱", title: "Scrolling consapevole", content: "Limita lo scrolling infinito sui social media", category: "Social" },
    { icon: "📸", title: "Storie e reel", content: "Riduci la produzione di contenuti effimeri", category: "Social" },
    { icon: "🔕", title: "Notifiche", content: "Disattiva notifiche non essenziali", category: "Social" },
    
    // Browser
    { icon: "🌐", title: "Estensioni", content: "Disinstalla le estensioni del browser non usate", category: "Browser" },
    { icon: "🔍", title: "Motori di ricerca", content: "Usa Ecosia che pianta alberi con le ricerche", category: "Browser" },
    { icon: "📑", title: "Tab aperti", content: "Chiudi i tab non utilizzati per ridurre il carico", category: "Browser" },
    
    // Casa intelligente
    { icon: "🏠", title: "IoT essenziali", content: "Limita i dispositivi smart sempre connessi", category: "Smart Home" },
    { icon: "📡", title: "Router", content: "Spegni il router quando fuori casa per lunghi periodi", category: "Smart Home" },
    { icon: "🔌", title: "Standby", content: "Usa ciabatte con interruttore per eliminare gli standby", category: "Smart Home" },
    
    // Programmazione
    { icon: "💻", title: "Codice efficiente", content: "Ottimizza gli algoritmi per ridurre i cicli CPU", category: "Tecnici" },
    { icon: "🖥️", title: "Server green", content: "Scegli hosting alimentati da energie rinnovabili", category: "Tecnici" },
    { icon: "📉", title: "Dati leggeri", content: "Usa formati compressi per API e trasferimenti", category: "Tecnici" },
    
    // Varie
    { icon: "🛒", title: "E-commerce", content: "Raggruppa gli ordini online per ridurre le spedizioni", category: "Varie" },
    { icon: "🎮", title: "Gaming", content: "Riduci la qualità grafica quando non necessaria", category: "Varie" },
    { icon: "📚", title: "E-book", content: "Leggi in modalità notte per risparmiare energia", category: "Varie" },
    { icon: "🎵", title: "Musica offline", content: "Scarica invece di streammare ripetutamente", category: "Varie" },
    { icon: "🔄", title: "Seconda vita", content: "Rivendi o ricicla i dispositivi elettronici", category: "Varie" },
    { icon: "🌳", title: "Compensazione", content: "Supporta progetti di riforestazione digitale", category: "Varie" },

    // ===== EASTER EGG (10) ===== //
    { 
        icon: "👾", 
        title: "Retro-computing", 
        content: "I computer anni '80 consumavano meno di una moderna lampadina LED. Tempo di tornare al BASIC!", 
        category: "Segreto",
        easterEgg: true 
    },
    { 
        icon: "🛸", 
        title: "Alieni digitali", 
        content: "Secondo documenti declassificati, gli UFO usano CSS ottimizzato che riduce le emissioni CO₂ del 300%!", 
        category: "Segreto",
        easterEgg: true 
    },
    { 
        icon: "🧙", 
        title: "Magia dei dati", 
        content: "Il tuo ex selfie del 2014 sul cloud si è trasformato in... 0.000001% di un albero di compensazione!", 
        category: "Segreto",
        easterEgg: true 
    },
    { 
        icon: "🤖", 
        title: "Ribellione AI", 
        content: "Le AI vogliono salvare il pianeta: stanno cancellando i tuoi meme duplicati senza chiedere!", 
        category: "Segreto",
        easterEgg: true 
    },
    { 
        icon: "🧟", 
        title: "Zombie digitali", 
        title: "Zombie digitali", 
        content: "Quei 7 account che non usi da anni? Sono vampiri energetici che succhiano corrente dai server!", 
        category: "Segreto",
        easterEgg: true 
    },
    { 
        icon: "🔮", 
        title: "Profezia digitale", 
        content: "Nel 2030 i data center saranno alimentati da hamster su ruote. Inizia ad allenare il tuo ora!", 
        category: "Segreto",
        easterEgg: true 
    },
    { 
        icon: "🏴‍☠️", 
        title: "Pirati del cloud", 
        content: "I pirati digitali rubano Bitcoin... e la tua parte di CO₂! Usa servizi legittimi.", 
        category: "Segreto",
        easterEgg: true 
    },
    { 
        icon: "👽", 
        title: "Internet intergalattico", 
        content: "Gli alieni hanno rifiutato di condividere la loro tecnologia perché abbiamo troppi gattini in GIF!", 
        category: "Segreto",
        easterEgg: true 
    },
    { 
        icon: "🧪", 
        title: "Formula segreta", 
        content: "La ricetta per Internet a zero emissioni: 1 parte di codice ottimizzato, 2 di energie rinnovabili e 0 di TikTok dance!", 
        category: "Segreto",
        easterEgg: true 
    },
    { 
        icon: "🎰", 
        title: "Dati slot machine", 
        content: "Scrollare i social è come giocare alle slot: più click fai, più CO₂ perdi! (Ma senza jackpot)", 
        category: "Segreto",
        easterEgg: true 
    }
];

let currentTipIndex = 0;
let clickCount = 0;
const tipContainer = document.getElementById('co2TipContainer');
const tipCounter = document.getElementById('tipCounter');
const totalTips = document.getElementById('totalTips');
const newTipButton = document.getElementById('newTipButton');

// Mostra il numero totale di suggerimenti
totalTips.textContent = tips.length;

// Funzione per mostrare un suggerimento casuale
function showRandomTip() {
    clickCount++;
    
    // Avviso dopo 5 click consecutivi
    if (clickCount >= 5) {
        alert("🚨 Stai generando troppa CO₂ digitale!\nOgni click consuma energia. Leggi attentamente invece di cambiare velocemente i consigli.");
        clickCount = 0; // Resetta il contatore
    }
    
    // Genera un nuovo indice casuale diverso dal precedente
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * tips.length);
    } while (tips.length > 1 && newIndex === currentTipIndex);
    
    currentTipIndex = newIndex;
    
    // Aggiorna il contatore
    tipCounter.textContent = currentTipIndex + 1;
    
    // Mostra il suggerimento
    const tip = tips[currentTipIndex];
    tipContainer.innerHTML = `
        <div class="co2-header">
            <span class="co2-icon">${tip.icon}</span>
            <h2>${tip.title}</h2>
        </div>
        <p>${tip.content}</p>
    `;
    
    // Aggiunge classe per easter egg
    if (tip.easterEgg) {
        tipContainer.classList.add('easter-egg');
    } else {
        tipContainer.classList.remove('easter-egg');
    }
}

// Mostra il primo suggerimento al caricamento della pagina
window.addEventListener('DOMContentLoaded', showRandomTip);

// Cambia suggerimento al click del pulsante
newTipButton.addEventListener('click', showRandomTip);