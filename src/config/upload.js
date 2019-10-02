const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, callback) => {
      const extname = path.extname(file.originalname);
      const name = path.basename(file.originalname, extname)

      callback(null, `${name}-${Date.now()}${extname}`)
    }
  })
};
