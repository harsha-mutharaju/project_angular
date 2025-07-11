import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signaldemo2',
  imports: [],
  templateUrl: './signaldemo2.component.html',
  styleUrl: './signaldemo2.component.css'
})
export class Signaldemo2Component {

  a: number = 0;
num: WritableSignal<number> = signal(0);
messages: WritableSignal<string[]> = signal([]);

numDouble: Signal<number> = computed(() => this.num() * 2);
numSquare: Signal<number> = computed(() => this.num() * this.num());

increment() {
  this.num.update((value: number) => value + 1);
  this.messages.set([
    ...this.messages(),
    `Value of Num is: ${this.num()}`
  ]);
}

decrement() {
  this.num.update((val: number) => val - 1);
  this.messages().pop();
  this.messages.set([...this.messages()]);
}

reset() {
  this.num.set(0);
  this.messages.set([]);
}
}
