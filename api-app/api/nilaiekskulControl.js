const models = require('../models/nilaiEkskul');
const tanggal = require('../helper/tanggal');

const readNilai = (req, res, next) => { // ? GET ALL
    models.findAll().then(data => {
        res.status(200).send({ message: 'nilai ekskul siswa', data })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const createNilai = (req, res, next) => { // ? CREATE
    models.create(req.body).then(data => {
        res.status(200).send({
            message: 'nilai ekskul tersimpan',
            data
        })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const updateNilai = (req, res, next) => { // ? UPDATE BY id_nilaiekskul
    models.update(req.body, {
        where: { id_nilaiekskul: req.body.id_nilaiekskul }
    }).then(() => {
        res.status(200).send({
            message: 'nilai ekskul diubah',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

const deleteNilai = (req, res, next) => { // ? HAPUS BY id_nilaiekskul
    models.destroy({
        where: { id_nilaiekskul: req.params.id }
    }).then(() => {
        res.status(200).send({
            message: 'nilai ekskul dihapus',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

module.exports = { readNilai, createNilai, updateNilai, deleteNilai };