import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TodoModal from "../components/TodoModal";
import { addTodo, getTodos, updateTodo, deleteTodo } from "../services/todo.service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Todos() {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [filter, setFilter] = useState("all");
  const [newTodo, setNewTodo] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const data = await getTodos(user.uid);
    setTodos(data);
  };

  const handleAdd = async () => {
    if (!newTodo) return;
    await addTodo(user.uid, { title: newTodo, completed: false });
    setNewTodo("");
    loadTodos();
  };

  const handleUpdate = async (title) => {
    await updateTodo(selectedTodo.id, { title });
    loadTodos();
  };

  const handleToggle = async (todo) => {
    await updateTodo(todo.id, { completed: !todo.completed });
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const filteredTodos = todos.filter(t =>
    filter === "all"
      ? true
      : filter === "completed"
      ? t.completed
      : !t.completed
  );

  return (
    <div className="h-screen flex flex-col">
      <Navbar filter={filter} setFilter={setFilter} />

      <div className="flex flex-1">
        <Sidebar
          todos={filteredTodos}
          selectedId={selectedTodo?.id}
          onSelect={setSelectedTodo}
        />

        <div className="flex-1 p-6">
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="New Todo..."
              value={newTodo}
              onChange={e => setNewTodo(e.target.value)}
            />
            <Button onClick={handleAdd}>Add</Button>
          </div>

          {selectedTodo && (
            <div className="border p-4 rounded space-y-2">
              <h2 className="text-xl font-bold">{selectedTodo.title}</h2>
              <p>Status: {selectedTodo.completed ? "Completed" : "Pending"}</p>

              <div className="flex gap-2">
                <Button onClick={() => handleToggle(selectedTodo)}>
                  Toggle
                </Button>
                <Button onClick={() => setOpenModal(true)}>
                  Edit
                </Button>
                <Button variant="destructive" onClick={() => handleDelete(selectedTodo.id)}>
                  Delete
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <TodoModal
        open={openModal}
        setOpen={setOpenModal}
        todo={selectedTodo}
        onSave={handleUpdate}
      />
    </div>
  );
}
