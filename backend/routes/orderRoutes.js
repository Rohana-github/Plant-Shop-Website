import express from "express";

import {
  createOrder,
  getOrders,
  getMyOrders,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/orderController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// User checkout
router.post("/", authMiddleware, createOrder);

// User নিজের order history
router.get("/my-orders", authMiddleware, getMyOrders);

// Admin সব order
router.get("/", getOrders);

// Admin status update
router.put("/:id/status", updateOrderStatus);

// Admin delete order
router.delete("/:id", deleteOrder);

export default router;