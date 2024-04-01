import { IFairyTaleData } from '../../configs/types';

export interface IMiniTest {
  data?: IFairyTaleData;
  result?: string;
  setResult: (value?: string) => void;
  counter: number;
  setCounter: (counter: number) => void;
  page: number;
}
