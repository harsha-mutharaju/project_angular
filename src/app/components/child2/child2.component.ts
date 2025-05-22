import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['child2_a', 'child2_userName'],
  outputs: ['addressEvent']
})
export class Child2Component {
  child2_a!: number;
  child2_userName!: string;

  userAddress: string = 'Knoxville';

  addressEvent = new EventEmitter();

  sendDataToParent() {
    this.addressEvent.emit(this.userAddress);
  }
}
