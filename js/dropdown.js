const list = document.querySelectorAll(".folder-explorer-list>li")
console.log(list)
list.forEach((item) => {
    const li = item.children[1];
    item.addEventListener("click",()=>{
        li.classList.toggle("list-active")
    })
})