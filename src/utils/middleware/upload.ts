import multer from 'multer';
import {v4} from 'uuid';
import path from 'path';

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        
        console.log("this is original filename",file.originalname)
        cb(null, v4() + path.extname(file.originalname));
    }
});

export default multer({storage});