import multer from "multer";

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/") || file.mimetype.startsWith("video/")) {
        cb(null, true);
    } else {
        cb(new Error("Only images and videos are allowed!"), false);
    }
};

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter,
});

export default upload;
