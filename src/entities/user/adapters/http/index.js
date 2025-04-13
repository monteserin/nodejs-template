import express from "express";
import Controller from "../../controller";
import { asyncHandler } from "@Application/middlewares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Application/middlewares/restricted-access";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await Controller.get();
    res.send(data);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      body: { email, username, password },
    } = req;
    await Controller.create({ email, username, password });
    res.send("Usuario creado con éxito!!");
  })
);

router.get(
  "/getUsersInEvent/:eventId",
  asyncHandler(async (req, res) => {
    const { eventId } = req.params;
    const data = await Controller.getUsersInEventId(eventId);
    res.send(data);
  })
);

export default (app, entityUrl) => app.use(entityUrl, router);
