const User = require("./../models/userModel");

exports.createUser = async (req, res) => {
  const name = req.body.name;
  const password = req.body.name;

  if (!name) {
    return res.json({ error: "name field is not provided" });
  }

  if (!password) {
    return res.json({ error: "password field is not provided" });
  }

  await new User({
    name: name,
    password: password,
    email: req.body.email,
  }).save();

  console.log("User saved!!!!!!!!");

  res.json({ msg: "User Created" });
};
