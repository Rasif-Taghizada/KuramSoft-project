const lists = document.querySelectorAll(".sidebar-nav-lists > li");
console.log(lists)
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
    menu.classList.replace("fa-bars" , "fa-xmark")
})