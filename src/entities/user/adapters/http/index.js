import express from "express";
import Controller from "../../controller";
import { asyncHandler } from "@Application/middlewares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Application/middlewares/restricted-access";

const router = express.Router();

router.get(
  "/",
  restrictedAccess,
  asyncHandler(async (req, res) => {
    const data = await Controller.get();
    res.send(data);
  })
);

router.get(
  "/me",
  restrictedAccess,
  asyncHandler(async (req, res) => {
    const data = await Controller.getById(req.userId);
    res.send(data);
  })
);

router.get(
  "/get-users-in-event/:eventId",
  restrictedAccess,
  asyncHandler(async (req, res) => {
    const { eventId } = req.params;
    const data = await Controller.getUsersByEventId(eventId);
    res.send(data);
  })
);

export default (app, entityUrl) => app.use(entityUrl, router);
