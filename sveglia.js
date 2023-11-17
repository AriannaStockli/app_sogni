    let alarmSound = document.getElementById('alarmSound');
    let stopButton = document.getElementById('stopButton');

    function stopSound() {
    // interrompi audio
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alert('Hai interrotto la sveglia!');

    };

    // ritarda l'inizio della sveglia di tre secondi
    setTimeout(function() {
    alarmSound.play();
    }, 3000);

    // Aggiungi qui il tuo codice JavaScript
    document.addEventListener("DOMContentLoaded", function() {
    // Chiamato quando il DOM è pronto
    updateClock(); // Imposta l'orario iniziale

    // Aggiorna l'orario ogni secondo
    setInterval(updateClock, 1000);
    });

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // Formatta l'orario come "HH:MM"
    var formattedTime = padZero(hours) + ":" + padZero(minutes);

    document.getElementById("clock").innerText = formattedTime;
}

function padZero(number) {
    return (number < 10) ? "0" + number : number;
}   