const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Route for the gallery page
router.get('/gallery', (req, res) => {
  const imageDir = path.join(__dirname, '../public/images');
  fs.readdir(imageDir, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading image directory');
    }
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    res.render('gallery', { images });
  });
});

module.exports = router;
