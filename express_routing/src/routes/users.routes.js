import express from "express";
import fs from "fs";

const router = express.Router();
const DB_PATH = "./src/db.json";

router.post("/add", (req, res) => {
  const { name, email } = req.body;

  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const newUser = {
    id: Date.now(),
    name,
    email
  };

  data.users.push(newUser);

  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

  res.status(201).json({
    message: "User added successfully",
    user: newUser
  });
});


router.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  res.status(200).json(data.users);
});

router.get("/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const user = data.users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

router.put("/update/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const index = data.users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  data.users[index] = {
    ...data.users[index],
    ...req.body
  };

  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

  res.status(200).json({
    message: "User updated",
    user: data.users[index]
  });
});

router.delete("/delete/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const data = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

  const filteredUsers = data.users.filter(u => u.id !== userId);

  if (filteredUsers.length === data.users.length) {
    return res.status(404).json({ message: "User not found" });
  }

  data.users = filteredUsers;
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

  res.status(200).json({ message: "User deleted" });
});

export default router;


