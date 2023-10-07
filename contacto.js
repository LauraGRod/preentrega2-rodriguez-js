// Obtén referencias a los elementos del DOM
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const numPedidoInput = document.getElementById('num-pedido');
const mensajeInput = document.getElementById('mensaje');
const enviarBtn = document.getElementById('enviarBtn');

// Agrega un evento de clic al botón "Enviar"
enviarBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const email = emailInput.value;
    const numPedido = numPedidoInput.value;
    const mensaje = mensajeInput.value;

    // Verifica si se ingresaron datos
    if (nombre && apellido && email && numPedido && mensaje) {
        Swal.fire({
            icon: 'success',
            title: '¡Su mensaje fue enviado con éxito!',
            text: 'Nos pondremos en contacto.'
        });

        const contacto = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            numPedido: numPedido,
            mensaje: mensaje
        };

        localStorage.setItem('contacto', JSON.stringify(contacto));

        nombreInput.value = '';
        apellidoInput.value = '';
        emailInput.value = '';
        numPedidoInput.value = '';
        mensajeInput.value = '';
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Por favor, complete todos los campos.'
        });
    }
});