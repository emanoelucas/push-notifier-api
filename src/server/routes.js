const routes = require('express').Router()

routes.get('/livecheck', (req, res, next) => {
  res.status(200).send({
    message: 'OK'
  })
})

module.exports = routes