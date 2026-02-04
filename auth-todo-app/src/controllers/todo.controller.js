const supabase = require('../config/supabase')

exports.createTodo = async (req, res) => {
  const { title } = req.body

  const { data, error } = await supabase
    .from('todos')
    .insert([{ title, userId: req.user.userId }])

  if (error) return res.status(400).json({ error: error.message })

  res.status(201).json(data)
}

exports.getTodos = async (req, res) => {
  const { data } = await supabase
    .from('todos')
    .select('*')
    .eq('userId', req.user.userId)

  res.json(data)
}

exports.updateTodo = async (req, res) => {
  const { id } = req.params
  const { title, completed } = req.body

  const { data, error } = await supabase
    .from('todos')
    .update({ title, completed })
    .eq('id', id)
    .eq('userId', req.user.userId)

  if (error) return res.status(400).json({ error: error.message })

  res.json(data)
}

exports.deleteTodo = async (req, res) => {
  const { id } = req.params

  await supabase
    .from('todos')
    .delete()
    .eq('id', id)
    .eq('userId', req.user.userId)

  res.json({ message: 'Deleted' })
}
