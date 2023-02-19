import {Province} from './Province';
import { IProducer } from './types';

export class Producer {
  private _province;
  private _cost : number;
  private _name: string;
  private _production: number;

  constructor(aProvince: Province, data: IProducer) {
    this._province = aProvince;
    this._cost = data.cost;
    this._name = data.name;
    this._production = data.production || 0;
  }

  get name() {
    return this._name;
  }

  get cost():number {
    return this._cost;
  }

  set cost(arg: number) {
    this._cost = arg;
  }

  get production():number {
    return this._production;
  }

  set production(amount: number) {
    const newProduction = Number.isNaN(amount) ? 0 : amount;
    this._province.totalProduction += newProduction - this._production;
    this._production = newProduction;
  }
}
