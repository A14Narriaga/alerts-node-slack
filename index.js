const express = require('express')
require('dotenv').config()

const { port } = require('./config')
const { alert } = require('./src/alert')
const app = express()

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`))

app.use(express.static('./public'))
app.use(express.json())

alert.notification(`🧪 Hola`)
alert.error(`🧪 Hola`, 'code')
alert.success(`🧪 Hola`)
alert.warning(`🧪 Hola`)
