const closePopup = document.getElementById("popup-close");
const popupActive = document.querySelector(".popup-input-box");
const popup = document.querySelector(".popup-container");
const errorContainer = document.querySelector(".error-container");
const openContainer = document.querySelectorAll(".btn-new,.add-new-button > button");
const closeContainer = document.querySelector(".close-container");
const dashboardContainer = document.querySelector(".dashboard-container");

closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
});

popupActive.addEventListener("click", () => {
    popup.classList.add("active");
});

openContainer.forEach((btn) => {
    btn.addEventListener("click", () => {
        errorContainer.classList.add("container-active");
        // dashboardContainer.style.filter = "blur(5px)";

        let screenWidth = window.visualViewport.width;
        if(screenWidth <= 576){
            errorContainer.style.width = "90%";
            errorContainer.style.left = "5%";
            let errorMainContent = document.querySelector(".error-main-content");
            errorMainContent.style.padding = "10px 15px";
            errorMainContent.style.gap = "10px";
        }
        if(screenWidth > 576){
            errorContainer.style.width = "80%";
            errorContainer.style.left = "10%";
        }
        if(screenWidth > 768){
            errorContainer.style.width = "70%";
            errorContainer.style.left = "15%";
        }
        if(screenWidth > 992){
            errorContainer.style.width = "60%";
            errorContainer.style.left = "20%";
        }
        if(screenWidth > 1200){
            errorContainer.style.width = "50%";
            errorContainer.style.left = "25%";
        }
    });
});


closeContainer.addEventListener("click", () => {
    errorContainer.classList.remove("container-active");
});