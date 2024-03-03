import template from '../data_images/Rome.jpeg';
import templateAudio from '../data_audio/first-fairy-tale/Rome.mp3';
import templateAudio2 from '../data_audio/first-fairy-tale/Rome2.mp3';

export const FirstFairyTale = [
  {
    text: 'Roma in Italia est. Italia in Europa est. Graecia in Europa est. Italia et Graecia in Europa sunt. Hispania quoque in Europa est. Hispania et Italia et Graecia in Europa sunt.',
    image: template,
    audio: templateAudio,
  },
  {
    text: 'Aegyptus in Europa non est, Aegyptus in Africa est. Gallia non in Africa est, Gallia est in Europa. Syria non est in Europa, sed in Asia. Arabia quoque in Asia est.',
    image: template,
    audio: templateAudio2,
  },
  {
    text: 'Syria et Arabia in Asia sunt. Germania non in Asia, sed in Europa est. Britannia quoque in Europa est. Germania et Britannia sunt in Europa.',
    image: template,
    audio: templateAudio,
  },
  {
    text: 'Ответьте быстренько на тест',
    test: {
      text: 'Сколько будет 5 + 6',
      variants: [
        'Да',
        'Нет',
        '11',
        'Sardinia insula Romana est. Creta, Rhodus, Naxus, Samos, Chios, Lesbos, Lemnos, Euboea sunt insulae Graecae. In Graecia multae insulae sunt. In Italia et in Graecia sunt multa oppida. In Gallia et in Germania multi sunt fluvii. Suntne multi fluvii et multa oppida in Arabia? In Arabia non multi, sed pauci fluvii sunt et pauca oppida',
      ],
    },
    rightAnswer: '11',
    success: 'МОЛОДЕЦ! Ты выучил',
    error: 'Неправильно! Учи заново',
  },
  {
    text: 'Estne Gallia in Europa? Gallia in Europa est. Estne Roma in Gallia? Roma in Gallia non est. Ubi est Roma? Roma est in Italia. Ubi est Italia? Italia in Europa est. Ubi sunt Gallia et Hispania? Gallia et Hispania in Europa sunt.',
    image: template,
    audio: templateAudio2,
  },
  {
    text: 'Estne Nilus in Europa? Nilus in Europa non est. Ubi est Nilus? Nilus in Africa est. Rhenus ubi est? Rhenus est in Germania. Nilus fluvius est. Rhenus fluvius est. Nilus et Rhenus fluvii sunt. Danuvius quoque fluvius.',
    image: template,
    audio: templateAudio,
  },
  {
    text: 'Nilus et Rhenus fluvii sunt. Danuvius quoque fluvius est. Rhenus et Danuvius sunt fluvii in Germania. Tibеris fluvius in Italia est. Nilus fluvius magnus est. Tiberis non est fluvius magnus, Tiberis fluvius parvus est. Rhenus non est fluvius parvus, sed fluvius magnus. Nilus et Rhenus non fluvii parvi, sed fluvii magni sunt. Danuvius quoque fluvius magnus est.',
    image: template,
    audio: templateAudio2,
  },
  {
    text: 'Corsica insula est. Corsica et Sardinia et Sicilia insulae sunt. Britannia quoque insula est. Italia insula non est. Sicilia insula magna est. Melita est insula parva. Britannia non insula parva, sed insula magna est. Sicilia et Sardinia non insulae parvae, sed insulae magnae sunt.',
    image: template,
    audio: templateAudio,
  },
  {
    text: 'Brundisium oppidum est. Brundisium et Tiisculum oppida sunt. Sparta quoque oppidum est. Brundisium est oppidum magnum. Ttisculum oppidum parvum est. Delphi quoque oppidum parvum est. Ttisculum et Delphi non oppida magna, sed oppida parva sunt. Ubi est Sparta? Sparta est in Graecia. Sparta est oppidum Graecum. Sparta et Delphi oppida Graeca sunt. Ttisculum non oppidum Graecum, sed oppidum Romanum est. Ttisculum et Brundisium sunt oppida Romana.',
    image: template,
    audio: templateAudio2,
  },
  {
    text: 'Sardinia insula Romana est. Creta, Rhodus, Naxus, Samos, Chios, Lesbos, Lemnos, Euboea sunt insulae Graecae. In Graecia multae insulae sunt. In Italia et in Graecia sunt multa oppida. In Gallia et in Germania multi sunt fluvii. Suntne multi fluvii et multa oppida in Arabia? In Arabia non multi, sed pauci fluvii sunt et pauca oppida.',
    image: template,
    audio: templateAudio,
  },
  {
    text: 'Num Creta oppidum est? Creta oppidum non est! Quid est Creta? Creta insula est. Num Sparta insula est? Sparta non est insula! Quid est Sparta? Sparta oppidum est. Rhenus quid est? Rhenus est magnus fluvius. Num oceanus Atlanticus parvus est? Non parvus, sed magnus est oceanus. Ubi est imperium Romanum? Imperium Romanum est in Europa, in Asia, in Africa. Hispania et Syria et Aegyptus provinciae Romanae sunt. Germania non est provincia Romana: Germania in imperio Romano non est. Sed Gallia et Britannia sunt provinciae Romanae. In imperio Romano multae sunt provinciae. Magnum est imperium Romanum!',
    image: template,
    audio: templateAudio2,
  },
];
