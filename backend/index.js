const express = require("express")
const app = express()
const mongoose = require("mongoose")
const authRoutes = require('./routes/authRoutes');
const tournamentRoutes = require("./routes/tournamentRoutes")
const port = 9999
require("dotenv").config()

const DB = process.env.DB;


// Middleware
app.use(express.json());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/auth', tournamentRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/KickStartMumbai")
    .then(() => {
        console.log("Database connected for KickStartMumbai");
    }).catch((err) => {
        console.log(`Database error: ${err}`);
    })


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})



