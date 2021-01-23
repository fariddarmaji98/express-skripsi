const models = require('../models/kelas');
const tanggal = require('../helper/tanggal');

const readKelas = (req, res, next) => { // ? GET ALL
    models.findAll({
        order: [['id_kelas', 'DESC']],
    }).then(data => {
        res.status(200).send({ message: 'data kelas', data })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const createKelas = (req, res, next) => { // ? CREATE
    models.create(req.body).then(data => {
        res.status(200).send({
            message: 'kelas tersimpan',
            data
        })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const updateKelas = (req, res, next) => { // ? UPDATE BY id_kelas
    models.update(req.body, {
        where: { id_kelas: req.body.id_kelas }
    }).then(() => {
        res.status(200).send({
            message: 'kelas diubah',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

const deleteKelas = (req, res, next) => { // ? HAPUS BY id_kelas
    models.destroy({
        where: { id_kelas: req.params.id }
    }).then(() => {
        res.status(200).send({
            message: 'kelas dihapus',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

module.exports = { readKelas, createKelas, updateKelas, deleteKelas };