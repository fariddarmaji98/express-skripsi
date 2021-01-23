const models = require('../models/nilaiMapel');
const tanggal = require('../helper/tanggal');

const readNilai = (req, res, next) => { // ? GET ALL
    models.findAll({
        order: [
            ['nis', 'ASC'],
            ['id_kelas', 'ASC'],
            ['tahun_ajaran', 'DESC'],
            ['semester', 'ASC'],
            // ['id_mapel', 'ASC'],
        ]}).then(data => {
        res.status(200).send({ message: 'nilai mapel siswa', data })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const createNilai = (req, res, next) => { // ? CREATE
    models.create(req.body).then(data => {
        res.status(200).send({
            message: 'nilai mapel tersimpan',
            data
        })
    }).catch(err => {
        res.status(401).send({ message: err.message, data: [] })
    })
}

const updateNilai = (req, res, next) => { // ? UPDATE BY id_nilaimapel
    console.log(req.body.id_nilaimapel);
    // res.send('test');
    models.update(req.body, {
        where: { id_nilaimapel: req.body.id_nilaimapel }
    }).then(() => {
        res.status(200).send({
            message: 'nilai mapel diubah',
        })
    }).catch(err => {
        res.status(401).send({
            message: err.message
        })
    })
}

const deleteNilai = (req, res, next) => { // ? HAPUS BY id_nilaimapel
    models.destroy({
        where: { id_nilaimapel: req.params.id }
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