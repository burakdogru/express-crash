const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
   console.log(req.query.name)
   res.send('users List')
})

router.get('/new', (req, res) => {
    res.render('users/new', {firstname: 'new useer'})
})

router.post('/', (req, res) => {
    const isValid = true
    if(isValid) {
        users.push({name: req.body.firstname})
        res.redirect(`/users/${users.length}`)
    }else {
        console.log("Error")
        res.render('users/new', {firstname: req.body.firstname})
    }


})

router.route('/:id')
.get((req, res) => {
    console.log(req.user)
    res.send(`get user with id  ${req.params.id}  ` +  ' Name of it ' + req.user.name)
}).put((req, res) => {
    res.send(`update user with id ` + req.params.id)
}).delete((req, res) => {
    res.send(`delete user with id ` + req.params.id)
})

const users = [ 
    {
        name: 'John'
    },
    {
        name: 'Jane'
    }
]

router.param('id', (req, res, next, id) => {
    req.user = users[id-1]
    next()
})



module.exports = router