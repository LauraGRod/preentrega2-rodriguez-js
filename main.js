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

// Función para mostrar las prendas en el DOM
function mostrarPrendasEnDOM(prendas) {
    const contenedorPrendas = document.querySelector('.tienda-completa');
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

function ordenarPorColor(prendas, color) {
    console.log('Filtrando por color:', color);
    return prendas.filter(prenda => prenda.color.toLowerCase() === color.toLowerCase());
}

function ordenarPorTipo(prendas, tipo) {
    return prendas.filter(prenda => prenda.tipo.toLowerCase() === tipo.toLowerCase());
}

function ordenarPorTalle(prendas, talle) {
    return prendas.filter(prenda => prenda.talle.includes(talle.toLowerCase()));
}

const selectTipo = document.querySelector('#filtro-prenda');
const selectColor = document.querySelector('#filtro-color');
const selectTalle = document.querySelector('#filtro-talle');

// Mostrar las prendas filtradas en el DOM
function mostrarPrendasFiltradas() {
    console.log('Mostrando prendas filtradas');
    let prendasFiltradas = [...prendas];

    if (selectTipo.value !== 'prenda') {
        prendasFiltradas = ordenarPorTipo(prendasFiltradas, selectTipo.value);
    }

    if (selectColor.value !== 'prenda') {
        prendasFiltradas = ordenarPorColor(prendasFiltradas, selectColor.value);
    }

    if (selectTalle.value !== 'prenda') {
        prendasFiltradas = ordenarPorTalle(prendasFiltradas, selectTalle.value);
    }

    mostrarPrendasEnDOM(prendasFiltradas);
}

// Manejar eventos de cambio en los selectores
selectTipo.addEventListener('change', mostrarPrendasFiltradas);
selectColor.addEventListener('change', mostrarPrendasFiltradas);
selectTalle.addEventListener('change', mostrarPrendasFiltradas);
