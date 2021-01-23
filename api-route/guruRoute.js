const router = require('express').Router();
const authCheck = require('../api-auth/authCheck');
const control = require('../api-app/api/guruControl');
// const users = require('./Route');

router.get('/', authCheck.isSiswa, control.readGuru);
router.post('/add', authCheck.isTamvan, control.createGuru);
router.put('/change', authCheck.isTamvan, control.updateGuru);
router.delete('/dell/:nip', authCheck.isTamvan, control.deleteGuru);

// router.get('/', control.readGuru);
// router.post('/add', control.createGuru);
// router.put('/change', control.updateGuru);
// router.delete('/dell/:nip', control.deleteGuru);

module.exports = router;