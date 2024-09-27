const fs = require('fs');
const path = require('path');

// Controller for the classes page
const classes = (req, res) => {
  res.render("classes", { title: "Our Classes", page: "classes" });
};

// Controller for the home page
const home = (req, res) => {
  res.render("home", { title: "Restaurant Home", page: "home" });
};

// Controller for the about page
const about = (req, res) => {
  res.render("about", { title: "About", page: "about" });
};

// Controller for the contact page
const contact = (req, res) => {
  res.render("contact", { title: "Contact", page: "contact" });
};

// Updated gallery controller
const gallery = (req, res) => {
  const imageDir = path.join(__dirname, '../../public/images');
  
  fs.readdir(imageDir, (err, files) => {
    if (err) {
      console.error('Error reading image directory', err);
      return res.status(500).send('Error reading image directory');
    }
    
    // Filter the files to get only image formats
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    
    // Render the gallery view and pass the image array to it
    res.render("gallery", { title: "Gallery", page: "gallery", images });
  });
};

// Controller for the signup page
const signup = (req, res) => {
  res.render("signup", { title: "Signup", page: "signup" });
};

const query = (req, res) => {
  res.render("query", { title: "Query", page: "query" });
};

// Export the controllers
module.exports = {
  about,
  home,
  classes,
  gallery,
  contact,
  signup,
  query,
};
