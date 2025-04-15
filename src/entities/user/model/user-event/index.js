import GenericModel from "@Application/repository/generic-model";
import Schema from "./schema";
import User from "../schema";
import UserEvent from "./schema";

const Model = {
  ...GenericModel(Schema),

  // Obtener nombres de usuario por ID de evento
  async getUserNamesByEventId(EventId) {
    const userEvents = await UserEvent.findAll({
      where: { EventId },
      include: User,
    });
    return userEvents.map((user) => user.User);
  },
};

export default Model;
