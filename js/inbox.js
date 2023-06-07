//! Inbox btn active class:
const inboxBtns = document.querySelectorAll('.inbox-sidebar-filter-btns > button');
const btn = document.querySelector('.filter-btn-active');
inboxBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        inboxBtns.forEach(btn => btn.classList.remove('btn-active'))
        btn.classList.add('btn-active');
    })
})

function leftClick() {
    btn.style.left = "5px";
}
function rightClick() {
    btn.style.left = "180px";
}


//! User add or remove active class:
const users = document.querySelectorAll('.inbox-sidebar-user');

users.forEach(user => {
    user.addEventListener('click', () => {
        users.forEach(user => user.classList.remove('usxer-active'))
        user.classList.add('user-active');
    })
})


//! Contact Message active class:
let contactMsg = document.querySelector('.contact-message');
let msgSelected = contactMsg.querySelector('.contact-message-select');
msgSelected.addEventListener('click', () => {
    contactMsg.classList.toggle('contact-active');

    msgSelected.classList.toggle('active');
})