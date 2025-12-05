import {body} from "express-validator";
import User from "../../src/models/User.js";

export const registerValid = [
    body("email")
    .notEmpty()
    .withMessage("email wajib di isi")
    .isEmail()
    .withMessage("input yang di masukkan wajib email valid")
    .custom(async (value, {req}) => {
        const exists = await User.findUnique({
            where: {email: value},
        });
        if (exists) {
            throw new Error(`email ${value} sudah di gunakan user lain`);
        }
        return true;
    }),
    body("password")
    .notEmpty()
    .withMessage("password wajib di isi")
    .isLength({min: 8})
    .withMessage("password wajib minimal 8 karakter"),
    body("confirm_password")
    .notEmpty()
    .withMessage("Konfirmasi password wajib di isi")
    .isLength({min: 8})
    .withMessage("konfirmasi wajib di isi minimal 8 karakter")
    .custom((value, {req}) => {
        if (value !== req.body.password) {
            throw new Error("konfirmasi password dan password salah");
        }
        return true;
    }),
    body("nama").notEmpty().withMessage("nama tidak boleh kosong").isString().withMessage("Nama harus berbentuk teks"),
    body("jenis_kelamin").notEmpty().withMessage("jenis kelamin wajib di isi"),
    body("tgl_lahir").notEmpty().withMessage("Tanggal lahir wajib di isi"),
];
