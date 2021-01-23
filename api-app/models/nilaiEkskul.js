const conn = require('./connection');
const Sequelize = require('sequelize');

const nilaiEkskul = conn.define('db_nilaiekskuls', {
    id_nilaiekskul: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    nis: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_siske: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_ekskul: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nilai: {
        type: Sequelize.STRING,
        allowNull: false
    },
    keterangan: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tahun_ajaran: {
        type: Sequelize.STRING,
        allowNull: false
    },
    semester: {
        type: Sequelize.ENUM('ganjil', 'genap'),
        allowNull: false
    },
    file: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = nilaiEkskul;