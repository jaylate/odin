class Book {
  read = false;
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  toggleRead() {
    this.read = !this.read;
  }

  addBookToLibrary(title, author, pages) {
    bookList.push(this);
  }
}

class Library {
  constructor(books) {
    this.bookList = books;
  }

  index(book) {
    return this.bookList.indexOf(book);
  }

  addBook(title, author, pages) {
    this.bookList.push(new Book(title, author, pages));
  }
  toggleRead(index) {
    this.bookList[index].toggleRead();
  }
  deleteBook(index) {
    this.bookList.splice(index, 1);
  }
}

function listBooks() {
  libraryDiv.innerHTML = "";
  for (book of myLibrary.bookList) {
    let card = document.createElement("div");
    card.dataset.index = myLibrary.index(book);
    card.classList.add("card");
    card.innerHTML = `<h3>${book.title} by ${book.author}</h3> (<span>${book.pages}</span>)<br> <p>${book.read ? "Already read" : "Not yet read"}</p> <br><button id="read">${book.read ? "Haven't read" : "Have read"}</button><button id="delete">Delete</button>`;

    let readButton = card.querySelector("#read");
    readButton.addEventListener("click", () => {
      let index = card.dataset.index;
      myLibrary.toggleRead(index);
      listBooks();
    });
    let deleteButton = card.querySelector("#delete");
    deleteButton.addEventListener("click", () => {
      let index = card.dataset.index;
      myLibrary.deleteBook(index);
      listBooks();
    });

    libraryDiv.appendChild(card);
  }
}

let myLibrary = new Library([]);

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

  for (let el of form.elements) {
    if (el.value == "") {
      alert("Form fields can't be empty");
      return;
    }
  }

  if (!form.elements["pages"].checkValidity()) {
    form.elements["pages"].setCustomValidity("Invalid value for pages field");
    return;
  }

  myLibrary.addBook(
    form.elements["title"].value,
    form.elements["author"].value,
    form.elements["pages"].value,
  );

  listBooks();

  dialog.close();
});

listBooks();
