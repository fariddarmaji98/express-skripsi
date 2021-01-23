const models = require('../models/presensi');
const tanggal = require('../helper/tanggal');

const readPresensi = (req, res, next) => { // ? GET ALL
    models.findAll().then(data => {
        res.status(200).send({ message: 'data oresensi', data })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const createPresensi = (req, res, next) => { // ? CREATE
    models.create(req.body).then(data => {
        res.status(200).send({
            message: 'presensi penugasan',
            data
        })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const updatePresensi = (req, res, next) => { // ? UPDATE BY id_presensi
    models.update(req.body, {
        where: { id_presensi: req.body.id_presensi }
    }).then(() => {
        res.status(200).send({
            message: 'presensi diubah',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

const deletePresensi = (req, res, next) => { // ? HAPUS BY id_presensi
    models.destroy({
        where: { id_presensi: req.params.id }
    }).then(() => {
        res.status(200).send({
            message: 'presensi dihapus',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}
module.exports = { readPresensi, createPresensi, updatePresensi, deletePresensi };