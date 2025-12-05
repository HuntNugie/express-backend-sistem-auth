import {Router} from "express";
import {registerValid} from "../../middleware/validation/register.valid.js";
import handleValidation from "../../middleware/handleValidation.js";
import {checkMe, login, logout, register} from "../controllers/auth.controller.js";
import {isResultLogin, isResultRegister} from "../../middleware/isResult.js";
import {loginValid} from "../../middleware/validation/login.valid.js";
import handleToken from "../../middleware/handleToken.js";

const route = Router();

// untuk register
route.post("/register", registerValid, handleValidation, isResultRegister, register);

// untuk login
route.post("/login", loginValid, handleValidation, isResultLogin, login);

// untuk mengecek
route.get("/me", handleToken, checkMe);
export default route;

// untuk logout
route.post("/logout", logout);
