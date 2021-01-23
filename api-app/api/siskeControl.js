const models = require('../models/siske');
const tanggal = require('../helper/tanggal');

const readSiske = (req, res, next) => { // ? GET ALL
    models.findAll().then(data => {
        res.status(200).send({ message: 'data siske', data })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const createSiske = (req, res, next) => { // ? CREATE
    models.create(req.body).then(data => {
        res.status(200).send({
            message: 'siske tersimpan',
            data
        })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const updateSiske = (req, res, next) => { // ? UPDATE BY id_siske
    models.update(req.body, {
        where: { id_siske: req.body.id_siske }
    }).then(() => {
        res.status(200).send({
            message: 'siske diubah',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

const deleteSiske = (req, res, next) => { // ? HAPUS BY id_siske
    models.destroy({
        where: { id_siske: req.params.id }
    }).then(() => {
        res.status(200).send({
            message: 'siske dihapus',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

module.exports = { readSiske, createSiske, updateSiske, deleteSiske };