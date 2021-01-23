const conn = require('./connection');
const Sequelize = require('sequelize');

const kelas = conn.define('db_kelas', {
    id_kelas: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    nama_kelas: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tingkat_kelas: {
        type: Sequelize.STRING,
        allowNull: false
    },
    keterangan: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    timestamps: false
})

module.exports = kelas;