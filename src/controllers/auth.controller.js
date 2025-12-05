import {sign} from "../../utils/jwt.js";
import User from "../models/User.js";
export const register = async (req, res) => {
    try {
        console.log(req.result);
        const tambah = await User.create({
            data: req.result,
            include: {
                profile: true,
            },
        });
        return res.status(200).json({
            status: true,
            result: tambah,
        });
    } catch (error) {
        return res.status(400).json(error);
    }
};

export const login = (req, res) => {
    const payload = req.result;
    // buat sign jwt
    const token = sign(payload);
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        // ini baru 3 menit
        maxAge: 3 * 60 * 1000,
    });

    return res.status(200).json({status: true, message: "berhasil login"});
};

export const checkMe = (req, res) => {
    const payload = req.result;
    return res.status(200).json({status: true, data: payload});
};
