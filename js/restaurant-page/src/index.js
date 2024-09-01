import {homePage, menuPage, aboutPage} from "./pages.js";

let homeButton = document.getElementById("home");
let menuButton = document.getElementById("menu");
let aboutButton = document.getElementById("about");

homeButton.addEventListener("click", homePage);
menuButton.addEventListener("click", menuPage);
aboutButton.addEventListener("click", aboutPage);

homePage();


