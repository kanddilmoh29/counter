import { Injectable } from '@angular/core';

export interface  Info {
 counter: number;
  previousValue: number;
}

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor() { }

  getInfo(): Array<Info> {
    return [
      {counter: 1,
        previousValue: 0
      }
    ];
  }

}
