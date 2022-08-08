import App from './src/main/server'

const app = new App()

app.bootstrap().then((server) => {
  console.log(`Server running ${JSON.stringify(server.address())}`)
})
