import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controllers.js";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);

export default router;
