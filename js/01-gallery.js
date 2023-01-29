import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
console.log(makeGalleryMarkup(galleryItems));

function makeGalleryMarkup(cards) {
  const markup = galleryItems.map(({ preview, original, description }) => {
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
  });

  console.log(markup);
}

// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//     description: 'Hokkaido Flower',
//   }
