console.log("JM Home Improvement");
const menuButton = document.querySelector(".menu-toggle");
const navigationMenu = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
    navigationMenu.classList.toggle("active");
});

navigationMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigationMenu.classList.remove("active");
    });
});

function sendContactToWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const service = document.getElementById("contact-service").value;
    const message = document.getElementById("contact-message").value.trim();

    const whatsappMessage =
        `Hello, my name is ${name}.\n` +
        `Phone: ${phone}.\n` +
        `Service required: ${service}.\n\n` +
        `Project details:\n${message}`;

    const whatsappUrl =
        `https://wa.me/447403474855?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank");
}

function sendContactBySMS() {
    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const service = document.getElementById("contact-service").value;
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !phone || !service || !message) {
        alert("Please complete all fields before sending.");
        return;
    }

    const smsMessage =
        `Hello, my name is ${name}.\n` +
        `Phone: ${phone}.\n` +
        `Service required: ${service}.\n\n` +
        `Project details:\n${message}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {
        alert("Text messages can only be sent from a mobile phone. Please use WhatsApp on this device.");
        return;
    }

    window.location.href =
        `sms:+447403474855?body=${encodeURIComponent(smsMessage)}`;
}