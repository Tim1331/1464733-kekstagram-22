const uploadForm = document.querySelector('.img-upload__form');
const resizeMinus = uploadForm.querySelector('.scale__control--smaller');
const resizePlus = uploadForm.querySelector('.scale__control--bigger');
const resizeValue = uploadForm.querySelector('.scale__control--value');
const picturePreview = uploadForm.querySelector('.img-upload__preview');

const PictureSize = {
  MIN: 25,
  MAX: 100,
  DEFAULT: 100,
  STEP: 25,
};

let currentPictureSize = 100;

/*
  Запись значения масштаба в value нужного input.
  Добавление внутритегового стиля к масшатабируемому изображению.
*/
const setPictureSize = (size) => {
  resizeValue.value = size + '%';
  picturePreview.style = `transform: scale(${size / 100})`;
  currentPictureSize = size;
};

/*
  Уменьшает масштаб изображения на величину PictureSize.STEP
  и записывает новый масштаб изображения в поле resizeValue

 */
const onResizeMinusClick = () => {
  if (currentPictureSize > PictureSize.MIN) {
    const newSize = currentPictureSize - PictureSize.STEP;
    setPictureSize(newSize);
  }
};


const onResizePlusClick = () => {
  if (currentPictureSize < PictureSize.MAX) {
    const newSize = currentPictureSize + PictureSize.STEP;
    setPictureSize(newSize);
  }
};

/*
  Увеличивает масштаб изображения на величину PictureSize.STEP
  и записывает новый масштаб изображения в поле resizeValue
 */

const initialize = () => {
  setPictureSize(PictureSize.DEFAULT);
  resizeMinus.addEventListener('click', onResizeMinusClick);
  resizePlus.addEventListener('click', onResizePlusClick);
};
initialize();
/*
 Удаляет обработчики с кнопок масштабирования изображения
*/
const finalize = () => {
  resizeMinus.removeEventListener('click', onResizeMinusClick);
  resizePlus.removeEventListener('click', onResizePlusClick);
};
finalize;

