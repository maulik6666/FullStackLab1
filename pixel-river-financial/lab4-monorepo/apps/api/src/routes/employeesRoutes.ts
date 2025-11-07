import { Router } from "express";
import { employeesController } from "../controllers/employeeController";
import { validate } from "../middleware/validate";
import { createEmployeeSchema } from "../validators/employeesSchema";

const router = Router();

router.get("/", employeesController.list);
router.post("/", validate(createEmployeeSchema), employeesController.create);

export default router;