
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const quoteRouter = require('./router/quoteRouter');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


async function connectDB() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/quote',{useNewUrlParser:true,useUnifiedTopology:true});
    }catch(err){
        console.error("Error en la conexion a BDD", err);
        process.exit(1);
    }
}

connectDB();


app.use('/api', quoteRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
