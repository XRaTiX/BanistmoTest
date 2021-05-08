//Command to run in docker:

//docker run --link mysql:db -e DATABASE_HOST=db -p 127.0.0.1:3000:3000 --name webserver rangel/webserver

const express = require("express");
const { spawn } = require("child_process");
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

var cors = require("cors");

// use it before all route definitions
app.use(cors({ origin: "*" }));
app.get("/", (req, res) => {
  res.json({ message: "This is a test" });

  // var largeDataSet = [];
  // // spawn new child process to call the python script
  // const python = spawn("python", ["microservice.py", "715318008"]);
  // // collect data from script
  // python.stdout.on("data", function (data) {
  //   console.log("Pipe data from python script ...");
  //   largeDataSet.push(data);
  //   console.log(largeDataSet.toString());
  // });

  // var sys = require("util");
  // var exec = require("child_process").exec;

  // exec(
  //   "python ../MicroService2/microservice.py",
  //   function (err, stdout, stderr) {
  //     console.log(stdout);
  //   }
  // );
});

require("./app/routes/client.routes")(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
