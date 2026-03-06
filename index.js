function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
}



document.addEventListener("click", function (event) {

    const menu = document.getElementById("nav-menu");
    const toggle = document.querySelector(".menu-toggle");

    const clickedInsideMenu = menu.contains(event.target);
    const clickedToggle = toggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        menu.classList.remove("show");
    }

    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !expanded);

});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;
        const isOpen = question.classList.contains("active");

        /* close all FAQs */

        faqQuestions.forEach(q => {
            q.classList.remove("active");
            q.nextElementSibling.style.maxHeight = null;
        });

        /* open the clicked one if it was closed */

        if (!isOpen) {
            question.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }

    });

});



// Scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

question.setAttribute("aria-expanded", !isOpen);

