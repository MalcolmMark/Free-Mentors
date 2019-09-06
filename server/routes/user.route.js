import express from "express";
import userController from "../controllers/user.controller";
import { validate } from "../middleware/validation.middleware";
import { isEmailUsed, hashPassword, authanticate } from "../middleware/user.middleware";
import { verifyToken } from "../middleware/token.middleware";
import { updateUserToMentor } from "../controllers/user.controller"

const router = express.Router();

router.post('/auth/signin', validate, authanticate, userController.signin);

router.post('/auth/signup', validate, isEmailUsed, hashPassword, userController.signup);

router.patch('/user/:userId', verifyToken, updateUserToMentor);

router.get('/mentors', verifyToken, userController.getAllMentors);

router.get('/mentors/:mentorId', verifyToken, userController.getMentorById);

router.post('/sessions', verifyToken, userController.createSession);

export default router;
