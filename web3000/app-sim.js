'use strict';

const express = require('express');
const app  = express();

const router = require('./route/app-sim-route');

global.ROOT_DIR = __dirname;

app.use(express.static(`${ROOT_DIR}/public`));

app.use(router);

console.log();
// console.log(require.cache['E:\\资料笔记\\个人仓库\\webtest\\web3000\\node_modules\\express\\index.js']);
// console.log(require.cache);
app.listen('3000','0.0.0.0', () => {
    console.log('HTTP 3000...');
});