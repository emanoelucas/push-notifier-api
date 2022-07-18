import Router from 'express'

const routes = Router()

routes.get('/livecheck', (req, res, next) => {
  res.status(200).send({
    message: 'OK'
  })
})

export { routes }