import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChatComponent } from './chat/chat.component';

@Component({
  standalone: true,
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
  imports: [ChatComponent, CommonModule],
})
export class ChatsComponent implements OnInit {
  conversations = [
    {
      avatar: 'url1.jpg',
      name: 'Abhijit Mophare',
      time: '12.45pm',
      lastmsg: 'Good Work',
    },
    {
      avatar: 'url2.jpg',
      name: 'John Doe',
      time: '2.30pm',
      lastmsg: 'Hello there!',
    },
    {
      avatar: 'url3.jpg',
      name: 'Jane Smith',
      time: '10.15am',
      lastmsg: 'See you soon!',
    },
    {
      avatar: 'url4.jpg',
      name: 'Michael Johnson',
      time: '4.00pm',
      lastmsg: 'Great job!',
    },
    {
      avatar: 'url5.jpg',
      name: 'Emily Brown',
      time: '8.45am',
      lastmsg: 'Thanks for the update.',
    },
    {
      avatar: 'url6.jpg',
      name: 'William Wilson',
      time: '5.20pm',
      lastmsg: 'Can we meet tomorrow?',
    },
    {
      avatar: 'url7.jpg',
      name: 'Sophia Lee',
      time: '1.10pm',
      lastmsg: 'Sure, no problem!',
    },
    {
      avatar: 'url8.jpg',
      name: 'Daniel Martinez',
      time: '11.30am',
      lastmsg: 'Got it!',
    },
    {
      avatar: 'url9.jpg',
      name: 'Olivia Garcia',
      time: '6.05pm',
      lastmsg: 'See you later!',
    },
    {
      avatar: 'url10.jpg',
      name: 'James Nguyen',
      time: '9.50am',
      lastmsg: 'Have a great day!',
    },
    {
      avatar: 'url11.jpg',
      name: 'Ava Hernandez',
      time: '3.15pm',
      lastmsg: 'That sounds good.',
    },
    {
      avatar: 'url12.jpg',
      name: 'Noah Robinson',
      time: '7.40am',
      lastmsg: 'Please confirm the meeting.',
    },
    {
      avatar: 'url13.jpg',
      name: 'Isabella White',
      time: '1.20pm',
      lastmsg: 'Let me check.',
    },
    {
      avatar: 'url14.jpg',
      name: 'Ethan Scott',
      time: '6.30pm',
      lastmsg: 'I appreciate your help.',
    },
    {
      avatar: 'url15.jpg',
      name: 'Mia Green',
      time: '11.00am',
      lastmsg: 'What do you think?',
    },
    {
      avatar: 'url16.jpg',
      name: 'Alexander Hall',
      time: '2.55pm',
      lastmsg: 'This is urgent!',
    },
    {
      avatar: 'url17.jpg',
      name: 'Camila Lewis',
      time: '9.15am',
      lastmsg: "Let's do it!",
    },
    {
      avatar: 'url18.jpg',
      name: 'Benjamin King',
      time: '4.20pm',
      lastmsg: 'Looking forward to it.',
    },
    {
      avatar: 'url19.jpg',
      name: 'Luna Turner',
      time: '10.25am',
      lastmsg: 'Keep me updated.',
    },
    {
      avatar: 'url20.jpg',
      name: 'Leo Martinez',
      time: '3.50pm',
      lastmsg: "I'm on my way!",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
