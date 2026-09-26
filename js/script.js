/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const navLinks =
        document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


/* =========================
   DARK / LIGHT MODE
========================= */

function toggleTheme() {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

    } else {

        localStorage.setItem("theme", "dark");

    }
}


/* =========================
   LOAD SAVED THEME
========================= */

window.addEventListener("DOMContentLoaded", function () {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light");

    }

});


/* =========================
   CONTACT FORM
========================= */

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    const myEmail =
        "YOUR_EMAIL@gmail.com";


    const subject =
        "Portfolio Contact - " + name;


    const body =
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message;


    const mailtoLink =
        "mailto:" + myEmail +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);


    window.location.href = mailtoLink;

}