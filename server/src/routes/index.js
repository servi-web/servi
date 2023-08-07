const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router()

// Main route
router.use('/', (req, res) => {
  res.send('Welcome to Servi server')
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router
