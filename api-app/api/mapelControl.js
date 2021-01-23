const models = require('../models/mapel');
const tanggal = require('../helper/tanggal');

const readMapel = (req, res, next) => { // ? GET ALL
    models.findAll().then(data => {
        res.status(200).send({ message: 'data mapel', data })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const createMapel = (req, res, next) => { // ? CREATE
    models.create(req.body).then(data => {
        res.status(200).send({
            message: 'mapel tersimpan',
            data
        })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const updateMapel = (req, res, next) => { // ? UPDATE BY id_mapel
    models.update(req.body, {
        where: { id_mapel: req.body.id_mapel }
    }).then(() => {
        res.status(200).send({
            message: 'mapel diubah',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

const deleteMapel = (req, res, next) => { // ? HAPUS BY id_kkm
    models.destroy({
        where: { id_mapel: req.params.id }
    }).then(() => {
        res.status(200).send({
            message: 'mapel dihapus',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

module.exports = { readMapel, createMapel, updateMapel, deleteMapel };