const express = require('express');
const router = express.Router();

const {
    getUsers,
    registerUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

router.get('/', getUsers);
router.post('/', registerUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;