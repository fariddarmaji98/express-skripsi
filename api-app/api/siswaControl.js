const models = require('../models/siswa');
const tanggal = require('../helper/tanggal');
const Op = require('sequelize').Op;

const readSiswa = (req, res, next) => { // ? GET ALL
    models.findAll({
        order: [['createdAt', 'DESC']],
    }).then(data => {
        res.status(200).send({ message: 'data siswa', data })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const createSiswa = (req, res, next) => { // ? CREATE
    models.create(req.body).then(data => {
        res.status(200).send({
            message: 'siswa tersimpan',
            data
        })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const updateSiswa = (req, res, next) => { // ? UPDATE BY NIS
    models.update(req.body, {
        where: { nis: req.body.nis }
    }).then(() => {
        res.status(200).send({
            message: 'siswa diubah',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

const deleteSiswa = (req, res, next) => { // ? HAPUS BY nis
    models.destroy({
        where: { nis: req.params.nis }
    }).then(() => {
        res.status(200).send({
            message: 'siswa dihapus',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

module.exports = { readSiswa, createSiswa, updateSiswa, deleteSiswa };