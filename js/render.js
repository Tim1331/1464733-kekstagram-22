import { generateFinal } from './generate-date.js';
const photos = generateFinal(25);
const pictureId = document.querySelector('#picture').content;
//Доступ к классам внутри шаблона #picture
const picture = pictureId.querySelector('.picture');
const pictureImg = picture.querySelector('.picture__img');
const pictureInfo = picture.querySelector('.picture__info');
const pictureComments = pictureInfo.querySelector('.picture__comments');
const pictureLikes = pictureInfo.querySelector('.picture__likes');
pictureLikes;
//Место добавления фотографий
const containerPictures = document.querySelector('.pictures');

const transformData = () => {
  photos.forEach((value) => {
    const arrayValue = Object.values(value);
    pictureImg.src = arrayValue[1];
    pictureLikes.textContent = arrayValue[3];
    pictureComments.length = arrayValue[5];
    const pictureClone = picture.cloneNode(true);
    containerPictures.appendChild(pictureClone);
  });
};
transformData();
