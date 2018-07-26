/**
 * weather.js 구현
 * 화씨 온도 => 섭씨 온도 변환함.
 * 사용법 : 
 *  $ node app.js --address='서울시 관악구'
 */
const yargs = require('yargs');
const weather = require('./weather');
const geocode = require('./geocode');

const argv = yargs.argv;        // arguments
console.log(argv.address); 
//console.log(argv._[0]);       // command

var myAddress = {
    address: '',
    latitude: 0.0,
    longitudu: 0.0
};

geocode.geocodeAddress(argv.address, (errorMsg, results) => {
    if( errorMsg ) {
        console.log( errorMsg );
    } else {
        // console.log( results.address );
        // console.log( results.latitude );
        // console.log( results.longitude );
        myAddress.address = results.address;
        myAddress.latitude = results.latitude;
        myAddress.longitudu = results.longitude;
    }
    // console.log(myAddress);
    weather.getWeather(results.latitude, results.longitude, (err, weatherResults) => {
        if( err ){
            console.log(err);
        } else {
            console.log( `현재 온도: ${weatherResults.temperature}(화씨), 체감 온도: ${weatherResults.apparentTemperature}(화씨)` );
        }
    });
});


