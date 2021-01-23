const router = require('express').Router();
const authCheck = require('../api-auth/authCheck');
const control = require('../api-app/api/fileControl');
// const users = require('./Route');

router.get('/', authCheck.isSiswa, control.readFile);
router.post('/add', authCheck.isSiswa, control.createFile);
router.put('/change', authCheck.isSiswa, control.updateFile);
router.delete('/dell/:id', authCheck.isSiswa, control.deleteFile);

module.exports = router;