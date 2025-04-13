import GenericModel from "@Application/repository/generic-model";
import Schema from "./schema";
import User from "../schema";
import UserEvent from "./schema";

const Model = {
  ...GenericModel(Schema),

  // Obtener nombres de usuario por ID de evento
  async getUserNamesByEventId(eventId) {
    return User.findAll({
      include: {
        model: UserEvent,
        required: true,
        where: { eventId },
      },
      attributes: ["userName"],
    });
  },
};

export default Model;
