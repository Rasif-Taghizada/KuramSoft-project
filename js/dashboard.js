const lists = document.querySelectorAll(".sidebar-nav-lists > li");
lists.forEach(elem => {
    const li = elem;
    // const icon = elem.documentquerySelector(".chevron-down")
    elem.addEventListener("click", () => {
        li.classList.toggle("list-active");
        // icon.classList.toggle("chevron-down-rotate")
    })
})

// Burger menu
const menu = document.querySelector(".fa-bars")

menu.addEventListener("click", () => {
    const leftSidebar = document.querySelector('.kuramsoft-dashboard-left-side');
    leftSidebar.classList.toggle("sidebar-close");
    if (menu.className === "fa-solid fa-xmark") {
        menu.className = "fa-solid fa-bars"
    } else {
        menu.className = "fa-solid fa-xmark"
    }
})


// Toggle 
// const toggles = document.querySelectorAll('.checkbox-apple');
// toggles.forEach(toggle => {
//     const toggleInput = toggle.querySelector("#check-apple");
//     toggle.addEventListener("click", () => {
//         console.log(toggleInput)
//     })
// })

// Table heade content sort
const sortIcons = document.querySelectorAll(".thead-asc");
console.log(sortIcons)
sortIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("thead-desc");
    })
})


