// Obtenemos el primer dígito de un Entero
const digitAt = (val, index) => {
    return Math.floor(
        (
            val / Math.pow(10, Math.floor(Math.log(Math.abs(val)) / Math.LN10) - index)
        )
        % 10
    );
};

module.exports = { digitAt };