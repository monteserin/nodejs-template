import { db, forceCleanDatabase } from "./db";

export const setAssociations = (db) => {
  Object.keys(db.models).forEach((modelName) => {
    if ("associate" in db.models[modelName]) {
      db.models[modelName].associate(db.models);
    }
  });
};

export default async (onConnect) => {
  try {
    setAssociations(db);
    await db.authenticate();
    await db.sync({ force: forceCleanDatabase });
    onConnect();
    console.log("Database connection OK!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
