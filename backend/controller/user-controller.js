const User = require("../models/user");

const  addUser= (req, res) => {
  User.find({ email: req.body.email })
    .then((data) => {
      if (data.length === 0) {
        const newUser = new User(req.body);
        newUser
          .save()
          .then(() =>
            res
              .status(200)
              .json({ messsage: "Registeration Successful", userInfo: newUser })
          );
      } else {
        res.status(400).send({ Error: "User already exist" });
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const getUser = (req, res) => {
  User.find({ email: req.body.email, password: req.body.password })
    .then((data) => {
      if (data.length != 0) {
        return res.status(200).json({ messsage: "Login Successful", userInfo: data});
      }
      return res.status(404).send({ Error: "User Not Found" });
    })
    .catch((err) => res.status(400).send("error", err));
};

module.exports={getUser,addUser}
