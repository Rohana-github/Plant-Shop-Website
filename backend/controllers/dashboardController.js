import Product from "../models/Product.js";
import User from "../models/User.js";
import Order from "../models/Order.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalOrders = await Order.countDocuments();

    const orders = await Order.find();

    const revenue = orders.reduce((sum, order) => {
      return sum + order.totalAmount;
    }, 0);

    const recentOrders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(3);

    res.json({
      totalProducts,
      totalUsers,
      totalOrders,
      revenue,
      recentOrders,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};