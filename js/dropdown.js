//* Dropdown menu
const dropdowns = document.querySelectorAll(".dshb-dropdown-menu");
// console.log(dropdowns);
dropdowns.forEach(menu => {
    menu.addEventListener("click", () => {
        const selectMenu = menu.querySelector(".menu-select"),
            selectMenuText = selectMenu?.querySelector("p"),
            optionsMenu = menu.querySelectorAll(".menu-option-content");
        //? Select Menu add class
        selectMenu.classList.toggle("dropdown-menu-open");

        optionsMenu.forEach(option => {
            option.addEventListener("click", () => {
                const menuTextContent = option.querySelector("p");
                selectMenuText.textContent = menuTextContent.textContent;
            })
        })

    })
})

const list = document.querySelectorAll(".folder-explorer-list>li")
// console.log(list)
list.forEach((item) => {
    const li = item.children[1];
    item.addEventListener("click",()=>{
        li.classList.toggle("list-active")
    })
})

// * Modal Tab
const modalTab = document.querySelectorAll(".dropdown-box");
// console.log(modalTab);
modalTab.forEach(item => {
    item.addEventListener("click",()=>{
        item.classList.toggle("dropdown-box-active")
    })
})