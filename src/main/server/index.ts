import express, { Express }  from 'express'
import { routes } from '../routes'
import middlewares from '../middlewares'
import errorHandler from '../middlewares/error-handler'

class App {
  
  private app: Express

  constructor () {
    this.app = express()
  }

  bootstrap = async () => {
    this.initMiddlewares()
    this.initRoutes()
    this.initErrorHandler()
    return this.app.listen(process.env.PORT || 3000)
  }

  initRoutes = () => {
    this.app.use(routes)
  }

  initMiddlewares = () => {
    middlewares(this.app)
  }

  initErrorHandler = () => {
    this.app.use(errorHandler)
  }
}

export default App
