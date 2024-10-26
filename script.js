document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.contacto__formulario').addEventListener('submit', function (event) {
        event.preventDefault(); // Previene el envío del formulario

        // Función para limpiar mensajes de error
        const limpiarErrores = () => {
            errorNombre.textContent = '';
            errorcorreo.textContent = '';
            errorasunto.textContent = '';
            errormensaje.textContent = '';
            errorNombre.style.display = 'none';
            errorcorreo.style.display = 'none';
            errorasunto.style.display = 'none';
            errormensaje.style.display = 'none';
        };

        // Función para mostrar errores
        const mostrarError = (elemento, mensaje) => {
            elemento.textContent = mensaje;
            elemento.style.display = 'block';
        };

        // Variables de entrada
        const nombreInput = document.getElementById('nombre');
        const errorNombre = document.getElementById('error-nombre');
        const nombreValue = nombreInput.value.trim();

        const correoInput = document.getElementById('correo');
        const errorcorreo = document.getElementById('error-correo');
        const correoValue = correoInput.value.trim();

        const asuntoInput = document.getElementById('asunto');
        const errorasunto = document.getElementById('error-asunto');
        const asuntoValue = asuntoInput.value.trim();

        const mensajeInput = document.getElementById('mensaje');
        const errormensaje = document.getElementById('error-mensaje');
        const mensajeValue = mensajeInput.value.trim();

        // Limpiar mensajes de error previos
        limpiarErrores();

        // Validación del campo Nombre
        if (nombreValue === '') {
            mostrarError(errorNombre, 'El campo Nombre no debe estar en blanco.');
            return;
        }

        if (nombreValue.length > 50) {
            mostrarError(errorNombre, 'El nombre no debe exceder los 50 caracteres.');
            return;
        }

        // Validación del campo Correo
        if (correoValue === '') {
            mostrarError(errorcorreo, 'El campo Correo no debe estar en blanco.');
            return;
        }

        // Validación del campo asunto
        if (asuntoValue === '') {
            mostrarError(errorasunto, 'El campo Asunto no debe estar en blanco.');
            return;
        }

        if (asuntoValue.length > 50) {
            mostrarError(errorasunto, 'El Asunto no debe exceder los 50 caracteres.');
            return;
        }

        // Validación del campo TextArea
        if (mensajeValue === '') {
            mostrarError(errormensaje, 'El campo Mensaje no debe estar en blanco.');
            return;
        }

        if (mensajeValue.length > 300) {
            mostrarError(errormensaje, 'El Mensaje no debe exceder los 300 caracteres.');
            return;
        }

        alert('Formulario enviado con éxito!');
    });
});
