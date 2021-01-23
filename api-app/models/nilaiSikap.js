const conn = require('./connection');
const Sequelize = require('sequelize');

const nilaiSikap = conn.define('db_nilaisikaps', {
    id_nilaisikap: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    nis: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_siske: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    kategori: {
        type: Sequelize.ENUM('kelakuan', 'kerajinan', 'kebersihan_kerapihan', ''),
        allowNull: false
    },
    nilai: {
        type: Sequelize.STRING,
        allowNull: false
    },
    keterangan: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tahun_ajaran: {
        type: Sequelize.STRING,
        allowNull: false
    },
    semester: {
        type: Sequelize.ENUM('ganjil', 'genap'),
        allowNull: false
    }
})

module.exports = nilaiSikap;