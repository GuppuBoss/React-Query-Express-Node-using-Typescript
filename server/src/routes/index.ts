import { Router } from "express"
import { sum } from "../controllers/"

const router: Router = Router();

router.post("/sum", sum);

export default router;
