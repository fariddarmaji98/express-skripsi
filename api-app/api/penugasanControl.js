const models = require('../models/penugasan');
const tanggal = require('../helper/tanggal');

const readPenugasan = (req, res, next) => { // ? GET ALL
    models.findAll().then(data => {
        res.status(200).send({ message: 'data penugasan', data })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const createPenugasan = (req, res, next) => { // ? CREATE
    models.create(req.body).then(data => {
        res.status(200).send({
            message: 'guru penugasan',
            data
        })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const updatePenugasan = (req, res, next) => { // ? UPDATE BY NIP
    models.update(req.body, {
        where: { nip: req.body.nip }
    }).then(() => {
        res.status(200).send({
            message: 'penugasan diubah',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

const deletePenugasan = (req, res, next) => { // ? HAPUS BY NIP
    models.destroy({
        where: { nip: req.params.nip }
    }).then(() => {
        res.status(200).send({
            message: 'penugasan dihapus',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}
module.exports = { readPenugasan, createPenugasan, updatePenugasan, deletePenugasan };