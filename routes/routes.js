import { Router } from "express";
import Post from "../controllers/Post.js";
import Show from "../controllers/Show.js";
import ShowId from "../controllers/ShowId.js";

const router = Router();

router.post("/post", Post);
router.get("/get", Show);
router.get("/gets/:projectId", ShowId);

export default router;
