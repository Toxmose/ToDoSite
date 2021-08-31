// selectors
const addButton = document.querySelector(".btn-add-todo");
const newToDoInput = document.getElementById("new-todo");
const todoList = document.querySelector(".todo-list");

// click events

addButton.addEventListener("click", newToDo);
todoList.addEventListener("click", checkRaiseDelete);

// functions

function newToDo(event) {
  // prevent form from submitting
  event.preventDefault();

  // create div
  const newItem = document.createElement("div");
  newItem.classList.add("todo-item");
  todoList.appendChild(newItem);

  // create li
  const toDoContent = document.createElement("li");
  toDoContent.innerText = newToDoInput.value;
  newItem.appendChild(toDoContent);

  // create 3 buttons
  const clipBoardButton = document.createElement("button");
  clipBoardButton.innerHTML = "<i class='fas fa-clipboard-check'></i>";
  clipBoardButton.classList.add("btn");
  clipBoardButton.classList.add("btn-done");
  newItem.appendChild(clipBoardButton);

  const exclamationButton = document.createElement("button");
  exclamationButton.innerHTML = "<i class='fas fa-exclamation-circle'></i>";
  exclamationButton.classList.add("btn");
  exclamationButton.classList.add("btn-important");
  newItem.appendChild(exclamationButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("btn");
  trashButton.classList.add("btn-trash");
  newItem.appendChild(trashButton);

  // empty input field
  newToDoInput.value = "";
}

// when clicking the clipboard button - text should get class added to change font to strikethrough
function checkRaiseDelete(e) {
  const item = e.target;
  if (item.classList.contains("btn-done")) {
    const todo = item.parentElement;
    todo.classList.add("done");
  } else console.log("nope");
}
