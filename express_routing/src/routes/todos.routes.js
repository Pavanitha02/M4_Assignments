import express from "express";
import fs from "fs";

const router = express.Router();
const DB_PATH = "./src/db.json";

router.post("/add", (req, res) => {
  const { title, completed } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const newTodo = {
    id: Date.now(),
    title,
    completed: completed ?? false
  };

  data.todos.push(newTodo);

  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

  res.status(201).json({
    message: "Todo added successfully",
    todo: newTodo
  });
});

router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  res.status(200).json(data.todos);
});

router.get("/:todoId", (req, res) => {
  const todoId = Number(req.params.todoId);
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const todo = data.todos.find(t => t.id === todoId);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.status(200).json(todo);
});


router.put("/update/:todoId", (req, res) => {
  const todoId = Number(req.params.todoId);
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const index = data.todos.findIndex(t => t.id === todoId);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  data.todos[index] = {
    ...data.todos[index],
    ...req.body
  };

  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

  res.status(200).json({
    message: "Todo updated successfully",
    todo: data.todos[index]
  });
});

router.delete("/delete/:todoId", (req, res) => {
  const todoId = Number(req.params.todoId);
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const filteredTodos = data.todos.filter(t => t.id !== todoId);

  if (filteredTodos.length === data.todos.length) {
    return res.status(404).json({ message: "Todo not found" });
  }

  data.todos = filteredTodos;

  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

  res.status(200).json({ message: "Todo deleted successfully" });
});

export default router;
