import template from '../data_images/Rome.jpeg';

export const SecondFairyTale = [
  {
    text: 'Aegyptus in Europa non est, Aegyptus in Africa est.',
    image: template,
    audio: 'https://files.soundoftext.com/52467d70-72c1-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Gallia non in Africa est, Gallia est in Europa.',
    image: template,
    audio: 'https://files.soundoftext.com/fb021a80-ebae-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Syria non est in Europa, sed in Asia.',
    image: template,
    audio: 'https://files.soundoftext.com/0363f270-ebaf-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Arabia quoque in Asia est.',
    image: template,
    audio: 'https://files.soundoftext.com/0b989fe0-ebaf-11ee-a44a-8501b7b1aefa.mp3',
  },
];

export const SecondFairyTaleTest = [
  {
    text: 'Ответьте быстренько на тест',
    test: {
      text: 'Сколько 5 + 6',
      variants: ['Да', 'Нет', '11', 'asdfasdf.'],
    },
    rightAnswer: '11',
    success: 'МОЛОДЕЦ! Ты выучил',
    error: 'Неправильно! Учи заново',
  },
  {
    text: 'Ответьте быстренько на тест',
    test: {
      text: 'Сколько будет 9 + 6',
      variants: ['insula', '15', '33333', 'fdsafdsafdsa'],
    },
    rightAnswer: '15',
    success: 'МОЛОДЕЦ! Ты выучил',
    error: 'Неправильно! Учи заново',
  },
  {
    text: 'Ответьте быстренько на тест',
    test: {
      text: 'Сколько будет 5 * 11',
      variants: ['423414', '55', '2342', '423412343242342'],
    },
    rightAnswer: '55',
    success: 'МОЛОДЕЦ! Ты выучил',
    error: 'Неправильно! Учи заново',
  },
  {
    text: 'Ответьте быстренько на тест',
    test: {
      text: 'Сколько будет 9 + 5',
      variants: ['333333', '4242314', '14', '2222222222222222'],
    },
    rightAnswer: '14',
    success: 'МОЛОДЕЦ! Ты выучил',
    error: 'Неправильно! Учи заново',
  },
  {
    text: 'Ответьте быстренько на тест',
    test: {
      text: 'Сколько будет 5 * 12',
      variants: ['3222', '60', '11', '444'],
    },
    rightAnswer: '60',
    success: 'МОЛОДЕЦ! Ты выучил',
    error: 'Неправильно! Учи заново',
  },
];
