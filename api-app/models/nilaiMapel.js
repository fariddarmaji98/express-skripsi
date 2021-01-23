const conn = require('./connection');
const Sequelize = require('sequelize');

const nilaiMapel = conn.define('db_nilaimapels', {
    id_nilaimapel: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    kode_user: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nis: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_kelas: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_mapel: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ki1ki2_angka: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ki1ki2_predikat: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ki1ki2_antarmapel: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ki1ki2_keterangan: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ki3_angka: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ki3_predikat: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ki3_keterangan: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ki4_angka: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ki4_predikat: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ki4_keterangan: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tahun_ajaran: {
        type: Sequelize.STRING,
        allowNull: false
    },
    total_nilai: {
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

module.exports = nilaiMapel;