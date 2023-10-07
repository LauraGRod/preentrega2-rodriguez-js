const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const numPedidoInput = document.getElementById('num-pedido');
const mensajeInput = document.getElementById('mensaje');
const enviarBtn = document.getElementById('enviarBtn');

// Evento boton enviar
enviarBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const email = emailInput.value;
    const numPedido = numPedidoInput.value;
    const mensaje = mensajeInput.value;

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