module.exports = (app) => {
  const clients = require("../client.controller");

  // const multer = require("multer");
  // const upload = multer();

  app.get("/clientes/:clientId", clients.findOne);

  app.post("/authenticate", clients.authenticate);

  app.post("/register", clients.register);
};
