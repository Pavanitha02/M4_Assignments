const supabase = require("../config/supabase");

exports.createTodo = async (req, res) => {
  const { title } = req.body;
  const { userId } = req.user;

  const { data, error } = await supabase
    .from("todos")
    .insert([{ title, completed: false, userId }]);

  if (error) return res.status(400).json({ error: error.message });

  res.status(201).json(data);
};

exports.getTodos = async (req, res) => {
  const { userId } = req.user;

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("userId", userId);

  res.json(data);
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  const { data, error } = await supabase
    .from("todos")
    .update(req.body)
    .eq("id", id)
    .eq("userId", userId);

  if (error) return res.status(403).json({ message: "Not allowed" });

  res.json(data);
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  const { error } = await supabase
    .from("todos")
    .delete()
    .eq("id", id)
    .eq("userId", userId);

  res.json({ message: "Deleted" });
};
