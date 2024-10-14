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

const gallery = (req, res) => {
  res.render("gallery", { title: "Gallery", page: "gallery" });
};

const query = (req, res) => {
  res.render("query", { title: "Query", page: "query" });
};

const submit = (req, res) => {
  res.render("submit", { title: "Submit", page: "submit" });
};

// Export the controllers
module.exports = {
  about,
  home,
  classes,
  gallery,
  contact,
  query,
  submit,
};
