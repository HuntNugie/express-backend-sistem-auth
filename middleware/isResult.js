import bcrypt from "bcrypt";
import {config} from "dotenv";
config();
const salt_hash = 10;

export const isResultRegister = async (req, res, next) => {
    const obj = {
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt_hash),
        profile: {
            create: {
                nama: req.body.nama,
                jenis_kelamin: req.body.jenis_kelamin,
                tgl_lahir: req.body.tgl_lahir,
            },
        },
    };
    req.result = obj;
    next();
};
