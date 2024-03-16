import { IFairyTaleData } from '../../configs/types';

export interface IInput {
  dataItem: string;
  onClick: (value: string) => void;
  data?: IFairyTaleData;
  isDisabled?: boolean;
  className?: string;
}
