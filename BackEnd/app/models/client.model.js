const sql = require("./db.js");

// constructor
const Client = function () {};

Client.findById = (clientId, result) => {
  sql.query(
    "SELECT * FROM BankChurners WHERE CLIENTNUM = " + clientId,
    (err, res) => {
      if (res) {
        if (res.length) {
          result(null, res[0]);
        } else {
          result({ error: "not_found" }, null);
        }
      } else {
        result({ error: "not_found" }, null);
      }
    }
  );
};
Client.authenticate = (body, result) => {
  try {
    sql.query(
      "SELECT * FROM BankChurners.Users where username = '" +
        body.username +
        "' AND password = SHA1('" +
        body.password +
        "')",
      (err, res) => {
        if (res.length == 0) {
          result({ error: "not_found" }, null);
        } else {
          result(null, res[0]);
        }
      }
    );
  } catch (err) {
    result({ error: "error_server" }, null);
  }
};

Client.register = (body, result) => {
  sql.query(
    "INSERT INTO `BankChurners`.`Users` (`username`, `password`) VALUES ('" +
      body.username +
      "',SHA1('" +
      body.password +
      "'))",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result({ exist: true }, null);
      } else if (res.affectedRows) {
        result({ exist: false });
      }
    }
  );
};
module.exports = Client;
