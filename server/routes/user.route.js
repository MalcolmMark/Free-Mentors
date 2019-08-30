import express from "express";
import userController from "../controllers/user.controller";
import { validate } from "../middleware/validation.middleware";
import { isEmailUsed, hashPassword, authanticate } from "../middleware/user.middleware";

const router = express.Router();

router.post('/signin', validate, authanticate, userController.signin);

router.post('/signup', validate, isEmailUsed, hashPassword, userController.signup);

export default router;