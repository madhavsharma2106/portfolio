const { Router } = require("express");
const router = Router();

const { addSubscriberToNewsLetter } = require("./newsletter.controller");

router.route("/").post(addSubscriberToNewsLetter());
