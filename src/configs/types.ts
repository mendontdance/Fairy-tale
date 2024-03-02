export interface IFairyTale {
  id: number;
  name: string;
  data: IFairyTaleData[];
}

export interface IFairyTaleData {
  text: string;
  title?: string;
  image: any;
}
