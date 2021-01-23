const models = require('../models/file');
const tanggal = require('../helper/tanggal');

const readFile = (req, res, next) => { // ? GET ALL
    models.findAll().then(data => {
        res.status(200).send({ message: 'data file', data })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const createFile = (req, res, next) => { // ? CREATE
    models.create(req.body).then(data => {
        res.status(200).send({
            message: 'file tersimpan',
            data
        })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const updateFile = (req, res, next) => { // ? UPDATE BY id_file
    models.update(req.body, {
        where: { id_file: req.body.id_file }
    }).then(() => {
        res.status(200).send({
            message: 'file diubah',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

const deleteFile = (req, res, next) => { // ? HAPUS BY id_file
    models.destroy({
        where: { id_file: req.params.id }
    }).then(() => {
        res.status(200).send({
            message: 'file dihapus',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

module.exports = { readFile, createFile, updateFile, deleteFile };