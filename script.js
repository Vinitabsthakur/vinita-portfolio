const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});