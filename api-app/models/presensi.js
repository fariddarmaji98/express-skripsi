const conn = require('./connection');
const Sequelize = require('sequelize');

const presensi = conn.define('db_presens', {
    id_presensi: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    nis: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    kode_user: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_kelas: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_mapel: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    semester: {
        type: Sequelize.ENUM('ganjil', 'genap'),
        allowNull: false,
    },
    jumlah_hadir: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    jumlah_ijin: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    jumlah_alpha: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    jumlah_pertemuan: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    tahun_ajaran: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }
})

module.exports = presensi;