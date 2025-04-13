import { db, DataTypes } from "@Application/database/db";
import "./user-event/schema.js";

export default db.define("User", {
  email: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
});
