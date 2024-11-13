import { Router } from "express";
import SessionController from "./controllers/SessionController.js";
import UserController from "./controllers/UserController.js";
import auth from "./middlewares/auth.js";

import multer from "multer";
import uploadConfig from "./middlewares/upload.js";
import PropertyController from "./controllers/PropertyController.js";
import MessageController from "./controllers/MessageController.js";

const upload = multer(uploadConfig);
const router = Router();

router.post('/creatusers', UserController.createUser);
router.get('/listusers', UserController.findAllUser);
router.get('/listusers/:userId', UserController.findUser);
router.post('/session', SessionController.createSession);
router.post('/createproperty', upload.single("thumb"), PropertyController.craeteProperty);
router.get('/listproperty', PropertyController.findAllProperty);
router.get('/listproperty/:slug', PropertyController.findProperty);
router.post('/createmessage', MessageController.createMessage);
router.get('/listmessage/:id', MessageController.findMessage);

export { router }