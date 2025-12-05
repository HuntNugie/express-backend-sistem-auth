import {verify} from "../utils/jwt.js";
// untuk menghandle token jwt 
export default function handleToken(req, res, next) {
    // mendapatkan cookies
    const token = req.cookies.token;

    // mengecek tokennya ada atau tidak
    if (!token) {
        return res.status(401).json({status: false, message: "token tidak ada anda belum login"});
    }

    // jika token ada maka cek apakah valid atau tidak
    try {
        const payload = verify(token);
        req.result = payload
        next()
    } catch (error) {
        return res.status(401).json({
            status: false,
            message: error,
        });
    }
}
