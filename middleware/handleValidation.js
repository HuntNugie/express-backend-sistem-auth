import {validationResult} from "express-validator";

// untuk menghandle validation form
export default function handleValidation(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            errors: errors.array(),
        });
    }
    next();
}
