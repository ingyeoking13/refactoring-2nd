import {Producer} from './Producer';
import { IProducer } from './types';

export class Province {
  private _name: string;
  private _producers: IProducer[];
  private _totalProduction: number;
  private _demand: number;
  private _price: number;

  constructor(doc: Province) {
    this._name = doc.name;
    this._producers = [];
    this._totalProduction = 0;
    this._demand = doc.demand;
    this._price = doc.price;
    doc.producers.forEach((d) => this.addProducer(new Producer(this, d)));
  }

  get name(): string {
    return this._name;
  }
  get producers(): IProducer[] {
    return this._producers.slice();
  }

  get totalProduction() {
    return this._totalProduction;
  }

  set totalProduction(arg) {
    this._totalProduction = arg;
  }

  get demand(): number {
    return this._demand;
  }

  set demand(arg: number) {
    if (arg < 0 || Number.isNaN(`${arg}`) ) {
        this._demand = Number.NaN;
    }
    else this._demand = arg;
  }

  get price(): number {
    return this._price;
  }

  set price(arg: number) {
    this._price = arg;
  }

  addProducer = (arg: Producer) => {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  };

  get shortfall() {
    return this._demand - this.totalProduction;
  }

  get profit() {
    return this.demandValue - this.demandCost;
  }

  get demandValue() {
    return this.satisfiedDemand * this.price;
  }

  get satisfiedDemand() {
    return Math.min(this._demand, this.totalProduction);
  }

  get demandCost() {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach((p) => {
        const contiribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contiribution;
        result += contiribution * p.cost;
      });
    return result;
  }
}
