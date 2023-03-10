import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/models/message/message';
import { GlobalMessageService } from 'src/app/services/global-message.service';

@Component({
  selector: 'app-global-message',
  templateUrl: './global-message.component.html',
  styleUrls: ['./global-message.component.scss']
})
export class GlobalMessageComponent implements OnInit {
  messageSubscription!: Subscription;
  messages!: Array<Message>;

  constructor(
    private globalMessageService: GlobalMessageService
  ) { }

  ngOnInit(): void {
    this.messageSubscription = this.globalMessageService.messageSubject.subscribe(messages => {
      this.messages = messages;
    });
  }
  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }

  close(message: Message): void {
    this.globalMessageService.remove(message);
  }

}
