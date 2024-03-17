// src/config/multerConfig.ts

import multer from 'multer'; 
import path from 'path';
const uploadDestination = path.join(__dirname, '../../src/uploads/');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDestination);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
 
});

const upload = multer({ storage });
export default upload;