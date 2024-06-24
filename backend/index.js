const express = require("express")
const app = express()
const mongoose = require("mongoose")
const authRoutes = require('./routes/authRoutes');
const port = 9999


// Middleware
app.use(express.json());


// Routes
app.use('/api/auth', authRoutes);

mongoose.connect("mongodb://localhost:27017/KickStartMumbai")
    .then(() => {
        console.log("Database connected for KickStartMumbai");
    }).catch((err) => {
        console.log(`Database error: ${err}`);
    })


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})



