// ===== FOOTER YEAR =====

document.getElementById("year").textContent = new Date().getFullYear();


// ===== CONTACT FORM → WHATSAPP =====

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // YOUR WHATSAPP NUMBER
    const whatsappNumber = "919087434731";

    const whatsappMessage =
        "Hello PREKSHA LIGHTING WORLD,\n\n" +
        "I would like to make a lighting enquiry.\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Requirement: " + message;

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

});
