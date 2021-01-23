const router = require('express').Router();
const { signIn } = require('../api-auth/authControl');
const authCheck = require('../api-auth/authCheck');
// const users = require('./userRoute');

router.post('/hai', authCheck.isAuth, (req, res) => {
    console.log(req.body);
    console.log(req.headers.token);
    res.send('haai');
});

router.post('/', signIn);

module.exports = router;