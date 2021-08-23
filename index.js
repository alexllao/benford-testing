const values = require('./poblacion-municipios.json');

const digitAt = (val, index) => {
    return Math.floor(
        (
            val / Math.pow(10, Math.floor(Math.log(Math.abs(val)) / Math.LN10) - index)
        )
        % 10
    );
};

let results = {};
let total = 0;

// Si hay valores
if (values) {
    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        const firstDigit = digitAt(element.value, 0);

        if (firstDigit != 0 && !isNaN(firstDigit)) {

            if (!results[firstDigit.toString()]) {
                results[firstDigit.toString()] = 1;
            }
            else {
                results[firstDigit.toString()]++;
            }
        }
    }
}

// Calculamos la suma
for (const [, value] of Object.entries(results)) {
    total += value;
}

for (const [key, value] of Object.entries(results)) {
    results[key] = value / total * 100;
}

console.log(results);
