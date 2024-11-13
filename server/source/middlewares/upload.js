import multer from "multer";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from 'url';
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const tempFolder = path.resolve(dirname, "../", "../", "uploads");
const tempUpload = path.resolve(tempFolder, "uploads");

export default {
  directory: tempFolder,
  uolodadFolder: tempUpload,
  storage: multer.diskStorage({
    destination: tempFolder,
    filename(request, file, callback) {
      const hashFile = crypto.randomBytes(10).toString("hex");
      const nameFile = `${hashFile}-${file.originalname}`;

      return callback(null, nameFile);
    }
  })
}