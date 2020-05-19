const config = {
  port: 8080,
  mongo: {
    url: "mongodb://localhost:27017/portfolioDev",
    options: { useNewUrlParser: true, useUnifiedTopology: true },
  },
};

module.exports = config;
