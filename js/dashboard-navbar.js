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