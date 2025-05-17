function openLightBox(imageElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = imageElement.src;
    lightbox.style.display = "flex";
}

function closeLightBox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}