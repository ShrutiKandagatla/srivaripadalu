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
router.get("/event", ctrlLocations.event);
router.get("/query", ctrlLocations.query);
router.get("/submit", ctrlLocations.submit);
router.get("/pastevents", ctrlLocations.pastevents);
router.get("/futureevents", ctrlLocations.futureevents);
router.get("/past1", ctrlLocations.past1);
router.get("/past2", ctrlLocations.past2);
router.get("/past3", ctrlLocations.past3);
router.get("/future1", ctrlLocations.future1);
router.get("/future2", ctrlLocations.future2);
router.get("/future3", ctrlLocations.future3);
router.get("/", ctrlMain.index);

module.exports = router;
