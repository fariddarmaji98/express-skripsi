const conn = require('./connection');
const Sequelize = require('sequelize');

const guru = conn.define('db_gurus', {
    id_guru: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    nip: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nama: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    no_telp: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jenis_kelamin: {
        type: Sequelize.ENUM('L', 'P'),
        allowNull: false
    }, //*enum L/P
    agama: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tempat_lahir: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tanggal_lahir: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ijazah: {
        type: Sequelize.STRING,
        allowNull: true
    },
    alamat: {
        type: Sequelize.STRING,
        allowNull: true
    },
    foto: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // createdAt: {
    //     // type: Sequelize.DATE,
    //     type: Sequelize.STRING,
    //     // defaultVelue: Sequelize.NOW
    //     allowNull: false
    // },
    // updatedAt: {
    //     // type: Sequelize.DATE,
    //     type: Sequelize.STRING,
    //     // defaultVelue: Sequelize.NOW
    //     allowNull: false
    // }
});

module.exports = guru;