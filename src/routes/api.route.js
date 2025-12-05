import { Router } from "express";
import authRoute from "./auth.route.js"

// route khusus untuk endpoint api
const route = Router();

route.use("/auth",authRoute)

export default route