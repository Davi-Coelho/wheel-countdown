const express = require('express')
const consign = require('consign')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

consign()
    .include('app/controllers')
    .then('app/routes')
    .into(app)

module.exports = app
