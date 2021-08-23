const values = require('./data/poblacion-municipios.json');

// Diccionario donde dejaremos los datos
let results = {};

// Si hay valores
if (values) {
    for (let i = 0; i < values.length; i++) {

        const { value } = values[i];

        // Obtenemos primer dígito
        const firstDigit = value.toString()[0];

        // Si el primer dígito no empieza por cero
        if (firstDigit !== 0) {

            if (!results[firstDigit.toString()]) {
                results[firstDigit.toString()] = 1;
            }
            else {
                results[firstDigit.toString()]++;
            }
        }
    }
}

// Calculamos el total de resultados
const total = Object.keys(results).reduce((sum, key) => sum + parseFloat(results[key] || 0), 0);



// Calculamos porcentaje de la aparición de cada primer dígito
for (const [key, value] of Object.entries(results)) {
    results[key] = value / total * 100;
}

// Mostramos resultados
console.log(total2);
