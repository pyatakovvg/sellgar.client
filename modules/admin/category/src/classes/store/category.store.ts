import { CategoryEntity } from '@library/domain';

import { injectable } from 'inversify';
import { makeObservable, observable, action } from 'mobx';

export const CategoryStoreSymbol = Symbol.for('CategoryStore');

@injectable()
export class CategoryStore {
  @observable inProcess: boolean = false;
  @observable data: CategoryEntity;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  setData(data: CategoryEntity) {
    this.data = data;
  }
  @action.bound
  setProcess(state: boolean) {
    this.inProcess = state;
  }
}
