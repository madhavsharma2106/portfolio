const express = require("express");
const app = express();
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const config = require("./config/dev");

const connectToMongo = require("./config/db");
const newsLetterRouter = require("./resources/newsletter/newsletter.router");

app.disable("x-powered-by");
app.use(helmet());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/newsletter", newsLetterRouter);

app.listen(config.port, function () {
  connectToMongo();
  console.log("Server started on port ", config.port);
});
