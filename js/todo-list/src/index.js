// TODO:
// - improve UI (styling, add show of dueDate, priorities)
// - sort items by priority/dueDate (and change their color)
// - add support for deleting TODOs
// - add support for localStorage
// - add button to mark as done in editing dialog

import "./style.css";
import { formatRelative } from "date-fns";

class Todo {
    done = false;
    constructor(title, description, dueDate, priority, notes) {
	this.title = title;
	this.description = description;
	this.dueDate = dueDate;
	this.priority = priority;
	this.notes = notes;
    }

    formattedDate() {
	return formatRelative(this.dueDate, new Date());
    }

    toggleDone() {
	this.done = !this.done;
	console.log(this.done, this.title);
    }
};

let todoList = JSON.parse(localStorage.getItem("todoList"));
// FIXME: storage support should be done in more elegant way,
// which will require change of add/change logic in forms

function addTodoItem(title, description, dueDate, priority, notes) {
    todoList.push(new Todo(title, description, dueDate, priority, notes));
}

function listTodos() {
    let container = document.getElementById("todo-list");
    container.innerHTML = '';
    function makeItemFrom(todo) {
	let itemDiv = document.createElement("div");
	let checkBox = document.createElement("input");
	let content = document.createElement("div");
	
	let itemDialog = document.getElementById("todo-dialog");
	let itemForm = document.querySelector("#todo-dialog>form");
	let itemConfirmButton = document.querySelector("#todo-dialog #confirm");
	
	content.addEventListener("click", () => {
	    itemForm.elements["title"].value = todo.title;
	    itemForm.elements["description"].value = todo.description;
	    itemForm.elements["due-date"].value = todo.dueDate;
	    itemForm.elements["priority"].value = todo.priority;
	    itemForm.elements["notes"].value = todo.notes;
	    itemForm.dataset.index = todoList.indexOf(todo);
	    
	    itemDialog.show();
	});
	itemConfirmButton.addEventListener("click", () => {
	    event.preventDefault();
	    todoList[itemForm.dataset.index].title = itemForm.elements["title"].value;
	    todoList[itemForm.dataset.index].description = itemForm.elements["description"].value;
	    todoList[itemForm.dataset.index].dueDate = itemForm.elements["due-date"].value;
	    todoList[itemForm.dataset.index].priority = itemForm.elements["priority"].value;
	    todoList[itemForm.dataset.index].notes = itemForm.elements["notes"].value;

	    listTodos();
	    itemDialog.close();
	});
	
	content.textContent = todo.title;
	checkBox.type = "checkbox";
	checkBox.checked = todo.done; // FIXME
	checkBox.addEventListener("click", todo.toggleDone);
	
	itemDiv.appendChild(checkBox);
	itemDiv.appendChild(content);
	return itemDiv;
    }
    if (todoList.length ==  0) {
	container.innerHTML = "There is no TODOs yet :(";
    }
    for (let todo of todoList) {
	let itemDiv = makeItemFrom(todo);
	container.appendChild(itemDiv);
    }

    localStorage.setItem("todoList", JSON.stringify(todoList));
}

let addButton = document.getElementById("add-todo");
let dialog = document.getElementById("add-todo-dialog");
let dialogForm = document.querySelector("#add-todo-dialog>form");
let confirmButton = document.querySelector("#add-todo-dialog #confirm");
addButton.addEventListener("click", () => {
    dialog.showModal();
});
confirmButton.addEventListener("click", () => {
    event.preventDefault();
    addTodoItem(dialogForm.elements["title"].value, dialogForm.elements["description"].value, dialogForm.elements["due-date"].value, dialogForm.elements["priority"].value, dialogForm.elements["notes"].value);
    listTodos();
    dialog.close();
});

listTodos();
