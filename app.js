import express from "express";
import cors from "cors";
import route from "./src/routes/index.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());

// untuk route
app.use(route);

export default app

