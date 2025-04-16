import { Router } from "express";
import { loginUser } from "../controllers/authenLogin.js";

const router = Router();
router.post("/login", loginUser);
export default router;
