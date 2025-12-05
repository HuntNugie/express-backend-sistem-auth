import express from "express";
import cors from "cors";
import route from "./src/routes/index.route.js";
import cookieParser from "cookie-parser";
// untuk aplikasi expressnya
const app = express();

// untuk masalah cors
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
// untuk menghandle request data berbentuk json
app.use(express.json());
// untuk bisa menggunakan cookie
app.use(cookieParser());

// untuk route
app.use(route);

export default app

