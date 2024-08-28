function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages, false));
}

function listBooks() {
    libraryDiv.innerHTML = '';
    for (book of myLibrary) {
	let card = document.createElement("div");
	card.dataset.index = myLibrary.indexOf(book);
	card.classList.add("card");
	card.innerHTML =
	    `<h3>${book.title} by ${book.author}</h3> (<span>${book.pages}</span>)<br> <p>${book.read ? "Already read" : "Not yet read"}</p> <br><button id="read">${book.read ? "Haven't read" : "Have read"}</button><button id="delete">Delete</button>`;

	let readButton = card.querySelector("#read");
	readButton.addEventListener("click", () => {
	    let index = card.dataset.index;
	    myLibrary[index].read = !myLibrary[index].read;
	    listBooks();
	});
	let deleteButton = card.querySelector("#delete");
	deleteButton.addEventListener("click", () => {
	    let index = card.dataset.index;
	    myLibrary.splice(index, 1);
	    listBooks();
	});
	
	libraryDiv.appendChild(card);
    }
}

const myLibrary = [new Book("test", "t", 222, false), new Book("test2", "b", 192, false), new Book("vfd", "vhn", 124, false)];
let libraryDiv = document.getElementById("library");

let dialog = document.getElementById("add_book_dialog");
let form = document.getElementById("add_book_form");
let addBookButton = document.getElementById("add_book");
let confirmButton = document.getElementById("confirm");

addBookButton.addEventListener("click", () => {
    dialog.showModal();
});

confirmButton.addEventListener("click", (event) => {
    event.preventDefault();

    addBookToLibrary(form.elements["title"].value, form.elements["author"].value, form.elements["pages"].value);
    listBooks();
    
    dialog.close();
});

listBooks();
