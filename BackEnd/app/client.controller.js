const Client = require("./models/client.model");

exports.findOne = (req, res) => {
  Client.findById(req.params.clientId, (err, data) => {
    if (err) {
      if (err.error === "not_found") {
        res.status(404).send({
          message: "Client not found with ID " + req.params.clientId,
        });
      } else if (err.error == "error_server") {
        res.status(500).send({
          message: "Could not connect to the server",
        });
      } else if (err.error == "error_syntax") {
        res.status(400).send({
          message: "Cannot contain letters",
        });
      }
    } else res.send(data);
  });
};

exports.authenticate = (req, res) => {
  Client.authenticate(req.body, (err, data) => {
    if (err) {
      if (err.error == "not_found") {
        res.status(404).send({
          message: "Username or password incorrect",
        });
      } else if (err.error == "error_server") {
        res.status(500).send({
          message: "Could not connect to the server",
        });
      }
    } else res.send(data);
  });
};
exports.register = (req, res) => {
  Client.register(req.body, (err, data) => {
    if (err.exist == true) {
      res.status(404).send({
        message: "User already exist",
      });
    } else {
      res.status(200).send({});
    }
  });
};
