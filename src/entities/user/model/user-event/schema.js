import { db, DataTypes } from "@Application/database/db";

const UserEvent = db.define("UserEvent", {});

UserEvent.associate = ({ User, Event }) => {
  User.belongsToMany(Event, {
    through: UserEvent,
  });

  Event.belongsToMany(User, {
    through: UserEvent,
  });

  UserEvent.belongsTo(User, {
    foreignKey: { allowNull: false },
  });
  UserEvent.belongsTo(Event, {
    foreignKey: { allowNull: false },
  });
};

export default UserEvent;
