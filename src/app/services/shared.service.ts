import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private data: any = {};
  constructor() {}

  getData(key): any {
    return this.data[key];
  }

  setData(key, value): void {
    this.data[key] = value;
  }

  deleteData(key): void {
    delete this.data[key];
  }

  deleteAllData(): void {
    this.data = {};
  }
}
