const input = document.getElementById("multiple-select");
const lists = document.querySelector(".multiple-select-list");
const listItems = document.querySelectorAll(".multiple-select-list>li");
const multipleAdd = document.querySelector(".multiple-sort-box");
window.addEventListener("click", (event) => {
  lists.classList.forEach((item) => {
    if (item === "multiple-select-list-active" && event.target !== input) {
      lists.classList.remove("multiple-select-list-active");
    }
  });
});
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
        div.innerHTML= `${value} <img src="./assets/icons/xmark-black.svg" alt="delete" class="delete-icon" />`;
        div.classList.add("multiple-sort-item");
        multipleAdd.appendChild(div);
        input.value = "";
        lists.classList.remove("multiple-select-list-active");
    });
})
    

multipleAdd.addEventListener("click", (e) => {
    let target = e.target.className;
    if(target === "delete-icon"){
        e.target.parentElement.remove();
    }
})