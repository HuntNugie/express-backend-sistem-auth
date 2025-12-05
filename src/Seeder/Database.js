import User from "../models/User.js";

// untuk mengetess seeder dan mengetes jalan nya orm prisma
async function main() {
    await User.create({
        data: {
            email: "test@example.com",
            password: "123",
            profile: {
                create: {
                    nama: "test",
                    jenis_kelamin: "laki_laki",
                    tgl_lahir: "2025-12-05T01:15:32.123Z",
                },
            },
        },
    });
}

main()
.then((res) => console.log(`berhasil : ${res}`))
.catch((err) => console.log(`error : ${err}`));
