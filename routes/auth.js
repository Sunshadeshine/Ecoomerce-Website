import express from 'express';
import { signIn, signUp , testController} from '../controllers/auth-controller.js';
import { isAdmin, requireSignIn } from '../middlewares/auth_Middleware.js';
const router = express.Router();

router.post('/signup',signUp);
router.post('/signin',signIn);
router.get('/test',requireSignIn,isAdmin,testController);
export default router;