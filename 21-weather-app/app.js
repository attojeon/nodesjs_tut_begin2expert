const yargs = require('yargs');
//const geocode = reuire('weather');
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

    console.log(myAddress);
});

console.log('=========================');
console.log(myAddress);     // geocodeAddress의 aync delay에 의해 이 코드는 null을 출력합니다.

