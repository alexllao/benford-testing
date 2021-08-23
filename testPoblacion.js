// Cargamos datos
const values = require('./data/poblacion-municipios-2015.json');

// Diccionario donde dejaremos los datos
let results = {};

// Si hay valores
if (values && values.length) {
    for (let i = 0; i < values.length; i++) {

        // Extraemos valor
        const { value } = values[i];

        // Obtenemos primer dígito
        const firstChar = value.toString()[0];

        // Contamos el número de apariciones de cada primer dígito (siempre que no sea nulo)
        if (firstChar !== "0") { results[firstChar] ? results[firstChar]++ : results[firstChar] = 1; }
    }
}

// Calculamos el total de resultados
const total = Object.keys(results).reduce((sum, key) => sum + parseFloat(results[key] || 0), 0);

// Calculamos porcentaje de la aparición de cada primer dígito
for (const [key, value] of Object.entries(results)) {
    results[key] = value / total * 100;
}

// Mostramos resultados
console.log(results);