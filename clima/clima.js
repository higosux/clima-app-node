const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5dafa04658c1df5b1f63274fd2db9f75`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}