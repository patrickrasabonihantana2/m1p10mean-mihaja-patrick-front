import { MessageLevel } from './message-level';
export class Message {
  display: boolean = true;

  constructor(
    public value: string,
    public level: MessageLevel = MessageLevel.INFO
  ) {}

  static success(message: string): Message {
    return new Message(message, MessageLevel.SUCCESS);
  }
  static info(message: string): Message {
    return new Message(message, MessageLevel.INFO);
  }
  static warning(message: string): Message {
    return new Message(message, MessageLevel.WARNING);
  }
  static error(message: string): Message {
    return new Message(message, MessageLevel.ERROR);
  }

  hide(): void {
    this.display = false;
  }
}
