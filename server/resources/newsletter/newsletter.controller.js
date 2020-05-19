const NewsLetter = require("./newsletter.model");

const addSubscriberToNewsLetter = async (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ message: "Email address required" });
  }

  if (!emailValid()) {
    return res.send(400).json({ message: "Email address is invalid" });
  }

  try {
    const response = await NewsLetter.create(email);
    return res.json(response);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addSubscriberToNewsLetter };
