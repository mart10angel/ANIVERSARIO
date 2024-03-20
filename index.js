document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('miAudio');
  if (audio !== null) {
    audio.play();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('miAudio');
  if (audio !== null) {
    // Verificar si hay un estado de reproducción guardado en el almacenamiento local
    if (localStorage.getItem('audioPlaybackPosition')) {
      // Obtener la posición de reproducción guardada
      var playbackPosition = parseFloat(localStorage.getItem('audioPlaybackPosition'));
      // Configurar la posición de reproducción del audio
      audio.currentTime = playbackPosition;
    }
    // Reproducir el audio
    audio.play();
    
    // Guardar el estado de reproducción actual en el almacenamiento local al pausar el audio
    audio.addEventListener('pause', function() {
      localStorage.setItem('audioPlaybackPosition', audio.currentTime);
    });
  }
});