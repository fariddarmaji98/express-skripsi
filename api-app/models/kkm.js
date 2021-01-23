const conn = require('./connection');
const Sequelize = require('sequelize');

const kkm = conn.define('db_kkms', {
    id_kkm: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    id_mapel: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    kkm: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    k: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    c: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    b: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    sb: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false
})

module.exports = kkm;