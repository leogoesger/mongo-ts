import { Router } from "express";
import welcome from "./welcome";

const router = Router();

router.use("/api/welcome", welcome);

export default router;
