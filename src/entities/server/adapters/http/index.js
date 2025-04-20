import express from "express";
import { asyncHandler } from "@Application/middlewares/error-handler";
import restrictedAccess from "@Application/middlewares/restricted-access";

const router = express.Router();

router.get(
  "/health-check",
  asyncHandler(async (req, res) => {
    res.json({
      version: process.env.npm_package_version,
    });
  })
);

router.get(
  "/private-route-check",
  restrictedAccess,
  asyncHandler(async (req, res) => {
    res.json({
      userId: req.userId,
    });
  })
);

export default (app, entityUrl) => app.use(entityUrl, router);
