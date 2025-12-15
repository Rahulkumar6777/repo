import express from "express";
import { Data } from "../Controllers/index.js";

const router = express.Router();

router.post('/add' , Data.DataFetch)

export default router;