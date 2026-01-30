const supabase = require('../services/supabaseClient');
const { v4: uuidv4 } = require('uuid');

exports.addTodo = async (req, res) => {
  const { title, description, userId } = req.body;

  const { error } = await supabase.from('todos').insert([{
    id: uuidv4(),
    title,
    description,
    user_id: userId
  }]);

  if (error) return res.status(400).json({ error: error.message });

  res.status(201).json({ message: "Todo added" });
};

exports.getMyTodos = async (req, res) => {
  const { userId } = req.params;

  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .eq('user_id', userId);

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
};

exports.updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const { title, description, is_completed } = req.body;

  const { error } = await supabase
    .from('todos')
    .update({ title, description, is_completed })
    .eq('id', todoId);

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "Todo updated" });
};

exports.deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', todoId);

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "Todo deleted" });
};
