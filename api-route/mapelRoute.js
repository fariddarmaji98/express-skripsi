const router = require('express').Router();
const authCheck = require('../api-auth/authCheck');
const control = require('../api-app/api/mapelControl');

router.get('/', authCheck.isSiswa, control.readMapel);
router.post('/add', authCheck.isTamvan, control.createMapel);
router.put('/change', authCheck.isTamvan, control.updateMapel);
router.delete('/dell/:id', authCheck.isTamvan, control.deleteMapel);

module.exports = router;