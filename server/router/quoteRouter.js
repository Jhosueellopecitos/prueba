
const express = require('express');
const { getQuote } = require('../controllers/quoteController');

const router = express.Router();

// Ruta para obtener una frase aleatoria
router.get('/random-quote', getQuote);

module.exports = router;
