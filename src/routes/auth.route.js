import { Router } from "express";
import { registerValid } from "../../middleware/validation/register.valid.js";
import handleValidation from "../../middleware/handleValidation.js";
import { register } from "../controllers/auth.controller.js";
import { isResult } from "../../middleware/isResult.js";

const route = Router();

route.post("/register",registerValid,handleValidation,isResult,register)

export default route