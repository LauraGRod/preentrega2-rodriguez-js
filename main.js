// Filtra las prendas por orden

function ordenarPorMayorPrecio(prendas) {
    return prendas.slice().sort((a, b) => b.precio - a.precio);
}

function ordenarPorMenorPrecio(prendas) {
    return prendas.slice().sort((a, b) => a.precio - b.precio);
}

function ordenarPorMasReciente(prendas) {
    return prendas.slice().sort((a, b) => b.id - a.id);
}

const selectOrdenar = document.querySelector('.select-ordenar');

// Evento change en select
selectOrdenar.addEventListener('change', function() {
    const valorSeleccionado = selectOrdenar.value;
    let prendasOrdenadas = [];

    if (valorSeleccionado === 'mayor-precio') {
        prendasOrdenadas = ordenarPorMayorPrecio(prendas);
    } else if (valorSeleccionado === 'menor-precio') {
        prendasOrdenadas = ordenarPorMenorPrecio(prendas);
    } else if (valorSeleccionado === 'mas-reciente') {
        prendasOrdenadas = ordenarPorMasReciente(prendas);
    }

    mostrarPrendasEnDOM(prendasOrdenadas);
});

const contenedorPrendas = document.querySelector('.tienda-completa');

// Mostrar las prendas en el DOM
function mostrarPrendasEnDOM(prendas) {
    contenedorPrendas.innerHTML = ''; // Vacía el contenedor

    prendas.forEach(prenda => {
        const divPrenda = document.createElement('div');
        divPrenda.className = 'prenda';

        divPrenda.innerHTML = `
        <div class="contenedorImagen"> 
            <img class="imgs-tienda img-fluid" src="${prenda.imagen}" alt="${prenda.nombre}">
            <button class="btn-comprar overlay" data-id="${prenda.id}">Agregar al carrito</button>
        </div>
        <div class="tienda-nombreyprecios">
            <figcaption>${prenda.nombre}</figcaption>
            <figcaption>${prenda.precio}$</figcaption>
        </div>
        `;

        // Evento mouseover mouseout para boton compra
        divPrenda.addEventListener('mouseover', function() {
            divPrenda.querySelector('.btn-comprar').style.display = 'block';
        });

        divPrenda.addEventListener('mouseout', function() {
            divPrenda.querySelector('.btn-comprar').style.display = 'none';
        });

        contenedorPrendas.appendChild(divPrenda);
    });

    // Agregar evento al botón "Agregar al carrito"
    const botonesAgregarAlCarrito = document.querySelectorAll('.btn-comprar');
    botonesAgregarAlCarrito.forEach(boton => {
        boton.addEventListener('click', function(event) {
            const id = parseInt(event.target.dataset.id);
            agregarAlCarrito(id); // Llama a la función para agregar al carrito
        });
    });
}

// Filtra las prendas por tipo, color y talle

const selectTipo = document.querySelector('#prenda');
const selectColor = document.querySelector('#color');
const selectTalle = document.querySelector('#talle');

selectTipo.addEventListener('change', mostrarPrendasFiltradas);
selectColor.addEventListener('change', mostrarPrendasFiltradas);
selectTalle.addEventListener('change', mostrarPrendasFiltradas);

function mostrarPrendasFiltradas() {
    const tipoSeleccionado = selectTipo.value;
    const colorSeleccionado = selectColor.value;
    const talleSeleccionado = selectTalle.value;

    const prendasFiltradas = prendas.filter(prenda => 
        (tipoSeleccionado === 'prenda' || prenda.tipo === tipoSeleccionado) &&
        (colorSeleccionado === 'color' || prenda.color === colorSeleccionado) &&
        (talleSeleccionado === 'talle' || prenda.talle.includes(talleSeleccionado))
    );

    mostrarPrendasEnDOM(prendasFiltradas);
}

// Carrito y funciones

const carrito = [];

function agregarAlCarrito(id) {
    const prendaEncontrada = prendas.find(prenda => prenda.id === id);
    if (prendaEncontrada) {
        carrito.push(prendaEncontrada);
        mostrarCarritoEnDOM();
    }
}

function mostrarCarritoEnDOM() {
    const divCarrito = document.getElementById('divCarrito');
    divCarrito.innerHTML = ''; // Limpiar el contenido del carrito

    carrito.forEach(prenda => {
        const divPrenda = document.createElement('div');
        divPrenda.className = 'prendaCarrito';
        divPrenda.innerHTML = `
            <img class="img-carrito" src="${prenda.imagen}" alt="${prenda.nombre}">
            <div class="info-carrito">
                <p>${prenda.nombre}</p>
                <p>${prenda.precio}$</p>
                <button class="btn-sacar" data-id="${prenda.id}">Sacar del carrito</button>
            </div>
        `;

        // Agregar evento para sacar la prenda del carrito
        const botonSacar = divPrenda.querySelector('.btn-sacar');
        botonSacar.addEventListener('click', function(event) {
            const id = parseInt(event.target.dataset.id);
            sacarDelCarrito(id);
        });

        divCarrito.appendChild(divPrenda);
    });
}

function sacarDelCarrito(id) {
    const index = carrito.findIndex(prenda => prenda.id === id);
    if (index !== -1) {
        carrito.splice(index, 1);
        mostrarCarritoEnDOM();
    }
}

