require('dotenv').config()
const express = require('express') 
const connectToDatabase = require('./database/index')
const app = express()

connectToDatabase()

app.get('/', (req, res) => {
    res.status(200).json({
        message: "This is landing page"
    })
})

app.listen(process.env.PORT, () => {
    console.log("Nodejs project start")
})

// mongodb+srv://anjalsotang26:<db_password>@cluster0.hhimonz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0