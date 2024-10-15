const about = (req, res) => {
    res.render("about", { title: "About" });
  };
  const event = (req, res) => {
    res.render("event", { title: "Events" });
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

  const pastevents = (req, res) => {
    res.render("pastevents", { title: "Past events"});
  };
  
  const futureevents = (req, res) => {
    res.render("futureevents", { title: "Future events"});
  };
  
  module.exports = {
    about,
    event,
    classes,
    contact,
    query,
    submit,
    pastevents,
    futureevents,
  };