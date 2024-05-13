import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import connectToDb from "./db/connectToDb.js";
import router from "./routes/routes.js";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDirecoty = path.join(__dirname, "./public");
app.use(express.static(publicDirecoty));

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "32mb", extended: true }));
app.use(express.urlencoded({ limit: "32mb", extended: true }));
connectToDb();
app.use("/", router);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

