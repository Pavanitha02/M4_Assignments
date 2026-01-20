import express from "express";
import { loggerMiddleware } from "./middleware/logger.middleware.js";
import todoRouter from "./routes/todos.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json()); // body parser
app.use(loggerMiddleware); // app-level middleware

app.use("/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
