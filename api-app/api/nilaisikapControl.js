const models = require('../models/nilaiSikap');
const tanggal = require('../helper/tanggal');

const readNilai = (req, res, next) => { // ? GET ALL
    models.findAll().then(data => {
        res.status(200).send({ message: 'nilai sikap siswa', data })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const createNilai = (req, res, next) => { // ? CREATE
    models.create(req.body).then(data => {
        res.status(200).send({
            message: 'nilai sikap tersimpan',
            data
        })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const updateNilai = (req, res, next) => { // ? UPDATE BY id_nilaisikap
    models.update(req.body, {
        where: { id_nilaisikap: req.body.id_nilaisikap }
    }).then(() => {
        res.status(200).send({
            message: 'nilai sikap diubah',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

const deleteNilai = (req, res, next) => { // ? HAPUS BY id_nilaisikap
    models.destroy({
        where: { id_nilaisikap: req.params.id }
    }).then(() => {
        res.status(200).send({
            message: 'nilai mapel dihapus',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

module.exports = { readNilai, createNilai, updateNilai, deleteNilai };