'use strict'

var proxyaddr = require('proxy-addr');

// const req = {
//     headers: {
//         'x-forwarded-for': '1.2, 3'
//     },
//     connection: {
//         remoteAddress: '3.3.3.3'
//     }
// };

var trustFn = proxyaddr.compile([]);

console.log(trustFn('127.0.0.1'))
