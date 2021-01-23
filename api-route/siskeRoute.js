const router = require('express').Router();
const authCheck = require('../api-auth/authCheck');
const control = require('../api-app/api/siskeControl');

router.get('/', authCheck.isSiswa, control.readSiske);
router.post('/add', authCheck.isTamvan, control.createSiske);
router.put('/change', authCheck.isTamvan, control.updateSiske);
router.delete('/dell/:id', authCheck.isTamvan, control.deleteSiske);

module.exports = router;