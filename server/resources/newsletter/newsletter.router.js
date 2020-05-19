const { Router } = require("express");
const router = Router();

const {
  addSubscriberToNewsLetter,
  getAllSubscribers,
} = require("./newsletter.controller");

//api/newsletter
router.route("/").post(addSubscriberToNewsLetter).get(getAllSubscribers);

module.exports = router;
