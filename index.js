const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const url = 'mongodb://localhost/handsondb'

mongoose.connect(url)
const con = mongoose.connection

con.on('open', function() {
    console.log('connected !')
})

app.use(express.json())
app.set('views', path.join(__dirname, 'frontend'))
app.set('view engine', 'ejs')


const router = require('./router/routes')
app.use('/', router)

app.listen(9000, () => {
    console.log('Server Started !')
})