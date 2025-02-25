const express = require("express");

const app = express();

const users = require("./users.json");

app.use(express.json());

const port = 1000;

function middleware(req, res, next) {
  console.log("Middleware executed");
  next();
}

app.use(middleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === Number(req.params.id));
  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user);
  }
});

app.listen(1000, () => {
  console.log("Server is running on 1000");
});
