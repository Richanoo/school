console.log("hoi");

var muziekAchtergrond = document.getElementById("muziekplay");

function achtergrondMuziek() {

    const audio = new Audio("audio/autumn-lullaby.mp3");
    audio.play();
    audio.volume = 0.5;
}

function toggle() {

    var popup = document.getElementById('popup');
    popup.classList.toggle('active');

}

muziekAchtergrond.addEventListener("click", achtergrondMuziek);
/* Bronnen


Achtergrondmuziek: https://www.youtube.com/watch?v=4kae796i8nE
Code voor audio: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_get
Bron voor popup box: https://www.youtube.com/watch?v=snhpoxtLugU

*/
