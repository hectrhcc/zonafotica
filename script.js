document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.grid img');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const closeButton = document.querySelector('.close');
    const banner = document.querySelector('.banner');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', () => {
            modal.style.display = 'block'; // Muestra el modal
            modalImg.src = imagen.src; // Establece la imagen del modal
            banner.style.zIndex = '1'; // Cambia el z-index del banner para que quede detrás del modal
            document.body.classList.add('modal-open'); // Agrega la clase al body
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Oculta el modal al hacer clic en el botón de cierre
        document.body.classList.remove('modal-open'); // Remueve la clase del body
        banner.style.zIndex = '2'; // Restaura el z-index original del banner al cerrar el modal
        
    });


    $(document).ready(function() {
        var colaboradores = $(".colaborador");
        var numColaboradores = colaboradores.length;
        var angulo = 360 / numColaboradores;
        var radio = 180;

        colaboradores.each(function(index) {
            var radianes = (angulo * index * Math.PI) / 180;
            var posicionX = Math.cos(radianes) * radio + 200; // 200 es el centro del contenedor
            var posicionY = Math.sin(radianes) * radio + 200;

            $(this).css({
                left: posicionX + "px",
                top: posicionY + "px"
            });
        });
    });
});
