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
            <img class="imgs-tienda img-fluid" src="${prenda.imagen}" alt="${prenda.nombre}">
            <div class="tienda-nombreyprecios">
                <figcaption>${prenda.nombre}</figcaption>
                <figcaption>${prenda.precio}$</figcaption>
            </div>
        `;

        contenedorPrendas.appendChild(divPrenda);
    });
}

const selectTipo = document.querySelector('#filtro-prenda');
const selectColor = document.querySelector('#filtro-color');
const selectTalle = document.querySelector('#filtro-talle');

// Manejar eventos de cambio en los selectores
selectTipo.addEventListener('change', mostrarPrendasFiltradas);
selectColor.addEventListener('change', mostrarPrendasFiltradas);
selectTalle.addEventListener('change', mostrarPrendasFiltradas);

// // Función para mostrar las prendas filtradas en el DOM
// function mostrarPrendasFiltradas() {
//     const tipoSeleccionado = selectTipo.value;
//     const prendasFiltradas = prendas.filter(prenda => prenda.tipo === tipoSeleccionado);

//     mostrarPrendasEnDOM(prendasFiltradas);
// }

// Función para mostrar las prendas filtradas por tipo, color y talle en el DOM
function mostrarPrendasFiltradas() {
    const tipoSeleccionado = selectTipo.value;
    const colorSeleccionado = selectColor.value;
    const talleSeleccionado = selectTalle.value;

    // Filtra las prendas por tipo, color y talle seleccionados
    const prendasFiltradas = prendas.filter(prenda => 
        (tipoSeleccionado === 'prenda' || prenda.tipo === tipoSeleccionado) &&
        (colorSeleccionado === 'color' || prenda.color === colorSeleccionado) &&
        (talleSeleccionado === 'talle' || prenda.talle.includes(talleSeleccionado))
    );

    // Llama a la función para mostrar prendas en el DOM
    mostrarPrendasEnDOM(prendasFiltradas);
}