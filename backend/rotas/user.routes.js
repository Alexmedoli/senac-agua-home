const express = require("express");
const User = require('./models/user.model.js');
const router = express.Router();
const {getUsuarios, getUsuario} = require('../controllers/user.controller.js');


router.get('/', getUsuarios);

router.get('/:id', getUsuario);
