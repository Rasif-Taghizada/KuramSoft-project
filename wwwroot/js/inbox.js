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
    btn.style.left = "185px";
}


//! User add or remove active class:
const users = document.querySelectorAll('.inbox-sidebar-user');

users.forEach(user => {
    user.addEventListener('click', () => {
        users.forEach(user => user.classList.remove('user-active'))
        user.classList.add('user-active');
    })
})


//! Contact Message active class:
let contactMsg = document.querySelector('.contact-message');
let msgSelected = contactMsg.querySelector('.contact-message-select');
msgSelected.addEventListener('click', () => {
    contactMsg.classList.toggle('contact-active');
    msgSelected.classList.toggle('active');

    //! User message chat active class:
    const allUserChats = document.querySelectorAll('.contact-active .user-chat');
    const contactUserChat = document.querySelector(".contact-user-chat")
    // console.log(allUserChats);

    allUserChats.forEach(userChat => {
        userChat.addEventListener('click', () => {
            allUserChats.forEach(userChat => userChat.classList.remove('active'))
            userChat.classList.add('active');
            // User chat content add active class:
            contactUserChat.classList.add('user-chat-active');
            // User chat close icon remove active class:
            const chatCloseIcon = document.querySelector(".user-chat-header > img")
            chatCloseIcon.addEventListener('click', () => {
                allUserChats.forEach(userChat => userChat.classList.remove('active'))
                contactUserChat.classList.remove('user-chat-active');
            })
        })
    });

})

