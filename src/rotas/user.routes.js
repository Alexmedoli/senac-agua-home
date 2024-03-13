const express = require("express");
const User = require('../models/user.model.js');
const router = express.Router();
const {getUsuarios, getUsuario, login, postUsuario, putUsuario, deleteUsuario, putRecsenha} = require('../controllers/user.controller.js');

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/login', login);
router.post('/cadastro', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);
router.put('/recuperar', putRecsenha);

module.exports = router;
