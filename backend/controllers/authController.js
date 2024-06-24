const User = require("./../models/userModel");

// To Create user
exports.createUser = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const existingUser = await User.findOne({ name: name });

  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  if (!name) {
    return res.status(404).json({ error: "name field is not provided" });
  }

  if (!password) {
    return res.status(404).json({ error: "password field is not provided" });
  }
  try {
    await new User({
      name: name,
      password: password,
      email: req.body.email,
    }).save();
  } catch (error) {
    return res.json({ error: error.message });
  }

  console.log(`User saved with username: ${name}`);

  res.json({ msg: "User Created" });
};
