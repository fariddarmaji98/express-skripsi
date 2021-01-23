const router = require('express').Router();
// const authCheck = require('../auth/authCheck');
const control = require('../api-app/api/guruControl');
// const users = require('./Route');

router.get('/', control.readGuru);
router.post('/add', control.createGuru);
router.put('/change', control.updateGuru);
router.delete('/dell/:nip', control.deleteGuru);

module.exports = router;