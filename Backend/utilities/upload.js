// // npm i multer cloudinary multer-s3 multer-storage-cloudinary

// import {v2 as cloudinary} from 'cloudinary'; 
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
// import { CloudinaryStorage } from 'multer-storage-cloudinary';
// import multer from 'multer';
const multer = require('multer');

// import dotenv from 'dotenv';
const dotenv = require('dotenv');
dotenv.config();



cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET_KEY 
  });

//   console.log("cloudinary",cloudinary)

const storage = new CloudinaryStorage({
cloudinary: cloudinary,
params: {
    folder: 'profile-pics',
    format: async (req, file) => { // random.jpg
        // Get the file extension
        let extArray = file.originalname.split(".");
        let extension = extArray[extArray.length - 1];
        return extension; // or return 'png', 'jpg', etc.
    },
    // more things can be added here
},

});

// console.log("storage",storage, )

const parser = multer({ 
    storage: storage ,
    fileFilter: function (req, file, cb) {
        // Accept images only
        let extArray = file.originalname.split(".");
        let extension = extArray[extArray.length - 1];
        let allowedExt = ["png", "jpg", "jpeg"];
        if (!allowedExt.includes(extension)) {
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
      }

});

// export default parser;

module.exports = parser;