const router = require('express').Router();
const { signup } = require('../controllers/userController');
const { validateUser } = require('../validations/userValidation');

router.post('/signup', validateUser, signup);
module.exports = router;
