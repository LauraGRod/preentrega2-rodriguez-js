alert("¡Bienvenido a Atelier!")

let compras = [];
let totalCompras = 0;

const elegirPrenda = () => {
    let continuarCompra = false;

    do {
        let prenda = '';
        let cantidad = 0;
        let talle = '';
        let color = '';
        let precio = 0;
        let subtotal = 0;

        prenda = prompt('¿Qué prenda le gustaría comprar: tapado, jean, sweater?').toUpperCase();

        switch (prenda) {
            case 'TAPADO':
                precio = 12000;
                break;
            case 'JEAN':
                precio = 8000;
                break;
            case 'SWEATER':
                precio = 6000;
                break;
            default:
                alert('Ingrese una prenda disponible');
                continue;
        
          while (prenda !== 'TAPADO' && prenda !== 'JEAN' && prenda !== 'SWEATER') {
            prenda = prompt('Ingrese una prenda disponible: tapado, jean o sweater.').toUpperCase();
          }
        }
        console.log(prenda)

        talle = prompt('¿En qué talle: S, M o L?').toUpperCase();

        switch (talle) {
            case 'S':
            case 'M':
            case 'L':
                break;
            default:
                alert('Ingrese un talle disponible');
                continue;

          while (talle !== 'S' && talle !== 'M' && talle !== 'L') {
            talle = prompt('Ingrese un talle disponible: S, M o L.').toUpperCase();
          }
        }
        console.log(talle)

        color = prompt('¿De qué color: blanco, azul o beige?').toUpperCase();

        switch (color) {
            case 'BLANCO':
            case 'AZUL':
            case 'BEIGE':
                break;
            default:
                alert('Ingrese un color disponible');
                continue;

          while (color !== 'BLANCO' && color !== 'AZUL' && color !== 'BEIGE') {
            color = prompt('Ingrese un color disponible: blanco, azul o beige.').toUpperCase();
          }
        }
        console.log(color)

        cantidad = Number(prompt('¿Cuántos desea comprar?'));

        if (isNaN(cantidad)) {
            alert('Ingrese un número correcto');
            continue;
        }

        subtotal = precio * cantidad;
        totalCompras += subtotal;

        console.log(totalCompras)

        const compra = {
            prenda: prenda,
            talle: talle,
            color: color,
            cantidad: cantidad,
            subtotal: subtotal
        };

        compras.push(compra);

        continuarCompra = confirm('¿Le gustaría agregar algo más a su compra?');

    } while (continuarCompra);

    return totalCompras;
}

const aplicarDescuento = (totalCompras) => {
    let metodoPago = '';
    metodoPago = prompt('Seleccione su método de pago: efectivo o tarjeta').toUpperCase();
    const descuento = 0.80;

    if (metodoPago === 'EFECTIVO') {
        return totalCompras * descuento;
    } else if (metodoPago === 'TARJETA') {
        return totalCompras;
    } else {
        alert('Seleccione un método de pago válido');
        return 0;
    }
}

const compraFinal = (compras, precioFinal) => {
    alert('Detalle de sus compras:\n\n' + compras.map(compra => `${compra.cantidad} ${compra.prenda} talle ${compra.talle} de color ${compra.color} - Subtotal: $${compra.subtotal}`).join('\n') + '\n\nEl valor total de todas sus compras es: $' + precioFinal);
}

totalCompras = elegirPrenda();

const precioFinal = aplicarDescuento(totalCompras);

compraFinal(compras, precioFinal);

