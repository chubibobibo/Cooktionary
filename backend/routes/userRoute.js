//express router
import express from "express";
const router = express.Router();

//controller imports
import { registerUser } from "../controllers/userController.js";

router.post("/register", registerUser);

export default router;
