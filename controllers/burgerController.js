const router = require('express').Router()
const user = require('../models/burger.js')


router.get('/burgers', (req, res) =>
  user.getAll(users =>
    res.render('index', { users })))

router.post('/burgers', (req, res) =>
  user.create(req.body, () =>
    res.sendStatus(200)))

router.put('/burgers/:id', (req, res) =>
  user.update(req.body, req.params.id, () =>
    res.sendStatus(200)))

router.delete('/burgers/:id', (req, res) =>
  user.delete(req.params.id, () =>
    res.sendStatus(200)))

module.exports = router
