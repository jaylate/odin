import "./style.css";

import { dropdown } from "./dropdown.js";
import { carousel } from "./carousel.js";

const button = document.querySelector(".menu");
const dropdownEl = document.querySelector(".dropdown");
dropdown(button, dropdownEl, false);

const carouselDiv = document.querySelector(".carousel");
carousel(carouselDiv, 5000);
