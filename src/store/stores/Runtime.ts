import { makeAutoObservable } from 'mobx';
export class Runtime {
  constructor() {
    makeAutoObservable(this);
  }

  fairyTale?: number = undefined;

  setFairyTale(value: number) {
    this.fairyTale = value;
  }
}
