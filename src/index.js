import express from "express";
import cors from "cors";

import tokenRoutes from "./routes/tokens.js";
import notificationRoutes from "./routes/notifications.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tokens", tokenRoutes);
app.use("/api/notifications", notificationRoutes);

app.listen(3001, () => {
    console.log("Server running on port 3001");
});