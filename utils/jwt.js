import jwt from "jsonwebtoken";
import {config} from "dotenv";
config();

// secret jwt
const secret = process.env.SECRET_JWT;

// untuk sign jwt
export const sign = (payload) => {
    const token = jwt.sign(payload, secret);
    return token;
};

// untuk verifikasi token jwt
export const verify = (token) => {
    try {
        const payload = jwt.verify(token, secret);
        return payload
    } catch (error) {
        throw new Error("token sudah invalid silahkan login kembali")
    }
};
