const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = cloudinary;

/*"install-all": "npm install && cd backend && npm install && cd ../frontend && npm install",
    "start": "npm --prefix frontend start",
    "dev": "concurrently -n frontend,backend -c cyan,green \"npm --prefix frontend start\" \"npm --prefix backend run dev\"",
    "frontend": "npm --prefix frontend start",
    "backend": "npm --prefix backend start",
    "backend:dev": "npm --prefix backend run dev",
    "seed": "npm --prefix backend run seed",
    "build": "npm --prefix frontend run build"*/