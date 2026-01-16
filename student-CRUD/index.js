import express from "express";
import fs from "fs";

const readData = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};


const app = express();
const PORT = 3000;

app.use(express.json()); 
app.get("/students", (req, res) => {
  const students = readData();
  res.status(200).json(students);
});
app.post("/students", (req, res) => {
  const students = readData();
  const newStudent = req.body;

  if (!newStudent.id || !newStudent.name) {
    return res.status(400).json({ message: "Invalid student data" });
  }

  students.push(newStudent);
  writeData(students);

  res.status(201).json({ message: "Student added successfully" });
});
app.put("/students", (req, res) => {
  const students = readData();
  const { id } = req.body;

  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students[index] = { ...students[index], ...req.body };
  writeData(students);

  res.json({ message: "Student updated successfully" });
});
app.delete("/students/:id", (req, res) => {
  const students = readData();
  const id = parseInt(req.params.id);

  const filtered = students.filter(s => s.id !== id);

  if (students.length === filtered.length) {
    return res.status(404).json({ message: "Student not found" });
  }

  writeData(filtered);
  res.json({ message: "Student deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
