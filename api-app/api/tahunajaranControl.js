const models = require('../models/tahunAjaran');
const tanggal = require('../helper/tanggal');

const readTAjaran = (req, res, next) => { // ? GET ALL
    models.findAll().then(data => {
        res.status(200).send({ message: 'data tahun ajaran', data })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const createTAjaran = (req, res, next) => { // ? CREATE
    models.create(req.body).then(data => {
        res.status(200).send({
            message: 'tahun ajaran tersimpan',
            data
        })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const updateTAjaran = (req, res, next) => { // ? UPDATE BY tahun ajaran
    models.update(req.body, {
        where: { tahun_ajaran: req.params.tahunajaran }
    }).then(() => {
        res.status(200).send({
            message: 'tahun ajaran diubah',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

const deleteTAjaran = (req, res, next) => { // ? HAPUS BY tahun_ajaran
    models.destroy({
        where: { tahun_ajaran: req.params.tahunajaran }
    }).then(() => {
        res.status(200).send({
            message: 'tahun ajaran dihapus',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

module.exports = { readTAjaran, createTAjaran, updateTAjaran, deleteTAjaran };