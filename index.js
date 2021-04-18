const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/ourdata', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('db on')
})

app.use(express.static('public'))

app.use(express.json())
app.use('/api', require('./routes/api'))

app.use(function(err,req,res,next){
    res.status(422).send({error: err.message})
})

app.listen(process.env.port || 4000, function(){
    console.log('Ready to Go!');
})