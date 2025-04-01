import db, { DataTypes, forceSyncDatabase } from "./db";
import { createMigrationTool } from "./migration-tool";

export { db, DataTypes };

export const setAssociations = (db) => {
  Object.keys(db.models).forEach((modelName) => {
    if ("associate" in db.models[modelName]) {
      db.models[modelName].associate(db.models);
    }
  });
};

export default async (onConnect) => {
  try {
    await setAssociations(db);
    await db.authenticate();

    // Sync & Migrations
    const { MigrationTool, setMigrationsAsDone } = await createMigrationTool(
      db
    );
    if (!forceSyncDatabase) await MigrationTool.up();

    await db.sync({ force: forceSyncDatabase });
    if (forceSyncDatabase) await setMigrationsAsDone();
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
};
