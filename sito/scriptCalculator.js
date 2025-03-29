function calculateCO2() {
    // Get input values
    // Streaming
    const streamingHours = parseFloat(document.getElementById('streaming').value) || 0;
    const streamingFactor = parseFloat(document.getElementById('streaming-quality').value);
    
    // Videoconferenze
    const videoconfHours = parseFloat(document.getElementById('videoconf').value) || 0;
    const videoconfFactor = parseFloat(document.getElementById('videoconf-quality').value);
    
    // Social Media
    const socialHours = parseFloat(document.getElementById('social').value) || 0;
    const socialPhotos = parseFloat(document.getElementById('social-photos').value) || 0;
    const socialVideos = parseFloat(document.getElementById('social-videos').value) || 0;
    
    // Calculate CO2 for each activity
    const streamingCO2 = streamingHours * streamingFactor;
    const videoconfCO2 = videoconfHours * videoconfFactor;
    const socialCO2 = (socialHours * 0.015) + (socialPhotos * 0.00015) + (socialVideos * 0.0025);
    
    // Calculate totals
    const weeklyCO2 = streamingCO2 + videoconfCO2 + socialCO2;
    const annualCO2 = weeklyCO2 * 52;
    
    // Display results
    document.getElementById('total-co2').textContent = weeklyCO2.toFixed(2);
    document.getElementById('annual-co2').textContent = annualCO2.toFixed(2);
    
    // Create activity breakdown
    let breakdownHTML = `
        <div class="activity-item"><strong>Streaming Video:</strong> ${streamingCO2.toFixed(2)} kg</div>
        <div class="activity-item"><strong>Videoconferenze:</strong> ${videoconfCO2.toFixed(2)} kg</div>
        <div class="activity-item"><strong>Social Media:</strong> ${socialCO2.toFixed(2)} kg</div>
    `;
    document.getElementById('activity-breakdown').innerHTML = breakdownHTML;
    
    // Calculate equivalents
    if (annualCO2 > 0) {
        const trees = annualCO2 / 21; // un albero assorbe ~21kg CO2/anno
        const kmCar = annualCO2 / 0.12; // un'auto media emette ~0.12kg CO2/km
        const bulbs = annualCO2 / 0.05; // una lampadina da 60W accesa per 6 ore produce ~0.05kg CO2
        
        document.getElementById('trees-equivalent').textContent = trees.toFixed(1);
        document.getElementById('car-equivalent').textContent = kmCar.toFixed(0);
        document.getElementById('bulbs-equivalent').textContent = bulbs.toFixed(0);
    } else {
        document.getElementById('trees-equivalent').textContent = "0";
        document.getElementById('car-equivalent').textContent = "0";
        document.getElementById('bulbs-equivalent').textContent = "0";
    }
    
    // Show results
    document.getElementById('empty-state').style.display = 'none';
    document.getElementById('results-content').style.display = 'block';
}