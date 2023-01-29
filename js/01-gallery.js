import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const cardMarkup = makeGalleryMarkup(galleryItems);
const galleryFilld = document.querySelector(".gallery");
galleryFilld.insertAdjacentHTML("beforeend", cardMarkup);

function makeGalleryMarkup(cards) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="large-image.jpg"
        alt="${description}"
        />
    </a>
    </div>
    `;
    })
    .join("");
}
