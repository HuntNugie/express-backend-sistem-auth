import jwt from "jsonwebtoken";
import {config} from "dotenv";
config();

const secret = process.env.SECRET_JWT;
export const sign = (payload) => {
    const token = jwt.sign(payload, secret);
    return token;
};

export const verify = (token) => {
    try {
        const payload = jwt.verify(token, secret);
        return payload
    } catch (error) {
        throw new Error("token sudah invalid silahkan login kembali")
    }
};
