const NewsLetter = require("./newsletter.model");

const addSubscriberToNewsLetter = async (req, res) => {
  const emailId = req.body.emailId;

  if (!emailId) {
    return res.status(400).json({ message: "Email address required" });
  }

  if (!validateEmail(emailId)) {
    return res.status(400).json({ message: "Email address is invalid" });
  }

  try {
    const response = await NewsLetter.create({ emailId });
    return res.status(200).json(response);
  } catch (err) {
    console.error(err);

    if (err.code === 11000) {
      return res.status(400).json({ message: "Email ID already exists" });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

function validateEmail(emailId) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(emailId).toLowerCase());
}

module.exports = { addSubscriberToNewsLetter };
