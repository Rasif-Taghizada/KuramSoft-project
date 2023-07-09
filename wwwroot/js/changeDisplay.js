const listSystem = document.querySelector(".file-list-sistem");
const gridSystem = document.querySelector(".file-grid-manager");
const changeDisplayList = document.querySelector(".display-fullwidth");
const changeDisplayGrid = document.querySelector(".display-grid");

changeDisplayList.addEventListener("click", () => {
  listSystem.firstElementChild.style.display = "table";
  gridSystem.style.display = "none";
});

changeDisplayGrid.addEventListener("click", () => {
  listSystem.firstElementChild.style.display = "none";
  gridSystem.style.display = "block";
});
// console.log(listSystem.firstElementChild);
