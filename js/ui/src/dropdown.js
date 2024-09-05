// Implementation of dropdown
//
// button - element which needs to be clicked or hovered on
// menu - element that will show on Button click or hover
// onHover (by default false) - whether dropdown needs to
//                              be shown on hover or on click

function dropdown(button, menu, onHover = false) {
  let defaultDisplay = menu.style.display;
  menu.style.display = "none";
  if (onHover) {
    button.addEventListener("mouseover", () => {
      menu.style.display = defaultDisplay;
    });
    button.addEventListener("mouseout", () => {
      menu.style.display = "none";
    });
  } else {
    button.addEventListener("click", () => {
      if (menu.style.display == "none") {
        menu.style.display = defaultDisplay;
      } else {
        menu.style.display = "none";
      }
    });
  }
}

export { dropdown };
