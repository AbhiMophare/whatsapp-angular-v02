import { Component, OnInit } from '@angular/core';
import { ChatComponent } from './chat/chat.component';

@Component({
  standalone: true,
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
  imports: [ChatComponent],
})
export class ChatsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
