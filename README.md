1. Crearemos el fichero .env a partir del fichero .env.example
2. En el fichero /entitis/user/adapters/http/index.js pondremos las rutas a las que accederemos. Tienes ejemplos de muchas peticiones en /entities/user/index.js

## HTTP SAMPLES

```js
// GET BY ID
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const {
      query: { id },
    } = req;
    const data = await Controller.getById(id);
    res.send(data);
  })
);

// CREATE
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      body: { email, username, password },
    } = req;
    await Controller.create({ email, username, password });
    res.send("Usuario creado con éxito");
  })
);

// DELETE
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const {
      params: { id },
    } = req;
    await Controller.deleteById(id);
    res.send(`User id: ${id} deleted`);
  })
);

// TOTAL UPDATE
router.put("/:id", async (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  await Controller.updateById(id, body);
  res.send(`User id: ${id} updated`);
});
```

## DOCUMENTATION

http://localhost:3000/docs/

## GENERAR LAS MIGRACIONES

npx sequelize-cli migration:generate --name new-field-age

## CREACIÓN DE RELACIONES ONE TO MANY

Author.associate = ({ book }) => {

if (!book) {
throw new Error("Book model is not defined");
}
Author.hasMany(book, { foreignKey: "fk_book", as: "stores" });

};

## CREACIÓN DE RELACIONES MANY TO MANY

UserEvent.associate = (models) => {
const { User, Event } = models;

if (!User || !Event) {
throw new Error("User or Event model is not defined");
}

User.belongsToMany(Event, {
through: UserEvent,
foreignKey: "fk_userId",
onDelete: "CASCADE",
});

Event.belongsToMany(User, {
through: UserEvent,
foreignKey: "fk_eventId",
onDelete: "CASCADE",
});

UserEvent.belongsTo(User, { foreignKey: "fk_userId" });
UserEvent.belongsTo(Event, { foreignKey: "fk_eventId" });
};
