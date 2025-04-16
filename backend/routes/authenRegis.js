import { Router } from "express";
import { registerUser } from "../controllers/authenRegister.js";
const router = Router();
router.post("/dangky", registerUser);
export default router;
