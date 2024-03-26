export interface IFairyTale {
  id: number;
  name: string;
  data: IFairyTaleData[];
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
}

export interface IFairyTaleTest {
  text: string;
  variants: string[];
}
