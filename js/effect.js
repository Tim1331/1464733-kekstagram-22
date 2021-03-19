
/*
1. Создадим массив с названиями классов (СSS) назовем его effectType;
2. Получим доступ к нуныжным  элементам;
3. Cоздадим функцию
*/
// Создадим массив с названиями классов (СSS) эффектов
const effects = [
  'effects__preview--none',
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat',
];

// Доступ к элементам
const uploadForm = document.querySelector('.img-upload__form');
const effectsRadio = uploadForm.querySelectorAll('.effects__radio');
const picturePreview = uploadForm.querySelector('.img-upload__preview');
//const effectLevel = uploadForm.querySelector('.effect-level');

//Создаем функцию

const addEffectsClickHandler = (effectsRadio, effect) => {
  effectsRadio.addEventListener('click', () => {
    picturePreview.classListName = effect;
  });
}

for (let i = 0; i < effectsRadio.length; i++) {
  addEffectsClickHandler(effectsRadio[i], effects[i]);
}
