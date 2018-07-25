const yargs = require('yargs');
//const geocode = reuire('weather');
const geocode = require('./geocode');

const argv = yargs.argv;        // arguments
console.log(argv.address); 
//console.log(argv._[0]);       // command

geocode.geocodeAddress(argv.address, (errorMsg, results) => {
    if( errorMsg ) {
        console.log( errorMsg );
    } else {
        console.log( results.address );
        console.log( results.latitude );
        console.log( results.longitude );

    }
});

