const searchBtn = document.querySelector(".header__mobile-search");
const searchBox = document.getElementById("header-search");

function onSearchButtonClick() {
    searchBox.classList.toggle("show");
}
searchBtn.addEventListener("click", onSearchButtonClick);
