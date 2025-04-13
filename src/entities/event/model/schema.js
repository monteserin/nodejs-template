import { db, DataTypes } from "@Application/database/db";

const Event = db.define("Event", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Event;
