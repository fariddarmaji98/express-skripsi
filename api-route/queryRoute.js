const router = require('express').Router();
const authCheck = require('../api-auth/authCheck');
const control = require('../api-app/api/joinControl');

router.get('/laporan-nilai', authCheck.isSiswa, control.laporanNilai);
router.get('/laporan-presens', authCheck.isSiswa, control.laporanPresens);
router.get('/nilai-rank-1', authCheck.isSiswa, control.nilaiRank1);

module.exports = router;