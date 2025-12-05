import User from "../models/User.js";
export const register = async (req, res) => {
    try {
        console.log(req.result)
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
