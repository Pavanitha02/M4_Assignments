const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth.middleware')
const todoController = require('../controllers/todo.controller')

router.use(authMiddleware)

router.post('/todos', todoController.createTodo)
router.get('/todos', todoController.getTodos)
router.put('/todos/:id', todoController.updateTodo)
router.delete('/todos/:id', todoController.deleteTodo)

module.exports = router
