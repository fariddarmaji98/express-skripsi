const conn = require('./connection');
const Sequelize = require('sequelize');

const mapel = conn.define('db_mapels', {
    id_mapel: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    pertemuan: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    kurikulum: {
        type: Sequelize.STRING,
        allowNull: false
    },
    kelompok: {
         type: Sequelize.ENUM('a', 'b', 'c'),
        allowNull: false
    },
    keterangan: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    timestamps: false
})

module.exports = mapel;