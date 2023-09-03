const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/handeluser', userController.getUsers);
router.post('/handeluser', userController.updateOrCreateUser);

module.exports = router;