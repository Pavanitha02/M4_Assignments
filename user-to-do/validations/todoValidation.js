exports.validateTodo = (req, res, next) => {
  const { title, userId } = req.body;

  if (!title || !userId)
    return res.status(400).json({ error: "Title & userId required" });

  next();
};
