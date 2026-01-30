const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController');
const { validateUser } = require('../validations/userValidation');

router.post('/', validateUser, userCtrl.createUser);
router.get('/', userCtrl.getUsers);
router.get('/:id', userCtrl.getUserById);
router.put('/:id', userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;
