const lugar = require('./lugar/lugar');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
const clima = require('./clima/clima');
const info = require('./info/clima-info');


/* lugar.getLugar(argv.direccion)
    .then(console.log);

clima.getClima(40.71, -74.01)
    .then(console.log)
    .catch(console.log);
 */

info.getInfo(argv.direccion)
    .then(console.log);