import express from "express";
import Controller from "../../controller";
import { asyncHandler } from "@Application/middlewares/error-handler";
// import authMiddleware from "entities/auth/middelware";
// import Model from "entities/user/model";

const router = express.Router();

router.get(
  "/",
  // authMiddleware,
  asyncHandler(async (req, res) => {
    const data = await Controller.get();
    res.send(data);
  })
);

router.post(
  "/",
  // authMiddleware,
  asyncHandler(async (req, res) => {
    const {
      body: { name, primaryUser },
    } = req;
    await Controller.create({ name, primaryUser });
    res.send("Evento creado con éxito!!");
  })
);

export default (app, entityUrl) => app.use(entityUrl, router);
