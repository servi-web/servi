const server = require('./src/app.js')
require('dotenv').config()
const { PORT } = process.env || 3001

server.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`)
})
