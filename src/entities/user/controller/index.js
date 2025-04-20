import Model from "../model";
import UserEventModel from "../model/user-event";

const Controller = {
  get(conditions) {
    return Model.get(conditions);
  },
  getUsersByEventId(eventId) {
    return UserEventModel.getUserNamesByEventId(eventId);
  },
  getById(id) {
    return Model.getById(id);
  },
  // create(data) {
  //   return Model.create(data);
  // },
  // updateById(id, data) {
  //   return Model.updateById(id, data);
  // },
  // deleteById(id) {
  //   return Model.deleteById(id);
  // }
};

export default Controller;
