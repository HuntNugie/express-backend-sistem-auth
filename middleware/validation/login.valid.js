import {body} from "express-validator";
import User from "../../src/models/User.js";
export const loginValid = [
    body("email")
    .notEmpty()
    .withMessage("email wajib di isi")
    .isEmail()
    .withMessage("harus menggunakan email yang valid")
    .custom(async (value, {req}) => {
        const data = await User.findUnique({where: {email: value}});
        if (!data) {
            throw new Error("email ini belum pernah terdaftar");
        }
        return true;
    }),
    body("password").notEmpty().withMessage("password tidak boleh kosong"),
];
