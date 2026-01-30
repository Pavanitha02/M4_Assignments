const supabase = require('../services/supabaseClient');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const { data: existing } = await supabase.from('users')
      .select('email').eq('email', email);

    if (existing.length)
      return res.status(409).json({ error: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const { error } = await supabase.from('users').insert([{
      id: uuidv4(),
      name,
      email,
      password: hashed
    }]);

    if (error) throw error;

    res.status(201).json({ message: "User registered" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
