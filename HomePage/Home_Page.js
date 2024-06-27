const sidebar = document.querySelector(".sidebar");
const toogleBtn = document.querySelector(".toggle-btn");
toogleBtn.addEventListener( "click", () => {
    sidebar.classList.toggle("active");
    });