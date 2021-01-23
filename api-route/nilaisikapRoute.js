const router = require('express').Router();
const authCheck = require('../api-auth/authCheck');
const control = require('../api-app/api/nilaisikapControl');

router.get('/', authCheck.isGuru, control.readNilai);
router.post('/add', authCheck.isGuru, control.createNilai);
router.put('/change', authCheck.isGuru, control.updateNilai);
router.delete('/dell/:id', authCheck.isGuru, control.deleteNilai);

module.exports = router;