import express from "express";
import { check } from "express-validator";

//importamos controler.
import {postOffer} 
        from "../controllers/controllers.js";
const router = express.Router()


router.post('/', postOffer);





export default router;