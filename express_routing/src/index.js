import express from "express";
import userRoutes from "./routes/users.routes.js";
import todoRoutes from "./routes/todos.routes.js";

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
