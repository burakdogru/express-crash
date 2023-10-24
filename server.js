const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(logger)

app.get('/', (req, res) => {
    console.log('hi')
    // res.send('Hello World!')
    res.render('index.ejs', { name: 'John'})
})

const usersRouter = require('./routes/users')

app.use('/users', usersRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)