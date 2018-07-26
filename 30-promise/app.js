/**
 * Promise Test
 */

console.log('App started');

var somePromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('Success: It works!!!');
        //reject('Error: There are some problems');
    }, 2500 );
});


somePromise.then( (message) => {
    console.log( message );
}, (errMessage) => {
    console.log( errMessage );
});

// function declaration type #1
// function asyncAdd(a, b) {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             if( typeof(a) === 'number' && typeof(b) === 'number') {
//                 resolve( a + b );
//             } else {
//                 reject('Error : type error');
//             }
//         }, 3000);
//     });
// };

// function declaration type #2
// var asyncAdd = function(a, b) {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             if( typeof(a) === 'number' && typeof(b) === 'number') {
//                 resolve( a + b );
//             } else {
//                 reject('Error : type error');
//             }
//         }, 3000);
//     });
// };

function declaration type #3
var asyncAdd = (a, b) => {
    return new Promise( (resolve, reject) => {
       setTimeout( () => {
           if( typeof(a) === 'number' && typeof(b) === 'number') {
               resolve( a + b );
           } else {
               reject('Error : type error');
           }
       }, 3000);
   });    
};

asyncAdd(10, 20).then( (ret) => {
    console.log('Result: ', ret);
}, (errMessage) => {
    console.log(errMessage);
});


console.log('App ended.');