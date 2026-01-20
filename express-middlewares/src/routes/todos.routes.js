import express from "express";
import fs from "fs";
import path from "path";
import { rateLimiter } from "../middleware/rateLimiter.middleware.js";
import { validateTodo } from "../middleware/validateTodo.middleware.js";

const router = express.Router();
const dbPath = path.join(process.cwd(), "src", "db.json");

// Helper to read DB
const readDB = () => JSON.parse(fs.readFileSync(dbPath, "utf-8"));

// Helper to write DB
const writeDB = (data) =>
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

// CREATE TODO
router.post("/add", validateTodo, (req, res) => {
  const db = readDB();
  const newTodo = {
    id: Date.now(),
    title: req.body.title
  };

  db.todos.push(newTodo);
  writeDB(db);

  res.status(201).json(newTodo);
});

// GET ALL TODOS (Rate Limited)
router.get("/", rateLimiter, (req, res) => {
  const db = readDB();
  res.json(db.todos);
});

// GET SINGLE TODO
router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find(
    t => t.id == req.params.todoId
  );

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(todo);
});

// UPDATE TODO
router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex(
    t => t.id == req.params.todoId
  );

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  db.todos[index].title = req.body.title || db.todos[index].title;
  writeDB(db);

  res.json(db.todos[index]);
});

// DELETE TODO
router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const filteredTodos = db.todos.filter(
    t => t.id != req.params.todoId
  );

  if (filteredTodos.length === db.todos.length) {
    return res.status(404).json({ error: "Todo not found" });
  }

  db.todos = filteredTodos;
  writeDB(db);

  res.json({ message: "Todo deleted successfully" });
});

export default router;
