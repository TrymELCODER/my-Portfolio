document.addEventListener("DOMContentLoaded", function () {
    const aboutMeLink = document.querySelector("#aboutMeLink");
    const contactLink = document.querySelector("#contactLink");

    aboutMeLink.addEventListener("click", function () {
        window.location.href = "about.html";
    });

    contactLink.addEventListener("click", function () {
        window.location.href = "contact.html";
    });
});
