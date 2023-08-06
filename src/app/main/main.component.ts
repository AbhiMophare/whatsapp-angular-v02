import { Component, OnInit } from '@angular/core';
import { ConversationComponent } from './conversation/conversation.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [SidenavComponent, ConversationComponent],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
