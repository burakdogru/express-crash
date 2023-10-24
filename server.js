const express = require('express')
const app = express()


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(logger)

app.set('view engine', 'ejs')

const usersRouter = require('./routes/users')

app.use('/users', usersRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)