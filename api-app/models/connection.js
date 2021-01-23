const Sequelize = require('sequelize');

const conn = new Sequelize('portalsk_erapor', 'portalsk_smuh', 'smuhw0n0g1r1', {
    host: 'localhost',
    // host: '103.147.154.37',
    post: '3306',
    dialect: 'mariadb',
    dialectOptions: {
        useUTC: false,
        timezone: 'Etc/GMT+7'
    }
});

conn.authenticate().then(() => {
    console.log('++=================++');
    console.log('++    Terhubung    ++');
    console.log('++=================++');
}).catch(err => {
    console.log('++=================++');
    console.log('++ Gagal: ' + err.message);
    console.log('++=================++');
})

module.exports = conn;