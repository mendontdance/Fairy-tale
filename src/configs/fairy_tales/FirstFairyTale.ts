import firstImage from '../data_images/1.jpg';
import secondImage from '../data_images/2.jpg';
import thirdImage from '../data_images/3.jpg';
import fourthImage from '../data_images/4.jpg';
import fifthImage from '../data_images/5.jpg';

export const FirstFairyTale = [
  {
    text: 'Roma in Italia est.',
    image: secondImage,
    audio: 'https://files.soundoftext.com/a50f6330-ebae-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Italia in Europa est. Graecia in Europa est.',
    image: thirdImage,
    audio: 'https://files.soundoftext.com/b1a65950-ebae-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Italia et Graecia in Europa sunt.',
    image: fourthImage,
    audio: 'https://files.soundoftext.com/bbdeed10-ebae-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Hispania quoque in Europa est.',
    image: fifthImage,
    audio: 'https://files.soundoftext.com/d0d01a00-ebae-11ee-a44a-8501b7b1aefa.mp3',
  },
  {
    text: 'Hispania et Italia et Graecia in Europa sunt.',
    image: firstImage,
    audio: 'https://files.soundoftext.com/7fa6fb90-c605-11ee-a44a-8501b7b1aefa.mp3',
  },
];

export const FirstFairyTaleTest = [
  {
    text: 'Ответьте быстренько на тест',
    test: {
      text: 'Ubi est Roma?',
      variants: [
        'Graecia in Roma est.',
        'Roma est in Italia.',
        'Roma in Gallia non est.',
        'Italia et Graecia in Europa sunt.',
      ],
    },
    rightAnswer: 'Roma est in Italia.',
    success: 'МОЛОДЕЦ! Ты выучил',
    error: 'Неправильно! Учи заново',
  },
  {
    text: 'Ответьте быстренько на тест',
    test: {
      text: 'Estne Sparta in Italia?',
      variants: ['Gallia in Europa est.', 'Roma est in Italia', 'Sparta est in Graecia.', 'Italia est in Sparta.'],
    },
    rightAnswer: 'Roma est in Italia',
    success: 'МОЛОДЕЦ! Ты выучил',
    error: 'Неправильно! Учи заново',
  },
  {
    text: 'Ответьте быстренько на тест',
    test: {
      text: 'Ubi est Italia?',
      variants: [
        'Nilus in Europa non est.',
        'Italia non est in Graecia.',
        'Rima est in Italia.',
        'Italia et Graecia in Europa sunt.',
      ],
    },
    rightAnswer: 'Italia et Graecia in Europa sunt.',
    success: 'МОЛОДЕЦ! Ты выучил',
    error: 'Неправильно! Учи заново',
  },
  {
    text: 'Ответьте быстренько на тест',
    test: {
      text: 'Ubi sunt Syria et Arabia?',
      variants: ['Syria et Arabia in Asia sunt.', 'Syria est in Arabia.', 'Syria est in Asia.', 'Arabia est in Asia.'],
    },
    rightAnswer: 'Syria et Arabia in Asia sunt.',
    success: 'МОЛОДЕЦ! Ты выучил',
    error: 'Неправильно! Учи заново',
  },
  {
    text: 'Ответьте быстренько на тест',
    test: {
      text: 'Estne Aegyptus in Asia?',
      variants: ['Roma est in Asia.', 'Aegyptus in Asia est.', 'Estne Roma in Africa.', 'Aegyprus in Africa est.'],
    },
    rightAnswer: 'Aegyptus in Asia est.',
    success: 'МОЛОДЕЦ! Ты выучил',
    error: 'Неправильно! Учи заново',
  },
];
