const router = require('express').Router();
const authCheck = require('../api-auth/authCheck');
const control = require('../api-app/api/userControl');
// const users = require('./Route');

router.get('/', authCheck.isTamvan, control.readUser);
router.post('/add', authCheck.isTamvan, control.createUser);
router.put('/change', authCheck.isTamvan, control.updateUser);
router.delete('/dell/:kode', authCheck.isTamvan, control.deleteUser);

module.exports = router;