import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import index from './routes/index';
import api from './routes/api';
import debug from 'debug';
debug('server:server');
import http from 'http';
import mongoose from 'mongoose';
import chalk from 'chalk';
const port = config.serverPort;
const app = express();
import config from './config/config';
const uri = `mongodb://localhost:${config.mongoPort}`;
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
}).catch((err) => console.log('error connecting to db!'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use((req, res, next) => {
    if(req.app.get('env') === 'development') {
        app.use(logger('dev'));
        next();
    }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/api', api);
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
// helper functions
 const onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};
 const onListening = () => {
     console.log(chalk.bold.cyan(`Ready! Running on port ${config.serverPort}.`))
};
server.on('error', onError);
server.on('listening', onListening);