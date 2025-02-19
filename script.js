function mostrarContenido(tema) {
    const contenido = document.getElementById("contenido");
    const textos = {
        1: "<h2>¿Qué es el fentanilo?</h2><p>El fentanilo es un opioide sintético muy potente...</p><img src='img/tema1.jpg' alt='Tema 1'>",
        2: "<h2>Efectos en el cuerpo</h2><p>El fentanilo afecta el sistema nervioso...</p><img src='img/tema2.jpg' alt='Tema 2'>",
        3: "<h2>Cómo se consume</h2><p>Se presenta en parches, inyecciones, píldoras...</p><img src='img/tema3.jpg' alt='Tema 3'>",
        4: "<h2>Consecuencias del abuso</h2><p>El consumo excesivo puede llevar a sobredosis...</p><img src='img/tema4.jpg' alt='Tema 4'>",
        5: "<h2>Tratamientos disponibles</h2><p>Existen terapias como la metadona y buprenorfina...</p><img src='img/tema5.jpg' alt='Tema 5'>",
        6: "<h2>Uso médico del fentanilo</h2><p>En hospitales se usa para tratar dolores intensos...</p><img src='img/tema6.jpg' alt='Tema 6'>",
        7: "<h2>Impacto social</h2><p>El tráfico de fentanilo ha afectado a muchas comunidades...</p><img src='img/tema7.jpg' alt='Tema 7'>",
        8: "<h2>Cómo prevenir su abuso</h2><p>Educación y campañas son claves para la prevención...</p><img src='img/tema8.jpg' alt='Tema 8'>",
        9: "<h2>Leyes y regulaciones</h2><p>El fentanilo es una sustancia controlada en muchos países...</p><img src='img/tema9.jpg' alt='Tema 9'>",
        10: "<h2>Testimonios de recuperación</h2><p>Muchas personas han logrado salir del abuso...</p><img src='img/tema10.jpg' alt='Tema 10'>"
    };
    
    contenido.innerHTML = textos[tema] || "<h2>Información no encontrada</h2>";
}
