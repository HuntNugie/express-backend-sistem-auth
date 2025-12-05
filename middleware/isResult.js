export const isResult = async (req, res, next) => {
    const obj = {
        email: req.body.email,
        password: req.body.password,
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
