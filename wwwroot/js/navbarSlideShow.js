const navbar = document.querySelector(".forms-nav");
const navbarList = document.querySelector(".forms-nav>ul");
const allList = document.querySelectorAll(".forms-nav>ul>li");
const nextListButton = document.querySelector(".forms-nav-right");
const prevListButton = document.querySelector(".forms-nav-left");
let showIndex = 0;
window.addEventListener("resize", () => {
  if (navbar.clientWidth > 1200) {
    showIndex = 6;
  } else if (navbar.clientWidth > 992) {
    showIndex = 5;
  } else if (navbar.clientWidth > 768) {
    showIndex = 4;
  } else if (navbar.clientWidth > 576) {
    showIndex = 3;
  }

  navbarList.innerHTML = "";
  let showList = [];
  for (let i = 0; i < showIndex; i++) {
    showList.push(allList[i]);
  }
  showList.forEach((list) => {
    navbarList.appendChild(list);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (navbar.clientWidth > 1200) {
    showIndex = 6;
  } else if (navbar.clientWidth > 992) {
    showIndex = 5;
  } else if (navbar.clientWidth > 768) {
    showIndex = 4;
  } else {
    showIndex = 3;
  }

  navbarList.innerHTML = "";
  let showList = [];
  for (let i = 0; i < showIndex; i++) {
    showList.push(allList[i]);
  }
  showList.forEach((list) => {
    navbarList.appendChild(list);
  });
});

let index = 0;
nextListButton.addEventListener("click", () => {
  index++;
  if (index > allList.length - showIndex) {
    index = 1;
  }
  let showList = [];
  for (let i = index; i < showIndex + index; i++) {
    showList.push(allList[i]);
  }
  navbarList.innerHTML = "";
  showList.forEach((list) => {
    navbarList.appendChild(list);
  });
});

prevListButton.addEventListener("click", () => {
  index--;
  if (index <= 0) {
    index = allList.length - showIndex;
  }
  let showList = [];
  for (let i = index - 1; i < showIndex + index; i++) {
    showList.push(allList[i]);
  }
  navbarList.innerHTML = "";
  showList.forEach((list) => {
    navbarList.appendChild(list);
  });
});
