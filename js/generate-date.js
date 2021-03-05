import { chooseNumber } from './util.js';

// Коллекция имён (массив)
const names = [
  'Алексей', 'Александр', 'Андрей', 'Александра', 'Ангелина', 'Борис', 'Бротислав', 'Бэн', 'Бонни', 'Бэлла',
  'Владимир', 'Вячеслав', 'Воланд', 'Виктория', 'Валерия', 'Григорий', 'Герман', 'Геннадий', 'Галина', 'Гертруда',
  'Дмитрий', 'Денис', 'Довлат', 'Дарья', 'Дана',
];

//Коллекция сообщений (массив)
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const generateMessage = () => {
  const index = chooseNumber(0, 5);
  if (index <= messages.length - 1) {
    return messages[index];
  }
  return 'Некорректное значение';
}

const generateName = () => {
  const pointer = chooseNumber(0, names.length);
  if (pointer <= names.length - 1) {
    return names[pointer];
  }
  return 'Некорректное значение';
}

const commentGenerator = () => {
  const comments = [];
  const countComment = chooseNumber(0, 1);
  for (let i = 0; i <= countComment; i++) {
    comments.push({
      id: chooseNumber(15, 200),
      avatar: 'img/avatar' + chooseNumber(1, 6) + '.svg',
      message: generateMessage(),
      name: generateName(),
    });
  }
  return comments;
}

const useGenerationPhoto = (valueNumber) =>
  (
    {
      id: valueNumber + 1,
      url: 'photos/' + (valueNumber + 1) + '.jpg',
      description: 'Напишите здесь, чем ассоциуруется Ваша фотография',
      likes: chooseNumber(15, 200),
      comments: commentGenerator(),
    }
  );

const generateFinal = (quantity) => {
  const photos = [];
  for (let i = 0; i < quantity; i++) {
    photos.push(useGenerationPhoto(i));
  }
  return photos;
};

export { generateFinal };
