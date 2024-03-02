import { makeAutoObservable } from 'mobx';
import { IFairyTale } from '../../configs/types';
export class Runtime {
  constructor() {
    makeAutoObservable(this);
  }

  fairyTale: IFairyTale | null = null;

  setFairyTale(value: IFairyTale) {
    this.fairyTale = value;
  }
}
