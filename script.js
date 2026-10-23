const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
const kirimBtn = document.querySelector("#kirim-btn");

kirimBtn.addEventListener("click", function () {
    alert("Pesan Anda sudah terkirim");

    document.querySelectorAll(".box-bercerita input").forEach(function (input) {
        input.value = "";
    });
});

// Hamburger menu
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});