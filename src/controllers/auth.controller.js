import {sign} from "../../utils/jwt.js";
import User from "../models/User.js";

// untuk registrasi
export const register = async (req, res) => {
    try {
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

// untuk login
export const login = (req, res) => {
    const payload = req.result;
    // buat sign jwt
    const token = sign(payload);
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 60 * 60 * 1000,
    });

    return res.status(200).json({status: true, message: "berhasil login"});
};

// untuk check token
export const checkMe = (req, res) => {
    const payload = req.result;
    return res.status(200).json({status: true, data: payload});
};

// untuk logout
export const logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });

    return res.status(200).json({status: true, message: "berhasil logout"});
};
