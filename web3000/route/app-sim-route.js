'use strict';

const Router = require('express').Router;
const router  = new Router();

module.exports = router;

router.get('/favicon.ico', (req, res) => {
    res.sendFile(`${ROOT_DIR}/public/img/favicon.ico`, {}, (err) => {
        if (err) {
          return console.error(err);
        }
    });
})

router.use((req, res) => {
    
    let htmlName = 'test';

    if (req.path === '/a') {
        htmlName = 'a';
    }

    res.sendFile(`${ROOT_DIR}/public/views/${htmlName}.html`, {}, (err) => {
        if (err) {
          return console.error(err);
        }
    });
});

router.use((error, req, res, next) => {
    console.error(error);
});

console.log(require);