import express from "express";

const router = express.Router();
router.get("/are-you-alive", (req, res) => {
  res.status(200).send("Yes, I am alive!");
});

export default router;
