const body = document.querySelector("body"),
    sidebar = document.querySelector(".sidebar"),
    toggle = document.querySelector(".toggle"),     
    modeSwitch = document.querySelector(".toggle-switch"),
    modeText = document.querySelector(".mode-text");



    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
    });
