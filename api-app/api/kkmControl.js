const models = require('../models/kkm');
const tanggal = require('../helper/tanggal');

const readKkm = (req, res, next) => { // ? GET ALL
    models.findAll().then(data => {
        res.status(200).send({ message: 'data kkm', data })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const createKkm = (req, res, next) => { // ? CREATE
    models.create(req.body).then(data => {
        res.status(200).send({
            message: 'kkm tersimpan',
            data
        })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const updateKkm = (req, res, next) => { // ? UPDATE BY id_kkm
    models.update(req.body, {
        where: { id_kkm: req.body.id_kkm }
    }).then(() => {
        res.status(200).send({
            message: 'kkm diubah',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

const deleteKkm = (req, res, next) => { // ? HAPUS BY id_kkm
    models.destroy({
        where: { id_kkm: req.params.id }
    }).then(() => {
        res.status(200).send({
            message: 'kkm dihapus',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

module.exports = { readKkm, createKkm, updateKkm, deleteKkm };