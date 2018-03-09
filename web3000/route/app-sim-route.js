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

router.get('/test.txt', (req, res) => {
    res.set({
        // 'content-type': 'application/octet-stream;charset=utf-8',
        'Content-Disposition': "attachment;filename=english.txt;filename*=UTF-8''%5b%e6%b5%8b%e8%af%95%5d%e3%80%90%e6%b5%8b%e8%af%95%e3%80%91.txt"
        // 'Content-Disposition': 'attachment;filename=%5b%e6%b5%8b%e8%af%95%5d%e3%80%90%e6%b5%8b%e8%af%95%e3%80%91.txt'
        // 'Content-Disposition': 'attachment;filename="summerlius.txt"'
    });
    res.sendFile(`${ROOT_DIR}/public/img/[测试]【测试】.txt`, {}, (err) => {
        if (err) {
          return console.error(err);
        }
    });
})

router.use((req, res) => {
    
    let htmlName = 'test';

    if (req.path === '/a') {
        htmlName = 'a';
    } else if (req.path === '/guan1') {
        htmlName = '/guan1';
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