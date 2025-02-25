const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const port = 3000;

function middleware(req, res, next) {
  console.log("Middleware executed");
  next();
}

app.use(middleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.post("/login", (req, res) => {
//   const user = {
//     username: "admin",
//     password: "1234",
//   };
//   jwt.sign({ user }, "why", (err, token) => {
//     res.status(200).send(token);
//   });
// });
app.post("/users")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
