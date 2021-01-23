const conn = require('./connection');
const Sequelize = require('sequelize');

const siswa = conn.define('db_siswas', {
    id_siswa: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    nis: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nama_siswa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    no_telp: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jenis_kelamin: {
        type: Sequelize.ENUM('L', 'P'),
        allowNull: false
    },
    agama: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tempat_lahir: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tanggal_lahir: {
        type: Sequelize.STRING,
        allowNull: false
    },
    alamat: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.ENUM('aktif', 'tidak aktif'),
        allowNull: false
    }
});

module.exports = siswa;