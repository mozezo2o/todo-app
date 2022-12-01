const body = document.querySelector("body");
const todoInput = document.querySelector("#todo");
const todoContainer = document.querySelector(".todo-container");
const itemsNumber = document.querySelector(".items-number");
const form = document.querySelector("form");
const cross = document.querySelectorAll(".cross");
const choices = document.querySelector(".choices");
const active = document.querySelector("[data-active = 'active']");
const completed = document.querySelector("[data-completed = 'completed']");
let id;
if (window.localStorage.id) id = JSON.parse(window.localStorage.id);
else id = 0;
let todoList;
if (window.localStorage.todoList)
  todoList = JSON.parse(window.localStorage.todoList);
else todoList = [];

const addTodo = function (todoTask = todoList) {
  id = id + 1;
  todoContainer.textContent = "";
  todoTask.forEach((todo) => {
    const html = `
    <div class="todo ${todo.checked === true ? "completed" : ""}" id =${
      todo.id
    }>
      <img src="./images/icon-cross.svg" alt="" class='cross'>
         <div class="todo--check">
              <p >${todo.text}</p>
              <div class ='checked'><div class='img ${
                todo.checked === true ? "opacity" : ""
              }'> <img src="./images/icon-check.svg"></div> </div>
          </div>

    </div>
    `;
    return todoContainer.insertAdjacentHTML("afterbegin", html);
  });
};

// todoContainer.addEventListener("load", () => {
//   addTodo(todoList);
// });
const todoLeft = () => {
  itemsNumber.textContent = "";
  const html = `
${todoList.filter((todo) => todo.checked !== true).length} item Left
`;

  return itemsNumber.insertAdjacentHTML("afterbegin", html);
};

// submit your todo

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isFinite(todoInput.value)) return;

  todoList.push({
    text: todoInput.value.trim(),
    id: id,
    checked: false,
  });
  todoInput.value = "";
  // addTodo();

  init();

  addToLocalStorage();
  choicesList();
  // if (todoList.length > 0)
  //   window.localStorage.setItem(JSON.stringify(todoList));
});

// delete your todo
const deleteTodo = function () {
  document.querySelectorAll(".cross").forEach((cross) => {
    cross.addEventListener("click", (e) => {
      const deletedTodo = e.target.closest(".todo");
      deletedTodo.remove();

      todoList = todoList.filter((todo) => todo.id !== +deletedTodo.id);
      todoLeft();
      addToLocalStorage();
    });
  });
};

// check your todo
let opacity = 0;
const ifChecked = function () {
  const imgChecked = document.querySelectorAll(".img");

  imgChecked.forEach((img) => {
    img.addEventListener("click", (e) => {
      img.classList.toggle("opacity");
      const todoTask = e.target.closest(".todo");
      todoTask.classList.toggle("completed");
      todoList.forEach((todo) => {
        if (todo.id === +todoTask.id) todo.checked = !todo.checked;
        todoLeft();
        if (active.classList.contains("active")) {
          addTodo(todoList.filter((todo) => todo.checked === false));
        }
        if (completed.classList.contains("active")) {
          addTodo(todoList.filter((todo) => todo.checked === true));
        }
      });
      addToLocalStorage();
    });
  });
};
ifChecked();

// filtering todoList
const choicesList = function () {
  const all = document.querySelector('[data-all = "all"]');
  const active = document.querySelector('[data-active = "active"]');
  const completed = document.querySelector('[data-completed = "completed"]');
  if (all.classList.contains("active")) {
    //   case all
    addTodo(todoList);
    init();
  }

  //   case active
  if (active.classList.contains("active")) {
    addTodo(todoList.filter((todo) => todo.checked === false));
    init();
  }

  //   case completed
  if (completed.classList.contains("active")) {
    addTodo(todoList.filter((todo) => todo.checked === true));
    init();
  }
};
const filteringTodoList = function () {
  choices.addEventListener("click", (e) => {
    document.querySelectorAll(".choices span").forEach((span) => {
      span.classList.remove("active");
    });
    e.target.closest("span").classList.add("active");
    choicesList();
  });
};
filteringTodoList();
const clearCompleted = function () {
  const clearButton = document.querySelector(".clear");
  const todo = document.querySelectorAll(".todo");
  clearButton.addEventListener("click", () => {
    todoList = todoList.filter((todo) => todo.checked !== true);
    addToLocalStorage();
    if (
      todo.forEach((todo) => {
        if (!todo.classList.contains("completed")) return;
        todo.remove();
        todoLeft();
      })
    );
  });
};
clearCompleted();

// try light and dark
const light = document.querySelector(".light");
const rootEle = document.querySelector(":root");
const header = document.querySelector(".header");
const main = document.querySelector("main");
const info = document.querySelector(".info");
const checked = document.querySelectorAll(".checked");
let dark;
if (window.localStorage.dark) dark = JSON.parse(window.localStorage.dark);
else dark = "dark";

light.addEventListener("click", () => {
  body.classList.toggle("light-seem");
  // lightSeem();
  // addToLocalStorage();
});
// add to local storage
const addToLocalStorage = function () {
  window.localStorage.setItem("todoList", JSON.stringify(todoList));
  window.localStorage.setItem("id", JSON.stringify(id));
  window.localStorage.setItem("dark", JSON.stringify(dark));
  const localStorage = JSON.parse(window.localStorage.todoList);
  todoList = localStorage;
  addTodo(localStorage);
  deleteTodo();
  clearCompleted();
  ifChecked();
  todoLeft();
};
// const localStorage = JSON.parse(window.localStorage.todoList);

addToLocalStorage();

const init = function () {
  deleteTodo();
  ifChecked();
  filteringTodoList();
  clearCompleted();
  todoLeft();
};
