const express = require('express')
const app = express ()

const mongoose = require('mongoose')
const url = 'mongodb://localhost/AnimalDB'

mongoose.connect(url, {useNewUrlParser:true})
const dbcon = mongoose.connection

dbcon.on('error', (error) => console.error(error))
dbcon.once('open', () => console.log('Database Connected...'))

app.use(express.json())

const animalRouter = require('./routers/animals')
app.use('/animals', animalRouter)

const indexRouter = require('./routers/index')
app.use('/', indexRouter)

// Create a server to listen at port 8080
const port = process.env.PORT || 8080;
app.listen(port,() => console.log("Animal API listening at localhost %s ", port));
