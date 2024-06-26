export interface IFairyTale {
  id: number;
  name: string;
  data: IFairyTaleData[];
  test: IFairyTaleData[];
  order: string;
}

export interface IFairyTaleData {
  text: string;
  title?: string;
  image?: string;
  audio?: string;
  test?: IFairyTaleTest;
  rightAnswer?: string;
  success?: string;
  error?: string;
  textTooltip?: string[];
}

export interface IFairyTaleTest {
  text: string;
  variants: string[];
}
