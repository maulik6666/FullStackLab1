import { Router } from "express";
import { rolesController } from "../controllers/rolesController";
import { validate } from "../middleware/validate";
import { createRoleSchema } from "../validators/rolesSchema";

const router = Router();

router.get("/", rolesController.list);
router.get("/is-filled", rolesController.isFilled);
router.post("/", validate(createRoleSchema), rolesController.create);

export default router;