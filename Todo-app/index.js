import express from "express";
import todoRoutes from "./routes/todo.routes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/todos", todoRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
