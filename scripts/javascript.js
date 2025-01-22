
var contenido = document.getElementById('contenido')
var pantallanegra = document.getElementById('black')
var cargando = document.getElementById('load')


window.addEventListener('load', () => {
    setTimeout(() => {
        cargando.style.display = 'none';
        hacerVisible();
    }, 3000); // 500ms = 0.5s
});




function hacerVisible(){
    pantallanegra.style.visibility = 'hidden';
    pantallanegra.style.opacity = '0';
    pantallanegra.style.transition = 'visibility 0s 2s, opacity 2s linear';
    document.getElementById('content').style.display = 'block';
    document.body.style.overflow = 'auto';
}


