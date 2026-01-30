const supabase = require('../services/supabaseClient');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, age } = req.body;

    const { data: existing } = await supabase
      .from('users')
      .select('email')
      .eq('email', email);

    if (existing.length > 0)
      return res.status(409).json({ error: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase.from('users').insert([{
      id: uuidv4(),
      name,
      email,
      password: hashedPassword,
      age
    }]);

    if (error) throw error;

    res.status(201).json({ message: "User created successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getUserById = async (req, res) => {
  const { data, error } = await supabase.from('users')
    .select('*').eq('id', req.params.id).single();

  if (error) return res.status(404).json({ error: "User not found" });
  res.json(data);
};

exports.updateUser = async (req, res) => {
  const { name, age, role } = req.body;

  const { error } = await supabase.from('users')
    .update({ name, age, role })
    .eq('id', req.params.id);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "User updated" });
};

exports.deleteUser = async (req, res) => {
  const { error } = await supabase.from('users')
    .delete().eq('id', req.params.id);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "User deleted" });
};
