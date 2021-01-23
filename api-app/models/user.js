const conn = require('./connection');
const Sequelize = require('sequelize');

const user = conn.define('db_users', {
    kode: {
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.ENUM('siswa', 'wali kelas', 'guru mapel', 'userTamvan', 'unset'),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = user;