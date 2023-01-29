import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message/message';

@Injectable({
  providedIn: 'root'
})
export class GlobalMessageService {
  messageSubject!: BehaviorSubject<Array<Message>>;
  private _messages!: Array<Message>;

  constructor() {
    this._messages = [];
    this.messageSubject = new BehaviorSubject<Array<Message>>(this._messages);
  }

  get messages(): Array<Message> {
    return this._messages;
  }
  set messages(messages: Array<Message>) {
    this._messages = messages;
    this.messageSubject.next(this._messages);
  }

  add(message: Message): void {
    this._messages.push(message);
    this.messageSubject.next(this._messages);
  }
  removeAt(index: number): void {
    this._messages.splice(index);
    this.messageSubject.next(this._messages);
  }
  remove(message: Message): void {
    let index = this._messages.indexOf(message);
    this._messages.splice(index, 1);
    this.messageSubject.next(this._messages);
  }
  clear(): void {
    this.messages = [];
  }
}
