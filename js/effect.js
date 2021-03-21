
// Доступ к элементам
const uploadForm = document.querySelector('.img-upload__form');
const effectsRadio = uploadForm.querySelectorAll('.effects__radio');
const picturePreview = uploadForm.querySelector('.img-upload__preview');
const imageInset = picturePreview.querySelector('img');

// Создадим массив с названиями классов (СSS) эффектов
const effects = [
  'effects__preview--none',
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat',
];

//Создаем функцию


/* for (let i = 0; i < effectsRadio.length; i++) {
  addEffectsClickHandler(effectsRadio[i], effects[i]);
} */

/* global noUiSlider:readonly */
const effectLevel = uploadForm.querySelector('.effect-level__slider');
const effectValue = uploadForm.querySelector('.effect-level__value');

const onSliderEvent = () => {
  effectLevel.noUiSlider.on('update', (_, handle, unencoded) => {
    imageInset.style = `filter: grayscale(${unencoded[handle]})`;
    effectValue.value = unencoded[handle];
  });
}

/* const addEffectsClickHandler = (effectsRadio, effect) => {
  effectsRadio.addEventListener('click', () => {
    imageInset.className = effect;
  });
}
 */
effectsRadio[0].addEventListener('click', () => {
  imageInset.className = effects[0];
  effectLevel.noUiSlider.destroy();
});

effectsRadio[1].addEventListener('click', () => {
  imageInset.className = effects[1];
  noUiSlider.create(effectLevel, {
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1,
    connect: 'lower',
  })

  onSliderEvent();

});

effectsRadio[2].addEventListener('click', () => {
  imageInset.className = effects[2];
  noUiSlider.create(effectLevel, {
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1,
    connect: 'lower',
  })
  onSliderEvent();
});

effectsRadio[3].addEventListener('click', () => {
  imageInset.className = effects[3];
  noUiSlider.create(effectLevel, {
    range: {
      min: 0,
      max: 100,
    },
    start: 0,
    step: 1,
    connect: 'lower',
  })
  onSliderEvent();
});

effectsRadio[4].addEventListener('click', () => {
  imageInset.className = effects[4];
  noUiSlider.create(effectLevel, {
    range: {
      min: 0,
      max: 3,
    },
    start: 0,
    step: 0.1,
    connect: 'lower',
  })
  onSliderEvent();
});

effectsRadio[5].addEventListener('click', () => {
  imageInset.className = effects[5];
  noUiSlider.create(effectLevel, {
    range: {
      min: 1,
      max: 3,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  })
  onSliderEvent();
});

/* effectsRadio[1].addEventListener('click', () => {
  effectLevel.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1,
    connect: 'lower',
  })

  OnSliderEvent();
});

effectsRadio[2].addEventListener('click', () => {
  effectLevel.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1,
    connect: 'lower',
  })
  OnSliderEvent();
});

effectsRadio[3].addEventListener('click', () => {
  effectLevel.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 0,
    step: 1,
    connect: 'lower',
  })
  OnSliderEvent();
});

effectsRadio[4].addEventListener('click', () => {
  effectLevel.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 0,
    step: 0.1,
    connect: 'lower',
  })
  OnSliderEvent();
});

effectsRadio[5].addEventListener('click', () => {
  effectLevel.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  })
  OnSliderEvent();
}); */



