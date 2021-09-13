// Empty JS object to act as endpoint for all routes

projectData = {};

// Require Express to run server and routes

const port = 8000
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

// Start-up an instance of the app

const app = express()

/* Middleware */

// Express config for body-parser usage in middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors())

// Initialise the main project folder

app.use(express.static('website'));

// Setup Server

app.listen(port, () => {
    console.log(`Server initiated on port: ${port}`)
})

app.get("/storedData", (req, res) => {
    res.send(projectData)
})

app.post("/currentData", (req, res) => {
    projectData.temp = req.body.temp
    projectData.date = req.body.date
    projectData.feelings = req.body.feelings
    res.end()
})