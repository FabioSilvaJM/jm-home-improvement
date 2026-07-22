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
const galleryImages = document.querySelectorAll(".gallery-item img");
const galleryLightbox = document.getElementById("galleryLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.querySelector(".lightbox-close");

if (galleryLightbox && lightboxImage && lightboxClose) {
    galleryImages.forEach((image) => {
        image.addEventListener("click", () => {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            galleryLightbox.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    function closeGalleryLightbox() {
        galleryLightbox.classList.remove("active");
        document.body.style.overflow = "";
        lightboxImage.src = "";
    }

    lightboxClose.addEventListener("click", closeGalleryLightbox);

    galleryLightbox.addEventListener("click", (event) => {
        if (event.target === galleryLightbox) {
            closeGalleryLightbox();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeGalleryLightbox();
        }
    });
}