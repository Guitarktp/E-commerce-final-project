import express from "express";
import carlistController from "../controllers/carListController.js";
import adminAuthenticateMiddleware from "../middleware/adminAuthenticateMiddleware.js"
import authenticateMiddleware from "../middleware/authenticateMiddleware.js"

const router = express.Router();

router.get("/:id", carlistController.getcar);

router.post("/togglePin", carlistController.togglePin);

export default router;
