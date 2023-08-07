const server = require('./src/app.js')
const axios = require("axios")
require('dotenv').config()
const { PORT } = process.env || 3001

server.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`)
})


