import Order from "../models/Order.js";
import Product from "../models/Product.js";

// Create Order
export const createOrder = async (req, res) => {
  try {
    const { items } = req.body;

    // 1. Stock check
    for (const item of items) {
      const product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({
          message: `${item.productName} not found`,
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `${product.name} stock not available`,
        });
      }
    }

    // 2. Stock reduce
    for (const item of items) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.quantity },
      });
    }

    // 3. Order create with logged-in userId
    const order = await Order.create({
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// User er nijer orders
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin: Get All Orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Order Status
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({
      message: "Order status updated",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Order
export const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};