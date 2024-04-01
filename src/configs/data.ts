import { FirstFairyTale, FirstFairyTaleTest } from './fairy_tales/FirstFairyTale';
import { SecondFairyTale, SecondFairyTaleTest } from './fairy_tales/SecondFaityTale';

export const DATA = {
  FIRST_FAIRY_TALE: {
    id: 0,
    name: 'Fairy-tale about Rome',
    data: FirstFairyTale,
    test: FirstFairyTaleTest,
  },
  SECOND_FAIRY_TALE: {
    id: 1,
    name: 'Fairy-tale about Egypt',
    data: SecondFairyTale,
    test: SecondFairyTaleTest,
  },
};
