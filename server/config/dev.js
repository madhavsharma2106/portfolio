const config = {
  port: 8080,
  mongo: {
    url: "mongodb://localhost:27017/portfolioDev",
    options: { useNewUrlParser: true, useUnifiedTopology: true },
  },
  secrets: {
    jwt: process.env.JWT_SECRET || "madhavontheweb",
    jwtExp: "100d",
  },
};

module.exports = config;
