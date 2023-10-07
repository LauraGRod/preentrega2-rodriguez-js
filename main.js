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

// Manejar el evento de cambio en el select
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

// Función para mostrar las prendas en el DOM
function mostrarPrendasEnDOM(prendas) {
    contenedorPrendas.innerHTML = ''; // Vacía el contenedor

    prendas.forEach(prenda => {
        const divPrenda = document.createElement('div');
        divPrenda.className = 'prenda';

        divPrenda.innerHTML = `
        <div class="contenedorImagen"> 
        <img class="imgs-tienda img-fluid" src="${prenda.imagen}" alt="${prenda.nombre}">
        <button class="btn-comprar overlay">Comprar</button>
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
