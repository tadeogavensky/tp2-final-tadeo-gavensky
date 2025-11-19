import express from "express";
import router from "./routers/router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use("/", (req, res) => {
  res.status(200).json({ message: "Endpoint '/' funcionando" });
});

export default app;
