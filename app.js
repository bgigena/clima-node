const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener su clima',
        demand: true
    }
}).argv;
/* 
lugar.getLugarLatLng(argv.direccion)
    .then(console.log);

clima.getClima(-34.919998, -57.959999)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion, lat, lng) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }


}

getInfo(argv.direccion, argv.lat, argv.lng)
    .then(console.log)
    .catch(console.log);