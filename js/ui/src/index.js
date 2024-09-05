import "./style.css";

import { dropdown } from "./dropdown.js";

let button = document.querySelector(".menu");
let dropdownEl = document.querySelector(".dropdown");
dropdown(button, dropdownEl, false);
