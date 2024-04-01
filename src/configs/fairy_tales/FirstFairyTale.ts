import template from '../data_images/Rome.jpeg';

export const FirstFairyTale = [
  {
    text: 'Roma in Italia est.',
    image: template,
    audio: 'https://files.soundoftext.com/a50f6330-ebae-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Italia in Europa est. Graecia in Europa est.',
    image: template,
    audio: 'https://files.soundoftext.com/b1a65950-ebae-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Italia et Graecia in Europa sunt.',
    image: template,
    audio: 'https://files.soundoftext.com/bbdeed10-ebae-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Hispania quoque in Europa est.',
    image: template,
    audio: 'https://files.soundoftext.com/d0d01a00-ebae-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Hispania et Italia et Graecia in Europa sunt.',
    image: template,
    audio: 'https://files.soundoftext.com/7fa6fb90-c605-11ee-a44a-8501b7b1aefa.mp3',
  },
];

export const FirstFairyTaleTest = [
  {
    text: 'Ответьте быстренько на тест',
    test: {
      text: 'Сколько будет 5 + 6',
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
