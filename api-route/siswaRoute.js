const router = require('express').Router();
const authCheck = require('../api-auth/authCheck');
const control = require('../api-app/api/siswaControl');
// const users = require('./Route');

router.get('/', authCheck.isSiswa, control.readSiswa);
router.post('/add', authCheck.isTamvan, control.createSiswa);
router.put('/change', authCheck.isTamvan, control.updateSiswa);
router.delete('/dell/:nis', authCheck.isTamvan, control.deleteSiswa);

module.exports = router;