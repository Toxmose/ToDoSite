const addBtn = document.querySelector(".btn-add");
const toDoList = document.querySelector(".toDoList");
// const log = document.querySelector(".log");
// add a counter i to count how many input fields we have and to edit the class-name?
let i = 0;
let log = "";

const addNewTask = () => {
  // input field should be a toggle class - toggled visible whenever the add task button is clicked and dissapearing when task is entered
  newToDo = document.createElement("input");
  newToDo.setAttribute("type", "text");
  newToDo.setAttribute("placeholder", "So, what are we doing?");
  toDoList.appendChild(newToDo);
  newToDo.addEventListener("change", updateValue);
  i++;
};

// the "addNew" functions should be called when the task is entered, not when adding a new task.
const addNewTrashCan = () => {
  newTrashCan = document.createElement("i");
  newTrashCan.className = "fa fas fa-trash";
  toDoList.appendChild(newTrashCan);
};

const addNewClipboardCheck = () => {
  newClipboardCheck = document.createElement("i");
  newClipboardCheck.className = "fa fas fa-clipboard-check";
  toDoList.appendChild(newClipboardCheck);
};

const addNewHighlight = () => {
  newHighlight = document.createElement("i");
  newHighlight.className = "fa fas fa-exclamation-circle";
  toDoList.appendChild(newHighlight);
};

const updateValue = (e) => {
  log = document.getElementsByTagName("li");
  log.textContent = e.target.value;
};

const registerToDo = () => {
  registerToDoContent = document.createElement("li");
  registerToDoContent.className = `log${i}`;
  toDoList.appendChild(registerToDoContent);
};

addBtn.addEventListener("click", () => {
  addNewTask();
  addNewClipboardCheck();
  addNewTrashCan();
  addNewHighlight();
  registerToDo();
});
