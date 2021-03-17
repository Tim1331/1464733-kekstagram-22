
/* Выбор файла с изображением для загрузки */
const bodyTag = document.querySelector('body');
const control = document.querySelector('#upload-file');
const formEditPicture = document.querySelector('.img-upload__overlay');
const cancelUploading = formEditPicture.querySelector('#upload-cancel');

const offEscEvent = () => {
  document.removeEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      removeModalPicture();
    }
  });
}

const addModalPicture = () => {
  formEditPicture.classList.remove('hidden');
  bodyTag.classList.add('modal-open');
  offEscEvent();
};
control.addEventListener('change', addModalPicture);

const removeModalPicture = () => {
  formEditPicture.classList.add('hidden');
  bodyTag.classList.remove('modal-open');
};
cancelUploading.addEventListener('click', removeModalPicture);

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    removeModalPicture();
  }
});






