import { FirstFairyTale, FirstFairyTaleTest } from './fairy_tales/FirstFairyTale';
import { SecondFairyTale, SecondFairyTaleTest } from './fairy_tales/SecondFaityTale';

export const DATA = {
  FIRST_FAIRY_TALE: {
    id: 0,
    order: 'I.',
    name: 'Fairy-tale about Rome',
    data: FirstFairyTale,
    test: FirstFairyTaleTest,
  },
  SECOND_FAIRY_TALE: {
    id: 1,
    order: 'II.',
    name: 'Egypt',
    data: SecondFairyTale,
    test: SecondFairyTaleTest,
  },
  THIRD_FAIRY_TALE: {
    id: 2,
    order: 'III.',
    name: 'Egypt',
    data: SecondFairyTale,
    test: SecondFairyTaleTest,
  },
};
