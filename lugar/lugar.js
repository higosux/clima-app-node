const axios = require('axios');


const getLugar = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '2afd0c9e3cmsha70df23d0cbaf0dp116d4bjsn78c457a9f1b4' }
    });

    const resp = await instance.get();

    if (resp.data.cod === "404") {
        throw new Error(`No hay resultado para ${direccion}`);
    }

    const data = resp.data
    const direccion = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    return {
        direccion,
        lat,
        lon

    }
}



module.exports = {
    getLugar
}