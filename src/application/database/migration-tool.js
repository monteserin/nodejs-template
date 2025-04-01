import { Umzug, SequelizeStorage } from "umzug";
import { Sequelize } from "sequelize";

export const createMigrationTool = async (sequelize) => {
  const MigrationTool = await new Umzug({
    migrations: {
      glob: "migrations/*.js",
      resolve: ({ name, path, context }) => {
        const migration = require(path);
        return {
          name,
          up: async () => migration.up(context, Sequelize),
          down: async () => migration.down(context, Sequelize),
        };
      },
    },
    logger: console,
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
  });

  const setMigrationsAsDone = async () => {
    console.info("Setting all migrations as done");
    const pendingMigrations = Array.from(await MigrationTool.pending());
    await Promise.all(
      pendingMigrations.map(({ file }) =>
        MigrationTool.storage.logMigration(file)
      )
    );
  };

  MigrationTool.on("migrating", (name) =>
    console.info("Running migration: ", name)
  );

  return {
    MigrationTool,
    setMigrationsAsDone,
  };
};
