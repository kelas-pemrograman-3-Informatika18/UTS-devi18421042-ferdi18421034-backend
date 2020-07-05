const router = require('express').Router()
const UserController = require('../controller/User')

router.post('/register', (req, res) => {
  UserController.register(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/login', (req, res) => {
  UserController.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/getalluser', (req, res) => {
  UserController.getAllUser()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router