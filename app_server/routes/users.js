const express = require('express');
const router = express.Router();

const userController = require("../controllers/others");
router.get("/",(req,res)=>{
  res.send("Users listening");
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
