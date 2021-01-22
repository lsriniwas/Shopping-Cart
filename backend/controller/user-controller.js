const User = require("../models/user");
const bcrypt = require("bcryptjs");
const {
  userSignUpSchema,
  loginSchema,
} = require("../validation/validation_schema");

const addUser = async (req, res, next) => {
  const { error } = await userSignUpSchema(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists != null) {
    return res.status(400).send("User already exist");
  }

  const encryptedPassword = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
  const newUser = new User({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: encryptedPassword,
    order_history: [],
    addresses: [],
  });

  try {
    const savedUser = await newUser.save();
    res
      .status(200)
      .json({ messsage: "Registeration Successful", userInfo: savedUser });
  } catch (err) {
    res.status(400).send(err);
  }
};

const getUser = async (req, res,next) => {
  const { errors } = loginSchema(req.body);
  if (errors) {
    return res.status(400).send(errors.details[0].message);
  }
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send({ Error: "User Not Found" });
  }

  const checkPassword =  await bcrypt.compareSync(req.body.password, user.password.toString());
  if (!checkPassword) {
    return res.status(400).send({Error:"Wrong password"});
  }
    return res.status(200).json({ messsage: "Login Successful", userInfo: user });

};

module.exports = { getUser, addUser };
