const config = {
  port: 8080,
  mongo: {
    url: "mongodb://localhost:27017/portfolio",
    options: { useNewUrlParser: true, useUnifiedTopology: true },
  },
};

module.exports = config;
