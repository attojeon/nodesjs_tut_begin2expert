const axios = require('axios');

let address = '서울시 관악구'
let encodedAddress = encodeURIComponent(address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

console.log(geocodeUrl);

axios.get(geocodeUrl).then((response) => {

    let myKey = '4230719d28c10ae7905b047f5f446ce3';
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.forecast.io/forecast/${myKey}/${lat},${lng}`;
    console.log(weatherUrl);
    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherUrl);
}).then( (response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;

    console.log(`현재온도:${temperature},   체감온도: ${apparentTemperature}`);

}).catch( (e) => {
    console.log( e);
});