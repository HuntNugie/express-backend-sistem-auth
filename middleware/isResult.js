import bcrypt from "bcrypt";
import {config} from "dotenv";
import User from "../src/models/User.js";
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

export const isResultLogin = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const data = await User.findUniqueOrThrow({where: {email}, include: {profile: true}});

        // cek apakah password sama atau tidak
        const match = await bcrypt.compare(password,data.password);
        if (!match) {
            throw ("username atau password salah");
        }

        req.result = data;
        next();
    } catch (error) {
        return res.status(404).json({status:false,errors:error});
    }
};
