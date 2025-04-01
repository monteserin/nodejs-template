import { Sequelize, DataTypes } from "sequelize";

const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const forceSyncDatabase = process.env.DB_FORCE_SYNC === "true";
const isProduction = process.env.NODE_ENV === "production";

export default new Sequelize(database, user, password, {
  host,
  dialect: "mysql",
  logging: !isProduction && console.log,
});

export { DataTypes, forceSyncDatabase };
