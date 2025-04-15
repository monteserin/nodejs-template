import { socketHandler } from "@Application/middlewares/error-handler";
import Controller from "../../controller";

const StartSocketServer = (io, socket) => {
  socket.on(
    "studentSuscribeOrLogInClassroom",
    socketHandler(async (msg) => {
      io.emit("studentSuscribeOrLogInClassroom", msg);
    })
  );
};

export default StartSocketServer;
