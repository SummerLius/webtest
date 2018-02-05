'use strict';

// const ejs = require('ejs');
// const config = require('config');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
// const csurf = require('csurf');
const bodyParser = require('body-parser');
// const compression = require('compression');
// const log4js = require();

const sessionOptions = {
  secret: 'secret',
  name: 'session_id',
  proxy: true,
  cookie: {
    httpOnly: true,
    secure: "auto"
    // maxAge: xxx,
    // host: xxx,
    // ...
  },
  saveUninitialized: true,
  rolling: true,
  resave: false,
  store: new RedisStore({
    host: '127.0.0.1',
    port: '6379',
    db: 0,
    // pass: '',
    prefix: 'sess',
    ttl: 60 * 60 * 24// 单位：秒
  })
};

const app  = express();

// app.set('views', config.view.dir);
// app.set('view engine', config.view.engine);
// app.engine('ejs', ejs.__express);
// app.engine('html', ejs.__express);
app.disable('x-powered-by');

// app.set('trust proxy', true)//==============
// app.set('trust proxy', '172.18.0.2');//===============


// app.use(compression());
// app.use(log4js.connectLogger(log4js, config.log4js));
// app.use(express.static(config.static.dir, {maxAge: config.static.maxAge}));

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));

app.use(cookieParser());
app.use(session(sessionOptions));
// app.use(csurf(config.csrf));

let requestCount = 0;
app.use((req, res) => {
    console.log(++requestCount);

    req.headers.ip  = req.ip;
    req.headers.ips  = req.ips;
    req.headers.direct_ip = req.connection.remoteAddress;
    console.log(req.headers);

    console.log(req.protocol);
    console.log('////////////////////');

    res.end('end...');
});

app.use((error, req, res, next) => {
    console.error(error);
});

app.listen('3000','0.0.0.0', () => {
    console.log('HTTP 3000...');
});