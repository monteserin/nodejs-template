import Service from "../service";

const Controller = {
  login(email, password) {
    return Service().signIn(email, password);
  },
  signUp(email, password) {
    return Service().signUp(email, password);
  },
};

export default Controller;
