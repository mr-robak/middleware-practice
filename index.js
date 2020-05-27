const express = require("express");
const app = express();
const port = 3000;

//middleware

const loggingMiddleware = (req, res, next) => {
  res.setHeader("X-Codaisseur-Time", new Date());
  next();
};

const failRandomlyMiddleware = (req, res, next) => {
  Math.random() >= 0.5 ? res.status(500).send("Random error").end() : next();
};

app.use(loggingMiddleware);

//routes

app.get("/", failRandomlyMiddleware, (req, res) => res.send("Hello World!"));

app.get("/foo", (req, res) => res.send("Hello Foo!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
