import crypto from "crypto";
import path from "path";
import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";

import env_vars from "dotenv";
env_vars.config();

var storage = new GridFsStorage({
    url: process.env.CONN_URL,
    options: { useUnifiedTopology: true }, //to avoid deprication warning
    file: (req, file) => {
        return {
            bucketName: "uploads",
            filename: `${Date.now()}-${file.originalname}`,
        }
    },
});
const upload = multer({ storage });



export default upload;