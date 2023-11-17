
window.frames["#iframepdf"].document.oncontextmenu = function(){ return false; };// Bloquear el clic derecho
window.frames["iframepdf"].document.oncontextmenu = function(){ return false; };
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  
  // Bloquear la copia de contenido
  document.addEventListener('copy', function(e) {
    e.preventDefault();
  });



  jQuery('#iframepdf')-load(function(){
    jQuery('iframepdf').contents().find("#toolbarViewerRight").hide();
}
)

  