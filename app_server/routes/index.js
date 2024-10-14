const express = require("express");
const router = express.Router();
const ctrlMain = require("../controllers/main");
const ctrlLocations = require("../controllers/locations");
const ctrlOthers = require("../controllers/others");
const ctrlQuery = require("../controllers/query");

router.get("/", ctrlLocations.home);
router.get("/classes", ctrlLocations.classes);
router.get("/contact", ctrlLocations.contact);
router.get("/about", ctrlLocations.about);
router.get("/gallery", ctrlLocations.gallery);
router.get("/query", ctrlLocations.query);
router.get("/submit", ctrlLocations.submit);

router.get("/", ctrlMain.index);

module.exports = router;
