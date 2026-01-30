exports.validateUser = (req, res, next) => {
  const { name, email, password, age } = req.body;

  if (!name || name.trim() === "")
    return res.status(400).json({ error: "Name is required" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email))
    return res.status(400).json({ error: "Invalid email format" });

  if (!password || password.length < 8)
    return res.status(400).json({ error: "Password must be 8+ chars" });

  if (age && (isNaN(age) || age < 18))
    return res.status(400).json({ error: "Age must be ≥ 18" });

  next();
};
