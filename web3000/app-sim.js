'use strict';

const express = require('express');
const app  = express();

const router = require('./route/app-sim-route');

global.ROOT_DIR = __dirname;

app.use(express.static(`${ROOT_DIR}/public`));

app.use(router);

app.listen('3000','0.0.0.0', () => {
    console.log('HTTP 3000...');
});