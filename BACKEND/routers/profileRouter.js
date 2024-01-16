import express from 'express';
import multer from 'multer';
import { getUserProfileImage, updateProfileImage } from '../controllers/profileController.js';

const router = express.Router();
const upload = multer(); // Add your specific configuration

// Profile routes
router.get('/image/:userId', getUserProfileImage);
router.post('/update-image/:userId', upload.single('profileImage'), updateProfileImage);

export default router;
