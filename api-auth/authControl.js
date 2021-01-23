const models = require('../api-app/models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keySecure = 'hjkasrfety14rgnjl0pul1kj654y3i09';
const sha1 = require('sha1');

const signIn = (req, res, next) => {
    const body = req.body;
    // console.log();
    models.findOne({
        where: {
            username: body.username,
            password: sha1(body.password)
        }
    }).then((data) => {
        // const cekLogin = bcrypt.compareSync(body.password, data.password); // ! masih false meski cocok, mungkin harus dienkripsi
        // console.log(cekLogin);
        // console.log(data);
        if (data !== null) {
            const dataLogin = {
                key: data.kode,
                username: data.username,
                status: data.status
            }
            const token = jwt.sign(dataLogin, keySecure, { expiresIn: 60 * 60 });
            if (token) {
                res.status(200).send({
                    login: true,
                    message: 'user found',
                    data: dataLogin,
                    token: token
                });
            }
        }
        else {
            res.status(200).send({
                login: false,
                message: 'user not found'
            });
        }
    }).catch(err => {
        res.status(200).send({
            login: false,
            message: err.message
        })
    })
}

// const signUp = (req, res, next) => {
//     models.create({
//         username: req.body.username,
//         password: req.body.password,
//     })
// }

module.exports = { signIn };