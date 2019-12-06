import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AppService } from "../services/app.service";
import { Observable } from "rxjs";
import { Message } from "../interfaces/message.model";

import { Action } from "../interfaces/action.model";
import { Event } from "../interfaces/event.model";
import { User } from "../interfaces/user.model";
import { SocketService } from "../services/socket.service";

@Component({
  selector: "app-chat-etudiant",
  templateUrl: "./chat-etudiant.component.html",
  styleUrls: ["./chat-etudiant.component.scss"]
})
export class ChatEtudiantComponent implements OnInit {
  chatForm = this.fb.group({
    prenom: ["", Validators.required],
    age: [18, Validators.min(16)]
  });
  blurBackground$: Observable<boolean>;

  action = Action;
  user: User;
  messages: Message[] = [];
  messageContent: string;
  ioConnection: any;

  chatOn = false;

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private socketService: SocketService
  ) {}

  ngOnInit() {
    this.blurBackground$ = this.appService.navOpen$;
    this.initIoConnection();
  }

  onSubmit() {
    const name = this.chatForm.get("prenom").value;
    const age = this.chatForm.get("age").value;
    const id = Math.floor(Math.random() * 1000000) + 1;

    const user = { id, name, age } as User;
    this.user = user;
    this.chatOn = true;
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService
      .onMessage()
      .subscribe((message: Message) => {
        this.messages.push(message);
      });

    this.socketService.onEvent(Event.CONNECT).subscribe(() => {
      console.log("connected");
    });

    this.socketService.onEvent(Event.DISCONNECT).subscribe(() => {
      console.log("disconnected");
    });
  }

  public sendMessage(message: string): void {
    if (!message) {
      return;
    }

    this.socketService.send({
      from: this.user,
      content: message
    });
    this.messageContent = null;
  }

  public sendNotification(params: any, action: Action): void {
    let message: Message;

    if (action === Action.JOINED) {
      message = {
        from: this.user,
        action
      };
    } else if (action === Action.RENAME) {
      message = {
        action,
        content: {
          username: this.user.name,
          previousUsername: params.previousUsername
        }
      };
    }

    this.socketService.send(message);
  }
}
