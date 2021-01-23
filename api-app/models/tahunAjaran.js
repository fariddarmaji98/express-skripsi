const conn = require('./connection');
const Sequelize = require('sequelize');

const tahunAjar = conn.define('db_tahunajarans', {
    tahun_ajaran: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    }
}, {
    timestamps: false
})

module.exports = tahunAjar;