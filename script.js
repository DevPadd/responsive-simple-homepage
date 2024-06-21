let darkMode = localStorage.getItem("darkMode");
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebarCloseBtn = document.querySelector(".sidebar-close");
const darkModeToggleBtn = document.querySelector(".dark-mode-toggle");
const pageIcon = document.querySelector(".icon");

const enableDarkMode = () => {
    // add the darkmode class to the body
    document.body.classList.add("dark-mode");
    pageIcon.setAttribute("src", "assets/alarado-icon-homepage-dark.svg");
    // update local storage
    localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
    // add the darkmode class to the body
    document.body.classList.remove("dark-mode");
    pageIcon.setAttribute("src", "assets/alarado-icon-homepage.svg");
    // update local storage
    localStorage.setItem("darkMode", "disabled");
};

const checkDarkMode = () => {
    if (darkMode !== "enabled") {
        enableDarkMode();
        console.log("dark mode ");
    } else {
        disableDarkMode();
        console.log("light mode ");
    }
};

if (darkMode == "enabled") {
    enableDarkMode();
}

darkModeToggleBtn.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    checkDarkMode();
});

hamburger.addEventListener("click", () => {
    sidebar.classList.add("sidebar-active");
});
sidebarCloseBtn.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-active");
});
