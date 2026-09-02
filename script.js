// ===== CONTACT FORM → WHATSAPP =====

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const whatsappNumber = "919087434731";

        const text =
            "Hello PREKSHA LIGHTING WORLD,\n\n" +
            "I would like to make a lighting enquiry.\n\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Email: " + email + "\n" +
            "Requirement: " + message;

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(text);

        window.location.href = whatsappURL;
    });

    // ===== FOOTER YEAR =====

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
