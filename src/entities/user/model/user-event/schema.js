import { db, DataTypes } from "@Application/database/db";

const UserEvent = db.define("UserEvent", {});

UserEvent.associate = (models) => {
  console.log("Associating UserEvent with User and Event models", models);
  const { User, Event } = models;
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
