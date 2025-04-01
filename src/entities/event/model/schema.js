import { db, DataTypes } from "@Application/database";

export default db.define("event", {
  name: DataTypes.STRING,
});
