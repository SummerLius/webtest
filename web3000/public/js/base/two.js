
// define(['require', 'one'], function() {

//     console.log('Ref: two');


//     return function() {
//         console.log('module two result!!');
//     }
// });

define(function(require, exports, module) {
    var one = require('one');
    console.log(one);

    console.log('Ref: two');

    // console.log(require);
    // console.log(exports);
    // console.log(module);


    return function() {
        console.log('module two result!!');
    }
});
