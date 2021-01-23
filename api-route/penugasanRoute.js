const router = require('express').Router();
const authCheck = require('../api-auth/authCheck');
const control = require('../api-app/api/penugasanControl');
// const users = require('./Route');

router.get('/', authCheck.isTamvan, control.readPenugasan);
router.post('/add', authCheck.isTamvan, control.createPenugasan);
router.put('/change', authCheck.isTamvan, control.updatePenugasan);
router.delete('/dell/:nip', authCheck.isTamvan, control.deletePenugasan);

module.exports = router;