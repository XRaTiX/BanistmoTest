const mysql = require("mysql2");
const config = require("../config/db.config.js");
//var Client = require("ssh2").Client;

// const ssh = new Client();
// ssh
//   .on("ready", function () {
//     ssh.forwardOut(
//       // source address, this can usually be any valid address
//       "127.0.0.1",
//       // source port, this can be any valid port number
//       12345,
//       // destination address (localhost here refers to the SSH server)
//       "192.168.122.240",
//       // destination port
//       22,
//       function (err, stream) {
//         if (err) throw err; // SSH error: can also send error in promise ex. reject(err)
//         // use `sql` connection as usual
//         console.log("SHH Forwarded");
//         const connection = mysql.createConnection({
//           host: "127.0.0.1",
//           user: "root",
//           password: "",
//           database: "BankChurners",
//           stream: stream,
//         });
//         // send connection back in variable depending on success or not
//         connection.connect(function (err) {
//           console.log("heullo");
//           if (err) {
//             console.log(
//               "Connection Refused 127.0.0.1 to MySQL Docker Container"
//             );
//           } else {
//             console.log("success");
//           }
//         });
//       }
//     );
//   })
//   .connect({
//     host: "192.168.122.240",
//     port: 22,
//     username: "a",
//     password: "a",
//   });

const connection = mysql.createConnection({
  host: config.HOST_DB,
  user: config.USER_DB,
  password: config.PASSWORD_DB,
  database: config.NAME_DB,
  port: config.PORT_DB,
});

// send connection back in variable depending on success or not
connection.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("Connection to MySQL successful");
  }
});

module.exports = connection;
