const conn = require('./connection');
const Sequelize = require('sequelize');

const siske = conn.define('db_siskes', {
    id_siske: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    nis: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_kelas: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tahun_ajaran: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = siske;