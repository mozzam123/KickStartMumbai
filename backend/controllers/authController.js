const User = require("./../models/userModel");

// To Create user
exports.createUser = async (req, res) => {
  const { name, password } = req.body;
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
  const userData = { name, password };

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

  res.status(200).json({ msg: "User Created" });
};

// Login User
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const existingUser = await User.findOne({ name: username });

    // Check if user exists
    if (!existingUser) {
      return res.status(404).json({ msg: "No user found" });
    }

    if (existingUser) {
      if (existingUser.password != password) {
        return res.status(400).json({ msg: "Password is not correct" });
      }
    }

    // Return success response if user is found and password is correct
    return res.status(200).json({ msg: "User authenticated successfully" });
  } catch (err) {
    console.error("Error during user login:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all Users
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    return res.json({ result: allUsers });
  } catch (err) {
    return res.json({ error: err });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    const existingUser = await User.findById(req.params.id);

    if (!existingUser) {
      return res.json({ error: "User does not exist" });
    }

    await User.findByIdAndDelete(req.params.id);

    return res.json({ message: "User deleted successfully" });
  } catch (err) {
    return res.json({ error: err });
  }
};
