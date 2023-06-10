const container = document.querySelector(".more-optionals-box");
const box = document.querySelectorAll(".box-content>div");
const menuArray = [
  {
    name: "Copy",
    icon: "./assets/icons/copy.svg",
  },
  {
    name: "Cut",
    icon: "./assets/icons/cut.svg",
  },
  {
    name: "Paste",
    icon: "./assets/icons/paste.svg",
  },
  {
    name: "Create Folder",
    icon: "./assets/icons/creat-folder.svg",
  },
  {
    name: "Delete",
    icon: "./assets/icons/trash-icons.svg",
  },
  {
    name: "Rename",
    icon: "./assets/icons/calendar-next.svg",
  },
  {
    name: "Upload",
    icon: "./assets/icons/insert-before.svg",
  },
];
box.forEach((item) => {
  item.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    createMenuonRightClick(e.clientX, e.clientY);
  });
});

function createMenuonRightClick(x, y) {
  const menuElement = document.createElement("div");
  menuElement.classList.add("right-click-menu");
  const menuListElement = document.createElement("ul");

  menuArray.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");
    img.src = item.icon;
    img.alt = item.name;
    a.appendChild(img);
    a.appendChild(document.createTextNode(item.name));
    li.appendChild(a);
    menuListElement.appendChild(li);
  });
  menuElement.appendChild(menuListElement);
  container.appendChild(menuElement);
  container.style.display = "block";
  container.style.top = `${y+40}px`;
  container.style.left = `${x-10}px`;
  window.addEventListener("click", () => {
    menuElement.remove();
    container.style.display = "none";
  });
}
