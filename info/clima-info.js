const clima = require('../clima/clima');
const lugar = require('../lugar/lugar');

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugar(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${coords.direccion} es de ${temp}`
    } catch (error) {
        return `No se puydo determinar el clima de ${direccion}`
    }

}

module.exports = {
    getInfo
}