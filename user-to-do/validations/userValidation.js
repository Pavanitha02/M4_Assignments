exports.validateUser = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields required" });

  if (password.length < 8)
    return res.status(400).json({ error: "Password min 8 chars" });

  next();
};
