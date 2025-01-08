const Quote = require('../models/quoteModel');

const getQuote = async (req, res) => {
    try {
        const quotes = await Quote.find(); // Obtener todas las frases
        if (!quotes.length) {
            return res.status(404).json({ message: 'No quotes found' });
        }
        const randomIndex = Math.floor(Math.random() * quotes.length);
        res.json({ quote: quotes[randomIndex].text });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getQuote };
