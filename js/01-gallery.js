import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click', onImgClick);

function createGalleryItemsMarkup(items) {
	return items.map(({ preview, original, description }) => {
		return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
	}).join('');
}

function onImgClick(evt) {
	evt.preventDefault();
	const isImgClick = evt.target.dataset.source;
	if (!isImgClick) return;

	const instance = basicLightbox.create(
	`<img src="${evt.target.dataset.source}" width="800" height="600">`,
	{
		onShow: (instance) => {
			window.addEventListener('keydown', onEscKey);
		},
	
		onClose: (instance) => {
			window.removeEventListener('keydown', onEscKey);
		},
	}
);
	instance.show();

function onEscKey(evt) {
	if (evt.code !== 'Escape') return;
	instance.close();
		}
	}
