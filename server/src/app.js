const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/index.js')
require('dotenv').config()
const { CLIENT_URLS } = process.env || ['http://localhost:5173']

const app = express()

app.name = 'API'

app.use(morgan('dev'))

app.use(express.json())

app.disable('x-powered-by')

// CONFIG CORS
app.use((req, res, next) => {
  const origin = req.header('origin')
  console.log(['CLIENT_URLS'].includes(origin))
  if (CLIENT_URLS.includes(origin) || !origin) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  }

  next()
})

app.use('/', routes)

// Error catching endware.
app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})

module.exports = app
