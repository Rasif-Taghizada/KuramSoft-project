//! Dashboard Page:
//* Burger Menu
const burgerMenu = document.querySelector(".icon-menu")
const sideBar = document.querySelector(".dashboard-sidebar");
burgerMenu?.addEventListener("click", () => {
    sideBar.classList.toggle("sidebar-close");
    if (burgerMenu.className === "icon-menu") {
        burgerMenu.className = "icon-arrow-back";
        burgerMenu.src = "./assets/icons/arrow-back-black.svg"
    } else {
        burgerMenu.className = "icon-menu"
        burgerMenu.src = "./assets/icons/menu-icon.svg"
    }
})

//* Sidebar Lists add class
const sidebarUl = document.querySelector(".sidebar-lists");
const sidebarLists = document.querySelectorAll(".sidebar-list-group");
sidebarLists.forEach(list => {
    // console.log(list)
    list.addEventListener("click", () => {
        sidebarLists.forEach(listItem => {
            if (listItem.classList.contains("list-group-active")) {
                listItem.classList.remove("list-group-active")
            }
        })
        list.classList.add("list-group-active")
    })
})


//* Navbar Side Menu 
const navSideLists = document.querySelectorAll(".list-select");
// console.log(navSideLists);
navSideLists.forEach(navList => {
    navList.addEventListener("click", () => {
        navList.classList.toggle("navList-open")
    })
})

//* Toggle Menu Button for Sidebar Menu
const navbarBtn = document.querySelector(".nav-sidebar-toggle-menu > button");
const navbarContainer = document.querySelector(".navbar-container");
// console.log(navbarBtn);
navbarBtn?.addEventListener("click", () => {
    navbarContainer.classList.toggle("navbar-container-close");
})


//! Table Container
//* Table heade content sort
const sortIcons = document.querySelectorAll(".thead-asc");
// console.log(sortIcons)
sortIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("thead-desc");
    })
})