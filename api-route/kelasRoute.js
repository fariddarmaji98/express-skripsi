const router = require('express').Router();
const authCheck = require('../api-auth/authCheck');
const control = require('../api-app/api/kelasControl');
// const users = require('./Route');

router.get('/', authCheck.isSiswa, control.readKelas);
router.post('/add', authCheck.isTamvan, control.createKelas);
router.put('/change', authCheck.isTamvan, control.updateKelas);
router.delete('/dell/:id', authCheck.isTamvan, control.deleteKelas);

module.exports = router;