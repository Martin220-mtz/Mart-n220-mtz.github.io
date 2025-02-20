function mostrarSeccion(numero) {
    // Oculta todas las secciones
    let secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.style.display = 'none');

    // Muestra solo la sección seleccionada
    document.getElementById(`seccion${numero}`).style.display = 'block';
}

// Muestra la primera sección al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    mostrarSeccion(1);
});
