import {config} from "dotenv";
import app from "./app.js";
config();

app.listen(process.env.SERVER_PORT, () => {
    console.log("berjalan di port " + process.env.SERVER_PORT);
});
