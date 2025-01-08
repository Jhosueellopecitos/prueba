// seed.js
const mongoose = require('mongoose');
const Quote = require('./models/quoteModel');

const MONGO_URI = 'mongodb://127.0.0.1:27017/quote';

const seedQuotes = async () => {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        const quotes = [
            { text: "The best way to predict the future is to create it." },
            { text: "Success is not the key to happiness. Happiness is the key to success." },
            { text: "Do what you can, with what you have, where you are." },
            { text: "The only way to do great work is to love what you do." },
            { text: "Life is what happens when you're busy making other plans." },
            { text: "You miss 100% of the shots you don't take." },
            { text: "In the middle of every difficulty lies opportunity." },
            { text: "The harder you work for something, the greater you'll feel when you achieve it." }
        ];
        await Quote.insertMany(quotes);
        console.log('Quotes seeded successfully');
        mongoose.disconnect();
    } catch (error) {
        console.error('Error seeding quotes:', error);
    }
};

seedQuotes();
