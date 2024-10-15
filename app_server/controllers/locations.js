const fs = require('fs');
const path = require('path');

const classes = (req, res) => {
  res.render("classes", { title: "Our Classes", page: "classes" });
};

const home = (req, res) => {
  res.render("home", { title: "Restaurant Home", page: "home" });
};

const about = (req, res) => {
  res.render("about", { title: "About", page: "about" });
};

const contact = (req, res) => {
  res.render("contact", { title: "Contact", page: "contact" });
};

const event = (req, res) => {
  res.render("event", { title: "Events", page: "event" });
};

const query = (req, res) => {
  res.render("query", { title: "Query", page: "query" });
};

const submit = (req, res) => {
  res.render("submit", { title: "Submit", page: "submit" });
};

const pastevents = (req, res) => {
  res.render("pastevents", { title: "Past events", page: "pastevents" });
};

const futureevents = (req, res) => {
  res.render("futureevents", { title: "Future events", page: "futureevents" });
};

const past1 = (req, res) => {
  res.render("past1", { title: "Past1", page: "past1" });
};

const past2 = (req, res) => {
  res.render("past2", { title: "Past2", page: "past2" });
};

const past3 = (req, res) => {
  res.render("past3", { title: "Past3", page: "past3" });
};

const future1 = (req, res) => {
  res.render("future1", { title: "Future1", page: "future1" });
};

const future2 = (req, res) => {
  res.render("future2", { title: "Future2", page: "future2" });
};

const future3 = (req, res) => {
  res.render("future3", { title: "Future3", page: "future3" });
};

// Export the controllers
module.exports = {
  about,
  home,
  classes,
  event,
  contact,
  query,
  submit,
  pastevents,
  futureevents,
  past1,
  past2,
  past3,
  future1,
  future2,
  future3,
};
