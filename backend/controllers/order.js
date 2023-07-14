const Order = require("../models/order");

const makeOrder = async (req, res) => {
  try {
    const order = await Order.create({
      ...req.body,
    });

    res.json({
      success: true,
      msg: "Order is taken successfully",
      order: order,
    });
  } catch (err) {
    res.json({ success: false, err: err.message });
  }
};

module.exports = makeOrder;
