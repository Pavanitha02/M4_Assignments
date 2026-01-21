import { readData, writeData } from "../models/todo.model.js";

// GET all todos
export const getTodos = (req, res) => {
  try {
    const data = readData();
    res.status(200).json(data.todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};

// ADD todo
export const addTodo = (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const data = readData();

    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };

    data.todos.push(newTodo);
    writeData(data);

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Failed to add todo" });
  }
};

// UPDATE todo
export const updateTodo = (req, res) => {
  try {
    const { id } = req.params;
    const data = readData();

    const todo = data.todos.find(t => t.id == id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.completed = !todo.completed;
    writeData(data);

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo" });
  }
};

// DELETE todo
export const deleteTodo = (req, res) => {
  try {
    const { id } = req.params;
    const data = readData();

    const filteredTodos = data.todos.filter(t => t.id != id);

    if (data.todos.length === filteredTodos.length) {
      return res.status(404).json({ message: "Todo not found" });
    }

    data.todos = filteredTodos;
    writeData(data);

    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};
