const router = require('express').Router();
const authCheck = require('../api-auth/authCheck');
const control = require('../api-app/api/presensiControl');

router.get('/', authCheck.isGuru, control.readPresensi);
router.post('/add', authCheck.isGuru, control.createPresensi);
router.put('/change', authCheck.isGuru, control.updatePresensi);
router.delete('/dell/:id', authCheck.isGuru, control.deletePresensi);

module.exports = router;