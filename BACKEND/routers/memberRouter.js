import { Router } from "express";
 import {member } from "../controllers/memberControllers.js";


const router = Router();

router.get("/", member);



export default router;