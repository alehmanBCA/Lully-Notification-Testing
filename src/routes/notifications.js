import express from "express";
import { sendPush } from "../services/sendPush.js";

const router = express.Router();

let tokens = []; // replace with db

router.post("/send", async (req, res) => {
    const { message } = req.body;

    for (const token of tokens) {
        await sendPush(token, "Baby Alert", message);
    }

    res.json({ success: true });
});

export default router;