import express, { Express }  from 'express'
import { routes } from '../routes'

class App {
  
  private app: Express

  constructor () {
    this.app = express()
  }

  bootstrap = async () => {
    this.setupRoutes()
    return this.app.listen(process.env.PORT || 3000)
  }

  setupRoutes = () => {
    this.app.use(routes)
  }

}

export default App
