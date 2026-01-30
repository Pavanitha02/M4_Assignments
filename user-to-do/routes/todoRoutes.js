const router = require('express').Router();
const todo = require('../controllers/todoController');
const { validateTodo } = require('../validations/todoValidation');

router.post('/add-todo', validateTodo, todo.addTodo);
router.get('/get-my-todo/:userId', todo.getMyTodos);
router.put('/update-todo/:todoId', todo.updateTodo);
router.delete('/delete-todo/:todoId', todo.deleteTodo);

module.exports = router;
