// Bloquear el clic derecho
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  
  // Bloquear la copia de contenido
  document.addEventListener('copy', function(e) {
    e.preventDefault();
  });