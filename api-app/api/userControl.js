const models = require('../models/user');
const sha1 = require('sha1');
const tanggal = require('../helper/tanggal');
const Op = require('sequelize').Op;

const readUser = (req, res, next) => { // ? GET ALL
    models.findAll({
        where: { status: { [Op.not]: 'userTamvan' }
        }
    }).then(data => {
        res.status(200).send({ message: 'data user', data })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const createUser = (req, res, next) => { // ? CREATE
    // body = req.body;
    req.body.password = sha1(req.body.password);
    // console.log(body);
    models.create(req.body).then(data => {
        res.status(200).send({
            message: 'user tersimpan',
            data
        })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const updateUser = (req, res, next) => { // ? UPDATE BY KODE
    req.body.password = sha1(req.body.password);
    models.update(req.body, {
        where: { kode: req.body.kode }
    }).then(() => {
        res.status(200).send({
            message: 'user diubah',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

const deleteUser = (req, res, next) => { // ? HAPUS BY KODE
    models.destroy({
        where: { kode: req.params.kode }
    }).then(() => {
        res.status(200).send({
            message: 'user dihapus',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

module.exports = { readUser, createUser, updateUser, deleteUser };