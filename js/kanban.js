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
listCards.forEach(card => {
    // console.log(card.scrollHeight);
    if(card.scrollHeight > 500){
        card.style.overflowY = "scroll";
    }
    else{
        card.style.overflowY = "auto";    
    }
});