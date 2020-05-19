const mongoose = require("mongoose");
const config = require("./dev");

const connect = () => {
  mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => console.log("Connected to Mongodb successfuly"))
    .catch((err) => console.error(err));
};

module.exports = connect;
