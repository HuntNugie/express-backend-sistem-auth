import {config} from "dotenv";
import app from "./app.js";
config();
// untuk server expressnya
app.listen(process.env.SERVER_PORT, () => {
    console.log("berjalan di port " + process.env.SERVER_PORT);
});
