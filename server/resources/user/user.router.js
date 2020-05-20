const { Router } = require("express");
const { me } = require("./user.controllers");

const router = Router();

router.get("/", me);

module.exports = router;
