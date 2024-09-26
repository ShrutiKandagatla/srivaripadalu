const classes = (req, res) => {
    const timings = [
      {
        day: "Saturday",
        batch1: {
            opening: "4:30pm",
            closing: "5:30pm"
        },
        batch2: {
            opening: "5:30pm",
            closing: "7:00pm"
        }
      },
      {
        day: "Sunday",
        batch1: {
            opening: "10:30pm",
            closing: "11:30pm"
        },
        batch2: {
            opening: "11:30pm",
            closing: "1:00pm"
        }
      },
      {
        day: "Monday",
        batch1: {
            opening: "4:30pm",
            closing: "5:30pm"
        },
        batch2: {
            opening: "5:30pm",
            closing: "7:00pm"
        }
      },
      {
        day: "Tuesday",
        batch1: {
            opening: "4:30pm",
            closing: "5:30pm"
        },
        batch2: {
            opening: "5:30pm",
            closing: "7:00pm"
        }
      },
    ];
  
    res.render("classes", { title: "Our Classes", timings, page: "classes" });
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
  
  const signup = (req, res) => {
    res.render("signup", { title: "Signup", page: "signup" });
  };

  module.exports = {
    about,
    home,
    classes,
    gallery,
    contact,
    signup,
  };