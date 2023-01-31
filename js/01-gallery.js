import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const cardMarkup = makeGalleryMarkup(galleryItems);
const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML("beforeend", cardMarkup);

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

//Делегування

galleryContainer.addEventListener("click", onGalleryContainer);

function onGalleryContainer(evt) {
  const isImageGalleryEl = evt.target.classList.contains(gallery__image);
  if (!isImageGalleryEL) {
    return;
  }

  openModal();
  console.log(evt.target);
}

// rel = ”noopener noreferrer”
