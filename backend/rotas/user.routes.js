const express = require("express");
const User = require('../models/user.model.js');
const router = express.Router();
const {getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario} = require('../controllers/user.controller.js');

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);

module.exports = router;
