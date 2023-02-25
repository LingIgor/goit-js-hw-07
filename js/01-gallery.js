import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const partOfMarking = marking(galleryItems);

gallery.insertAdjacentHTML("beforeend", partOfMarking);

function marking(part) {
  return part
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (!e.target.dataset.source) {
    return;
  }
  const urlLargeFoto = e.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${urlLargeFoto}" width="800" height="600">
  `);
  instance.show();
}

// document.addEventListener("keydown", closeBigFoto);

// function closeBigFoto(e) {

//   if (instance.show() && e.keyCode === 27) {
//     console.log(e.keyCode);
//   }
// }
