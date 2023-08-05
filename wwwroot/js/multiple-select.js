const input = document.getElementById("multiple-select");
const lists = document.querySelector(".multiple-select-list");
const listItems = document.querySelectorAll(".multiple-select-list>li");
const multipleAdd = document.querySelector(".multiple-sort-box");
const dropdown = document.querySelector(".dropdown-input")
// window.addEventListener("click", (event) => {
//   lists.classList.forEach((item) => {
//     if (item.className === "dropdown-input active" && event.target !== dropdown) {
//       dropdown.classList.remove("active");
//     }
//   });
// });

input.addEventListener("click", () => {
  lists.classList.toggle("multiple-select-list-active");
});

input.addEventListener("keyup", () => {
  let value = input.value.toUpperCase();
  listItems.forEach((item) => {
    if (item.textContent.toUpperCase().indexOf(value) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    let value = item.textContent;
    let div = document.createElement("div");
    div.innerHTML = `${value} <img src="./assets/icons/xmark-black.svg" alt="delete" class="delete-icon" />`;
    div.classList.add("multiple-sort-item");
    multipleAdd.appendChild(div);
    input.value = "";
    dropdown.classList.remove("active");
  });
})


multipleAdd.addEventListener("click", (e) => {
  dropdown.classList.toggle("active");
  dropdown.style.top = `${multipleAdd.offsetHeight + 20}px`;

  let target = e.target.className;
  if (target === "delete-icon") {
    e.target.parentElement.remove();
  }
})