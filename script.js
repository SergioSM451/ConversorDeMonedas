function convertir() {
    var cotizacionEnPesos;
    var monedaSeleccionada = document.getElementById("currency-select").value;
    var cantidadIngresada = parseFloat(document.getElementById("amount-input").value);
    var mensaje;

    if (isNaN(cantidadIngresada) || cantidadIngresada <= 0) {
        mensaje = "Por favor ingresa una cantidad válida.";
    } else {
        mensaje = "El valor de la conversión es de: ";

        switch (monedaSeleccionada) {
            case "dolar":
                cotizacionEnPesos = 16.89;
                mensaje += "$ " + (cantidadIngresada * cotizacionEnPesos).toFixed(2) + " MXN";
                break;
            case "euro":
                cotizacionEnPesos = 18.07;
                mensaje += "€ " + (cantidadIngresada * cotizacionEnPesos).toFixed(2) + " MXN";
                break;
            case "bitcoin":
                cotizacionEnPesos = 1175514.56;
                mensaje += "BTC " + (cantidadIngresada * cotizacionEnPesos).toFixed(2) + " MXN";
                break;
            default:
                mensaje = "Por favor selecciona una moneda.";
                break;
        }
    }

    var conversionResult = document.getElementById("conversion-result");
    conversionResult.textContent = mensaje;
    conversionResult.classList.add("conversion-result");
}
