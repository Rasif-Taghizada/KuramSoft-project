//* Select All hidden list items:
const hiddenListItems = document.querySelectorAll(".hidden-list-item");
hiddenListItems.forEach((listItem) => {
    listItem.addEventListener("click", () => {
        const nestedHiddenItems = listItem.querySelectorAll(".nested-hidden-list-item");
        nestedListAddIndex(nestedHiddenItems);
        // hiddenListItems.forEach((listItem) => listItem.classList.remove("hidden-list-active"));
        //TODO nested items add "active" class
        listItem.classList.toggle("hidden-list-active")

        //! Hidden List Icon add change to remove 
        const hiddenListIcon = listItem.querySelector(".icon-plus");

        //? Nested item list height:  45px
        if (listItem.classList.contains("hidden-list-active")) {
            listItem.style.paddingBottom = `${(nestedHiddenItems.length * 45) + 10}px`;
            listItem.style.transitionDelay = "0s";
        }
        else {
            listItem.style.paddingBottom = 10 + "px";
            listItem.style.transitionDelay = `${nestedHiddenItems.length * 0.2}s`
        }
    })
})

function nestedListAddIndex(allNestedItems) {
    // Nested list items add index for animation-delay;
    allNestedItems.forEach((hiddenListItem, index) => {
        hiddenListItem.style = `--i: ${index + 1}`
    })
}

//* Tab Boxs Container 
const tabs = document.querySelectorAll(".system-container-tab-boxs > li");
const allContent = document.querySelectorAll(".system-container-content-boxs > ul");
console.log(allContent)
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => tab.classList.remove("tab-box-active"))
        tab.classList.add("tab-box-active")

        allContent.forEach((content) => content.classList.remove("tab-content-active"));
        allContent[index].classList.add("tab-content-active");
    })
})

// Navbar list hover effect
let listContainer = document.querySelector(".dashboard-dropdown-lists");
let listItems = document.querySelectorAll(".dropdown-list-item");
listItems.forEach((item, index) => {
    item.addEventListener("mouseover", (e) => {
        let hiddenList = item?.querySelector(".dropdown-hidden-lists");
        if (hiddenList) {
            hiddenList.style.left = `${item.offsetLeft}px`;
        }
        else {
            return false;
        }
    })
})

// Navbar slider
const arrowIcons = document.querySelectorAll(".navbar-icon > img")
const navbar = document.querySelector(".dashboard-dropdown-lists"),
    { scrollWidth, clientWidth } = navbar;

arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        navbar.scrollLeft += icon.classList.contains("dashboard-nav-right") ? 100 : -100;
    })
})

navbar.addEventListener("scroll", (e) => {
    updateIcons(e.target.scrollLeft)
});

function updateIcons(scrolledLeft) {
    arrowIcons[0].parentElement.classList.toggle("hide", scrolledLeft <= 1);
    arrowIcons[1].parentElement.classList.toggle("hide", scrollWidth - (clientWidth + scrolledLeft) <= 1);
}