//* Burger Menu
const menu = document.querySelector(".icon-menu")
const sideBar = document.querySelector(".dashboard-sidebar");
menu.addEventListener("click", () => {
    sideBar.classList.toggle("sidebar-close");
    if (menu.className === "material-icons-round icon-menu") {
        menu.className = "material-icons-round icon-arrow-back";
        menu.textContent = "arrow_back"
    } else {
        menu.className = "material-icons-round icon-menu"
        menu.textContent = "menu"
    }
})

//! Navbar Side Menu 
const navSideLists = document.querySelectorAll(".list-select");
console.log(navSideLists);
navSideLists.forEach(navList => {
    navList.addEventListener("click", () => {
        navList.classList.toggle("navList-open")
    })
})

//! Toggle Menu Button for Sidebar Menu
const navbarBtn = document.querySelector(".nav-sidebar-toggle-menu > button");
const navbarContainer = document.querySelector(".navbar-container");
console.log(navbarBtn);
navbarBtn.addEventListener("click", () => {
    navbarContainer.classList.toggle("navbar-container-close");
})

//! Table heade content sort
const sortIcons = document.querySelectorAll(".thead-asc");
console.log(sortIcons)
sortIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("thead-desc");

    })
})