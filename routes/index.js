import express from 'express';
import * as homeController from '../controllers/home-controller.js';
import authRoutes  from './auth.js'
const router = express.Router();
console.log('router loaded');

router.get('/',homeController.home);
router.use('/api/v1/auth',authRoutes);
export default router;