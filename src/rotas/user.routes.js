const express = require("express");
const User = require('../models/user.model.js');
const router = express.Router();
const {getUsuarios, getUsuario, login, postUsuario, putUsuario, deleteUsuario} = require('../controllers/user.controller.js');

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/login', login);
router.post('/cadastro', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);

module.exports = router;
