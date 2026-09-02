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
    // Replace XXXXXXXXXX with your real WhatsApp number later.
    const whatsappNumber = "91XXXXXXXXXX";

    const whatsappMessage =
        "Hello PREKSHA LIGHTING WORLD,%0A%0A" +
        "I would like to make a lighting enquiry.%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A" +
        "Requirement: " + encodeURIComponent(message);

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");

});