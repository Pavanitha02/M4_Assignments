const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/auth.routes')
const todoRoutes = require('./routes/todo.routes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', authRoutes)
app.use('/api', todoRoutes)

module.exports = app
