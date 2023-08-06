import { Component, OnInit, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  @Input() conv: {
    avatar: String;
    name: String;
    time: String;
    lastmsg: String;
  };

  constructor() {}

  ngOnInit() {}
}
