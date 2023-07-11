const uploadModal = document.querySelectorAll(".uplade-button");
const uploadModalContainer = document.getElementById("upload-container");
const uploadModalClose = document.querySelector(".close-modal");
const deleteInstall = document.querySelector(".upload-file-container")
uploadModal.forEach((modal) => {
  modal.addEventListener("click", () => {
    uploadModalContainer.classList.toggle("upload-container-active");
  });
});
uploadModalClose.addEventListener("click", () => {
  uploadModalContainer.classList.toggle("upload-container-active");
});


deleteInstall.addEventListener("click",(e) =>{
  let target = e.target;
  if(target.className === 'trash-icon'){
    target.parentElement.style.animation = 'slideOut 1s ease';
    setTimeout(() => {
      target.parentElement.remove();
    }
    , 900);
  }
})