import { Router } from "express";
import apiRoute from "./api.route.js"

const route = Router();
// untuk endpoint pertama 
route.get("/",(req,res)=>{
    return res.send("selamat datang di backend untuk sistem auth")
})

// untuk api
route.use("/api",apiRoute)

export default route