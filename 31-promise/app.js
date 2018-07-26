/**
 * New geocode using Promise
 */

const request = require('request');

console.log('App started');

/**
 * 
 * @param {*} address 
 * callback 함수를 호출하는 것이 아니기 때문에 callback function의 입력 인자 및 그 순서를 고려하는 과정이 불필요함. 결과 값에 주목!!!
 */
var geocode = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if( error ) {
                reject('Unable to connect to Google servers.');
            } else if( body.status === 'ZERO_RESULT') {
                reject('Unable to find that address.');
            } else if( body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};


/**
 * success: location 객체가 리턴됨.
 * fail: errorMessage 가 리턴됨. 
 */
geocode('서울시').then( (location) => {
    // undefined : skip fileter func
    // 2: with indentation of 2 space inside an object, tells to show on multiple lines.
    console.log(JSON.stringify(location, undefined, 2));    
}, (errorMessage)=> {
    console.log(errorMessage);
});


console.log('App ended.');