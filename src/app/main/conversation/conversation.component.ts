import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { MessageAreaComponent } from './message-area/message-area.component';
import { MessageHeaderComponent } from './message-header/message-header.component';

@Component({
  standalone: true,
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  imports: [
    FooterComponent,
    MessageAreaComponent,
    MessageHeaderComponent,
    CommonModule,
  ],
})
export class ConversationComponent implements OnInit {
  conversationStarted: boolean = true;
  constructor() {}

  ngOnInit() {}
}
