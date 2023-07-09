const closePopup = document.getElementById("popup-close");
const popupActive = document.querySelector(".popup-input-box");
const popup = document.querySelector(".popup-container");

closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
});

popupActive.addEventListener("click", () => {
    popup.classList.add("active");
}
);

