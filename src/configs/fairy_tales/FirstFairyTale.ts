import template from '../data_images/Rome.jpeg';

export const FirstFairyTale = [
  {
    text: 'Roma in Italia est. Italia in Europa est. Graecia in Europa est. Italia et Graecia in Europa sunt. Hispania quoque in Europa est. Hispania et Italia et Graecia in Europa sunt.',
    image: template,
    audio: 'https://files.soundoftext.com/6d00a230-e3c3-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Aegyptus in Europa non est, Aegyptus in Africa est. Gallia non in Africa est, Gallia est in Europa. Syria non est in Europa, sed in Asia. Arabia quoque in Asia est.',
    image: template,
    audio: 'https://files.soundoftext.com/900ec900-e3c3-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Syria et Arabia in Asia sunt. Germania non in Asia, sed Europa est. Britannia quoque in Europa est. Germa10 nia et Britannia sunt in Europa.',
    image: template,
    audio: 'https://files.soundoftext.com/97d23e10-e3c3-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Estne Gallia in Europa? Gallia in Europa est. Estne? Roma in Gallia? Roma in Gallia non est. Ubi est Roma? Roma est in Italia. Ubi est Italia? Italia in Europa est. Ubi sunt Gallia et Hispania? Gallia et Hispania in Europa sunt.',
    image: template,
    audio: 'https://files.soundoftext.com/9e9f4530-e3c3-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Ответьте быстренько на тест',
    test: {
      text: 'Сколько будет 5 + 6',
      variants: ['Да', 'Нет', '11', 'Sardinia insula Romana est.'],
    },
    rightAnswer: '11',
    success: 'МОЛОДЕЦ! Ты выучил',
    error: 'Неправильно! Учи заново',
  },
];
