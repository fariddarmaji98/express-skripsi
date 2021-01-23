const jwt = require('jsonwebtoken');
const keySecure = 'hjkasrfety14rgnjl0pul1kj654y3i09';

const isAuth = (req, res, next) => {
    try {
        const token = req.headers.token;
        let decode = jwt.verify(token, keySecure);
        // console.log(decode);
        req.user = decode;
        next();
    }
    catch (err) {
        res.status(401).send({
            message: 'Invalid Token'
        });
    }
}

const isSiswa = (req, res, next) => { // ? diakses siswa, guru mapel, wali kelas, admin
    if ((req.user.status == 'siswa') || (req.user.status == 'guru mapel') || (req.user.status == 'wali kelas') || req.user.status == 'userTamvan') {
        next();
    }
    else {
        res.status(401).send({
            message: 'User not authorized'
        })
    }
}

const isGuru = (req, res, next) => { // ? diakses guru mapel, wali kelas, admin
    if ((req.user.status == 'guru mapel') || (req.user.status == 'wali kelas') || req.user.status == 'userTamvan') {
        next();
    }
    else {
        res.status(401).send({
            message: 'User not authorized'
        })
    }
}

const isTamvan = (req, res, next) => {
    if (req.user.status == 'userTamvan') {
        next();
    }
    else {
        res.status(401).send({
            message: 'Hayoooo jangan nakal ya.....'
        })
    }
}

module.exports = { isAuth, isGuru, isSiswa, isTamvan };