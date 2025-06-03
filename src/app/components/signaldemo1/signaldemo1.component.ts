import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signaldemo1',
  standalone: true, // Add if using standalone component
  imports: [],
  templateUrl: './signaldemo1.component.html',
  styleUrls: ['./signaldemo1.component.css'] // Corrected property name from "styleUrl" to "styleUrls"
})
export class Signaldemo1Component {
  cookieCount: WritableSignal<number> = signal(10);

  butter = computed(() => this.cookieCount() * 0.1);
  sugar = computed(() => this.cookieCount() * 0.05);
  flour = computed(() => this.cookieCount() * 0.2);

  update(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cookieCount.set(parseInt(input.value));
  }
}
