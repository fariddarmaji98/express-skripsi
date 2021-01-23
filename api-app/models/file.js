const conn = require('./connection');
const Sequelize = require('sequelize');

const file = conn.define('db_files', {
    id_file: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    file_path: {
        type: Sequelize.STRING,
        allowNull: false
    },
    file_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    file_format: {
        type: Sequelize.STRING,
        allowNull: false
    },
    file_kategori: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = file;