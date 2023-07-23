const userImages = document.querySelectorAll(".card-wrapper-users > img");
const userText = document.querySelector(".card-wrapper-users > span");
userImages.forEach((user, index) => {
    user.style = `--i:${index + 1}`;
    user.style.position = "absolute";
    user.style.left = "calc(var(--i) * 10px)";
    // userText.style.marginLeft = `${userImages.length * 20}px`;
})


//! All List Cards Scroll bar;
const listCards = document.querySelectorAll(".kanban-list-cards");
// console.log(listCards);
listCards?.forEach(card => {
    // console.log(card.scrollHeight);
    if (card.scrollHeight > 500) {
        card.style.overflowY = "scroll";
    }
    else {
        card.style.overflowY = "auto";
    }
});

// Kanban mouse grabbing:
const kanbanSection = document.querySelector(".kanban-content-section");
let isDown = true;
let startX;
let scrollLeft;

kanbanSection.addEventListener("mousedown", (e) => {
    isDown = true;
    kanbanSection.classList.add("active");
    startX = e.pageX - kanbanSection.offsetLeft;
    scrollLeft = kanbanSection.scrollLeft;
    console.log(startX);
});

kanbanSection.addEventListener("mouseleave", (e) => {
    isDown = false;
    kanbanSection.classList.remove("active");
});

kanbanSection.addEventListener("mouseup", (e) => {
    isDown = false;
    kanbanSection.classList.remove("active");
});

kanbanSection.addEventListener("mousemove", (e) => {
    if (!isDown) return; // stop the fn from running
    e.preventDefault();
    const x = e.pageX - kanbanSection.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    kanbanSection.scrollLeft = scrollLeft - walk;
    console.count(isDown);
});
