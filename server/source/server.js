import express from "express";
import cors from "cors";
import path from 'node:path';
import { fileURLToPath } from 'url';
import { router } from "./routes.js";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();

app.use('/uploads', express.static(path.resolve(dirname, '../', 'uploads')));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  app.use(cors());
  next();
});

app.use(router);

app.listen(8000, () => {
  console.log("Running at 8000");
})