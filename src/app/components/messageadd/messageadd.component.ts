import { MessageService } from './../../services/message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-message-add',
  imports: [],
  templateUrl: './messageadd.component.html',
  styleUrl: './messageadd.component.css'
})
export class MessageaddComponent {

  constructor(private messageService: MessageService) { }

  sendMessage(message: string) {
    this.messageService.sendMessage(message)
  }
  clearMessage() {
    this.messageService.clearMessages();
  }
}