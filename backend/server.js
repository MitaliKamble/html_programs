// const express = require("express");
// const app = express();

// const PORT = 7788;
// app.get("/", (req, res) => {
//   res.send("Welcome to express.js get method");
// });

// app.get("/getName", (req, res) => {
//     res.send("My college name is vasantdada patil college of Engg");
//   });

//   app.get("/getName/area", (req, res) => {
//     res.send("Vasantdada from Mumbai");
//   });

// app.listen(PORT, () => {
//   console.log(`My server is running on port number: ${PORT}`);
// });

const express = require("express");
const users = require("./users.json");
const app = express();
const PORT = 8899;

app.get("/users", (req, res) => {
  return res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user)=>user.id == id);
  return res.json(user);
});

app.listen(PORT, () => {
  console.log(`My server is running on port number: ${PORT}`);
});
