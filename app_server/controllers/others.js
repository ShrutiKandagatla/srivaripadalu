const about = (req, res) => {
    res.render("about", { title: "About" });
  };
  const gallery = (req, res) => {
    res.render("gallery", { title: "Gallery" });
  };
  const classes = (req, res) => {
    res.render("classes", { title: "Classes" });
  };
  const contact = (req, res) => {
    res.render("contact", { title: "Contact" });
  };
  const query = (req, res) => {
    res.render("query", { title: "Query" });
  };

  const submit = (req, res) => {
    res.render("submit", { title: "Submit" });
  };

  module.exports = {
    about,
    gallery,
    classes,
    contact,
    query,
    submit,
  };