const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebarCloseBtn = document.querySelector(".sidebar-close");

hamburger.addEventListener("click", () => {
    sidebar.classList.add("sidebar-active");
});
sidebarCloseBtn.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-active");
});
