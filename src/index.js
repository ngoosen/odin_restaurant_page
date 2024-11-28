import "./styles.css";

import Home from "./home";
import About from "./about";
import Contact from "./contact";

function clear(doc) {
  doc.getElementById("content").innerHTML = "";
}

(function(doc) {
  Home(doc);

  const homeButton = doc.getElementById("home");
  homeButton.addEventListener("click", () => {
    clear(doc);
    Home(doc);
  });

  const menuButton = doc.getElementById("menu");
  menuButton.addEventListener("click", () => {
    console.log("menu");
  });

  const aboutButton = doc.getElementById("about");
  aboutButton.addEventListener("click", () => {
    clear(doc);
    About(doc);
  });

  const contactButton = doc.getElementById("contact");
  contactButton.addEventListener("click", () => {
    clear(doc);
    Contact(doc);
  });
})(document);
