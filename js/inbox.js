const btn = document.querySelector('.filter-btn-active');
function leftClick(e) {
    btn.style.left = "5px";
    
}
function rightClick() {
    btn.style.left = "180px";
}


//! User add or remove active class:
const users = document.querySelectorAll('.inbox-sidebar-user');

users.forEach(user => {
    user.addEventListener('click', () => {
        users.forEach(user => user.classList.remove('user-active'))
        user.classList.add('user-active');
    })
})

