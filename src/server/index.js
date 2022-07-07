const express = require('express')
const routes = require('./routes')

const app = express()

class App {
  
  app = express()

  bootstrap = async (PORT) => {
    this.setupRoutes()
    return this.app.listen(process.env.PORT || 3000)
  }

  setupRoutes = () => {
    app.use(routes)
  }

}

module.exports = App