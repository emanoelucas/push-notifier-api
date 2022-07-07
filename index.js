const App = require('./src/server/index')

const app = new App()

app.bootstrap().then((server) => {
  console.log(`Server running ${JSON.stringify(server.address())}`)
})
