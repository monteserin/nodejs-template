import userRoutes from "./user/adapters/http";
import eventRoutes from "./event/adapters/http";
// import userSockets from './user/adapters/socket';
import authRoutes from "./auth/adapters/http";

export const Routes = (app) => {
  userRoutes(app, "/user");
  authRoutes(app, "/auth");
  eventRoutes(app, "/event");
};

export const Sockets = (io, socket) => {
  // userSockets(io, socket);
};
