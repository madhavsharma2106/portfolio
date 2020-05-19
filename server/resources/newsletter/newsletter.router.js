const { Router } = require("express");
const router = Router();

const { addSubscriberToNewsLetter } = require("./newsletter.controller");

//api/newsletter
router.route("/").post(addSubscriberToNewsLetter);

module.exports = router;
