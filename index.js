// var express = require('express');
// var app = express();
// app.get('/', function(req, res) {
//     res.send('Hello World!!!!!!!!!!!!!!!!!!!!');
// });
// var port = process.env.PORT || 3000;
// app.listen(port);
// console.log('Listening on localhost:'+ port);

// ? load node_modules
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();

// ? app.use midleware
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ? route by load file
const authCheck = require('./api-auth/authCheck');
const authRoute = require('./api-route/authRoute'); app.use('/login', authRoute);
const guruRoute = require('./api-route/guruRoute'); app.use('/guru', authCheck.isAuth, guruRoute);
const userRoute = require('./api-route/userRoute'); app.use('/user', authCheck.isAuth, userRoute);
const siswaRoute = require('./api-route/siswaRoute'); app.use('/siswa', authCheck.isAuth, siswaRoute);
const fileRoute = require('./api-route/fileRoute'); app.use('/file', authCheck.isAuth, fileRoute);
const kelasRoute = require('./api-route/kelasRoute'); app.use('/kelas', authCheck.isAuth, kelasRoute);
const kkmRoute = require('./api-route/kkmRoute'); app.use('/kkm', authCheck.isAuth, kkmRoute);
const mapelRoute = require('./api-route/mapelRoute'); app.use('/mapel', authCheck.isAuth, mapelRoute);
const nilaiekskulRoute = require('./api-route/nilaiekskulRoute'); app.use('/nilaiekskul', authCheck.isAuth, nilaiekskulRoute);
const nilaimapelRoute = require('./api-route/nilaimapelRoute'); app.use('/nilaimapel', authCheck.isAuth, nilaimapelRoute);
const nilaisikapRoute = require('./api-route/nilaisikapRoute'); app.use('/nilaisikap', authCheck.isAuth, nilaisikapRoute);
const penugasanRoute = require('./api-route/penugasanRoute'); app.use('/penugasan', authCheck.isAuth, penugasanRoute);
const presensiRoute = require('./api-route/presensiRoute'); app.use('/presensi', authCheck.isAuth, presensiRoute);
const siskeRoute = require('./api-route/siskeRoute'); app.use('/siske', authCheck.isAuth, siskeRoute);
const tajaranRoute = require('./api-route/tahunajaranRoute'); app.use('/tahunajaran', authCheck.isAuth, tajaranRoute);
const queryRoute = require('./api-route/queryRoute'); app.use('/query', authCheck.isAuth, queryRoute);

app.get('/', function(req, res) {
    res.send('Create by CODE.v');
});

// ? listen port
const port = process.env.PORT || 3000;
app.listen(port);
// console.log('Listening on localhosts:'+ port);