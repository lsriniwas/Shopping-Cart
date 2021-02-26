const Order = require("../models/orders");
const { v4: uuidv4 } = require("uuid");
const Razorpay = require("razorpay");
const dotenv = require("dotenv");
const request = require("request");

dotenv.config();

const instance = new Razorpay({
  key_id: process.env.RAZOR_PAY_KEY_ID,
  key_secret: process.env.RAZOR_PAY_KEY_SECRET,
});

const fetchUserOrders = async (req, res) => {
  const id = req.body.id;
  await Order.find({ customer_id: id })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).json("Error:" + err));
};

const addOrder = (req, res) => {
  const amount = req.body.total_amount;
  try {
    const options = {
      amount: 100 * amount,
      currency: "INR",
      receipt: uuidv4(),
    };
    instance.orders.create(options, (err, order) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error while placing the order" });
      }
      return res.status(200).json(order);
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error while placing the order",
    });
  }
};

const payment = (req, res) => {
  try {
    return request(
      {
        method: "POST",
        url: `https://${process.env.RAZOR_PAY_KEY_ID}:${process.env.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
        form: {
          amount: 10 * 100,
          currency: "INR",
        },
      },
      async function (error, response, body) {
        if (error) {
          return res.status(500).json({
            message: "Sorry server is down",
          });
        }
        const newOrder = new Order(req.body);
        newOrder
          .save()
          .then(() => {
            return res
              .status(200)
              .json({
                messsage: "Order Placed Successfully",
                userInfo: newOrder,
              });
          })
          .catch((err) => {
            return res.status(400).send(err);
          });
      }
    );
  } catch (err) {
    return res.status(500).json({
      message: "Sorry server is down",
    });
  }
};
module.exports = { addOrder, fetchUserOrders, payment };
