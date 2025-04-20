import express from "express";
import Controller from "../../controller";
import { asyncHandler } from "@Application/middlewares/error-handler";

const router = express.Router();

// GET ALL
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400);
    }

    const user = await Controller.login(email, password);
    if (!user) {
      return res.status(401);
    }

    res.send(user);
  })
);

router.post(
  "/sign-up",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400);
    }

    const data = await Controller.signUp(email, password);
    res.send(data);
  })
);

export default (app, entityUrl) => app.use(entityUrl, router);
