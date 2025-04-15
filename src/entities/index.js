import userRoutes from "./user/adapters/http";
import eventRoutes from "./event/adapters/http";
import authRoutes from "./auth/adapters/http";
// import userSockets from './user/adapters/socket';

export const Routes = (app) => {
  userRoutes(app, "/user");
  // eventRoutes(app, "/event");
  authRoutes(app, "/auth");
};

export const Sockets = (io, socket) => {
  // userSockets(io, socket);
};
