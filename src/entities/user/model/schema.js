import { db, DataTypes } from "@Application/database/db";
import "./user-event/schema.js";

export default db.define("User", {
  email: DataTypes.STRING,
  auth0Id: DataTypes.STRING,
  age: DataTypes.INTEGER,
});
