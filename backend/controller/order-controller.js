const Order = require("../models/orders");

const addOrder = (req, res) => {
  console.log(req.body);
  const newOrder = new Order(req.body);
  newOrder
    .save()
    .then(() =>
      res
        .status(200)
        .json({ messsage: "Registeration Successful", userInfo: newUser })
    )
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = { addOrder };
