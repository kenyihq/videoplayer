//Declaramos constantes

const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');

// Eventos

// Evento del boton de play
$play.addEventListener('click', handlePlay);
function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

// Evento del boton de pause
$pause.addEventListener('click', handlePause);
function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
}

// Evento del boton de backward
$backward.addEventListener('click', handleBackward);
function handleBackward() {
    $video.currentTime -= 10;
}

// Evento del boton de forward
$forward.addEventListener('click', handleFordward);
function handleFordward() {
    $video.currentTime += 10;
}

// Evento para obtener la barra de progreso del video
$video.addEventListener('loadedmetadata', handleLoaded);
function handleLoaded() {
    $progress.max = $video.duration; 
}
// Evento para obtener el tiempo actual del video
$video.addEventListener('timeupdate', handleTimeUpdate);
function handleTimeUpdate() {
    $progress.value = $video.currentTime;
}
// Evento para obtener el tiempo en la barra de progreso
$progress.addEventListener('input', handleInput);
function handleInput() {
    $video.currentTime = $progress.value;
}