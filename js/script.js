// const input = document.querySelectorAll("input");
// const todoInput = document.querySelector("#todo");
// const form = document.querySelector("form");
// const todoContainer = document.querySelector(".todo-container");
// const infoContainer = document.querySelector(".info");
// const itemsNumber = document.querySelector(".items-number");
// const task = document.querySelectorAll(".todo");
// const cross = document.querySelectorAll(".cross");

// let id = 0;
// let todoList = [];

// // delete tasks

// const addTask = (todoLists) => {
//   id++;
//   if (todoLists.length === 0) return;
//   const html = todoLists
//     .map(
//       (todo) =>
//         `
//       <div class="todo" id ='${todo.id}'>
//           <img src="./images/icon-cross.svg" alt="" class='cross'>
//         <div class="todo--check">
//            <label for="">${todo.text}</label>
//                <input type="checkbox" name="" id="" />
//         </div>
//      </div>
//   `
//     )
//     .join("");
//   todoContainer.textContent = "";
//   return todoContainer.insertAdjacentHTML("afterbegin", html);
// };
// addTask(todoList);

// const updateItemsNumber = function () {
//   return (itemsNumber.textContent =
//     todoList.length <= 1
//       ? `${todoList.length} item left`
//       : `${todoList.length} items left`);
// };

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (todoInput.value.trim() === "") return;

//   todoList.push({
//     id: id,
//     text: todoInput.value.trim(),
//     checked: false,
//   });

//   addTask(todoList);
//   deleteTask();
//   updateItemsNumber();
//   checkBox();
//   todoInput.value = "";
// });

// const deleteTask = function () {
//   document.querySelectorAll(".todo").forEach((task) => {
//     task.addEventListener("click", (e) => {
//       if (!e.target.classList.contains("cross")) return;
//       console.log("cross");
//       e.target.closest(".todo").remove();

//       const deletedTodo = e.target.closest(".todo").getAttribute("id");
//       todoList = todoList.filter((todo) => +todo.id !== +deletedTodo);
//       updateItemsNumber();
//       return todoList;
//     });
//   });
// };

// deleteTask();

// // filtering completed and non
// const all = document.querySelector('[data-all = "all"] ');
// const active = document.querySelector('[data-active = "active"] ');
// const completed = document.querySelector('[data-completed = "completed"] ');
// const filterContainer = document.querySelectorAll(".choices span");
// filterContainer.forEach((span) => {
//   span.addEventListener("click", (e) => {
//     // span.style.color = "#fff";
//     filterContainer.forEach((span) => {
//       span.style.color = "#fff";
//     });
//     span.style.color = "hsl(220, 98%, 61%)";
//   });
// });
// //
// const checkBox = function () {
//   const checkBoxes = document.querySelectorAll(
//     ".todo input[type = 'checkbox']"
//   );

//   checkBoxes.forEach((i) => {
//     i.addEventListener("click", (e) => {
//       if (i.checked) console.log("checked");
//       const todo = e.target.closest(".todo");
//       console.log(todo);
//       todo.classList.toggle("completed");
//       todoList[+todo.id - 1].checked = !todoList[+todo.id - 1].checked;
//     });
//   });
// };
// checkBox();
// const showAll = () => {
//   all.addEventListener("click", () => {
//     addTask(todoList);
//     deleteTask();
//   });
// };
// const showActive = () => {
//   active.addEventListener("click", () => {
//     addTask(todoList.filter((todo) => todo.checked === false));
//     console.log("active");
//     deleteTask();
//   });
// };
// const showCompleted = () => {
//   completed.addEventListener("click", () => {

//     addTask(todoList.filter((todo) => todo.checked === true));
//     deleteTask();
//   });
// };
// const init = function () {
//   showAll();
//   showActive();
//   showCompleted();
//   checkBox();
// };
// init();

// // // try light and dark
// // const light = document.querySelector(".light");
// // const rootEle = document.querySelector(":root");
// // const header = document.querySelector(".header");
// // const body = document.querySelector("body");
// // let dark = "dark";
// // light.addEventListener("click", () => {
// //   dark === "dark" ? (dark = "light") : (dark = "dark");
// //   body.style.backgroundColor = `var(--${dark}--color)`;
// //   todoContainer.style.backgroundColor = `var(--${dark}--color--todo)`;
// //   todoContainer.style.color = `var(--${dark}--text--todo)`;
// //   header.style.backgroundImage = "url(./images/bg-desktop-light.jpg)";
// //   light.src = `./images/icon-${dark}.svg`;
// // });
