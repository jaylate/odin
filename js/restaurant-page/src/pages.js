let content = document.getElementById("content");
let header = document.createElement("h1");
let description = document.createElement("div");

export const homePage = () => {   
    header.textContent = "Apple Cafe";
    description.textContent = "A cafe full of apples everywhere";
    
    content.appendChild(header);
    content.appendChild(description);
};

export const menuPage = () => {
    header.textContent = "Menu";
    description.textContent = "Here is a list of our dishes:";
    
    let menu = document.createElement("ul");
    for (let item of ["Apple Pie - 2$", "Apple with apples - 0.5$", "Apple big plate - 10$"]) {
	let li = document.createElement("li");
	li.textContent = item;
	menu.appendChild(li);
    }

    content.appendChild(header);
    content.appendChild(description);
    content.appendChild(menu);
};

export const aboutPage = () => {
    header.textContent = "About";
    description.textContent = "AppleGuy - 1-800-APPLES";

    content.appendChild(header);
    content.appendChild(description);
};
