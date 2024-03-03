export interface IFairyTale {
  id: number;
  name: string;
  data: IFairyTaleData[];
}

export interface IFairyTaleData {
  text: string;
  title?: string;
  image?: any;
  audio?: any;
  test?: IFairyTaleTest;
  rightAnswer?: string;
  success?: string;
  error?: string;
}

export interface IFairyTaleTest {
  text: string;
  variants: string[];
}
