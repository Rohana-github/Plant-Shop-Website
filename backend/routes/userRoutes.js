import express from "express";
import { getUsers, deleteUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;