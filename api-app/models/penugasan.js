const conn = require('./connection');
const Sequelize = require('sequelize');

const penugasan = conn.define('db_penugasans', {
    nip: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    tugas: {
        type: Sequelize.ENUM('wali_kelas', 'guru_mapel'),
        allowNull: false
    },
    id_kelas: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_mapel: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    masa_berlaku: {
        type: Sequelize.STRING,
        allowNull: false
    },
    keterangan: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

module.exports = penugasan;
















//*                   -------------------------
//!                   *******     **    ******
//?                   **    **          **  **
//!                   **     **   **    ******
//?                   **     **   **   **    **
//!                   **    **    **   **    **
//?                   *************************
//*                   -------------------------
































