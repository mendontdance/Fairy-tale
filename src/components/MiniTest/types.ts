import { IFairyTaleData } from '../../configs/types';

export interface IMiniTest {
  data: IFairyTaleData;
  setResult: (value?: string) => void;
  result?: string;
}
