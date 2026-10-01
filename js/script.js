const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");

function closeLightbox() {
  if (lightbox.hidden) return;
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll(".gallery img").forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightbox.querySelector("button").focus();
  });
});

lightbox.querySelector("button").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
