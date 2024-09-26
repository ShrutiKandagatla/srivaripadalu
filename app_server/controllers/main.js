const index = (req, res) => {
    res.render("index", { title: "Sri Vari Padalu", page: "home" });
  };
  
  module.exports = {
    index,
  };