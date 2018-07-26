const request = require('request');


/**
 * 
 * @param {*} lat 
 * @param {*} lng 
 * @param {*} callback ( errorMessage, result ): 두 인자의 순서를 주의!
 */
var getWeather = (lat, lng, callback) => {
    let myKey = '4230719d28c10ae7905b047f5f446ce3';
    console.log( myKey );
    console.log( lat );
    console.log( lng );
    request( {
        url: `https://api.forecast.io/forecast/${myKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io server');
        } else if (response.statusCode === 400 ) {
            callback('Unable to fetch weather');
        } else if ( response.statusCode === 200 ) {
            callback(undefined, {
                temperature: (body.currently.temperature - 32.0)/1.8,
                apparentTemperature: (body.currently.apparentTemperature - 32)/1.8
            });
        }
    });
};


module.exports = {
    getWeather
};