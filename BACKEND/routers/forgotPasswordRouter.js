import { Router } from "express";
 import {forgotPassword} from "../controller/forgotPasswordController.js";


const router = Router();

router.post("/forgotPassword", forgotPassword);



export default router;
