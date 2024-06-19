require('dotenv').config({path: 'config.env'})
const express = require('express')
const routes = require('./route/route')
const mongoConnect = require('./connection/connect') 

const PORT = 3000

const app = express()
app.use(express.json())
app.use('/', routes)

mongoConnect()

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

module.exports = app