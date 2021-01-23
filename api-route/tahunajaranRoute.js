const router = require('express').Router();
const authCheck = require('../api-auth/authCheck');
const control = require('../api-app/api/tahunajaranControl');

router.get('/', authCheck.isSiswa, control.readTAjaran);
router.post('/add', authCheck.isSiswa, control.createTAjaran);
router.put('/change/:tahunajaran', authCheck.isSiswa, control.updateTAjaran);
router.delete('/dell/:tahunajaran', authCheck.isGuru, control.deleteTAjaran);

module.exports = router;