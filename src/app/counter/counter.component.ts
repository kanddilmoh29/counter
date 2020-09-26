import { Info, InformationService } from './../information.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  control: FormControl = new FormControl();
  public info: Array<Info>[] = [];
  counter: any = 1;
  previousValue: any;
  today: Date = new Date();

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAdd = new EventEmitter<any>();
  @Output() onPrevVal = new EventEmitter<any>();

  @ViewChild('input', { static: false }) input: ElementRef;

  ngOnInit() {
    this.control.valueChanges.pipe(pairwise()).subscribe(([oldValue]) => {
      this.previousValue = oldValue;
    });
  }

  increment(counter) {
    if (!this.counter) {
      return;
    }
    this.counter++;
    // Date.now();
    console.log(this.previousValue);

    this.info.push(this.previousValue);
    this.onAdd.emit(this.counter);
  }

  decrement() {
    this.counter--;
  }
}
