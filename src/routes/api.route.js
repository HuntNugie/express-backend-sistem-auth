import { Router } from "express";
import authRoute from "./auth.route.js"

// route khusus untuk endpoint api
const route = Router();

// untuk endpoint authentikasi
route.use("/auth",authRoute)

export default route