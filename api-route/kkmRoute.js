const router = require('express').Router();
const authCheck = require('../api-auth/authCheck');
const control = require('../api-app/api/kkmControl');
// const users = require('./Route');

router.get('/', authCheck.isSiswa, control.readKkm);
router.post('/add', authCheck.isTamvan, control.createKkm);
router.put('/change', authCheck.isTamvan, control.updateKkm);
router.delete('/dell/:id', authCheck.isTamvan, control.deleteKkm);

module.exports = router;