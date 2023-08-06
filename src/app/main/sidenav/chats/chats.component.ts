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
      unread: '23',
    },
    {
      avatar: 'url2.jpg',
      name: 'Rajesh Kumar',
      time: '2.30pm',
      lastmsg: 'Hello there!',
      unread: '5',
    },
    {
      avatar: 'url3.jpg',
      name: 'Priya Singh',
      time: '10.15am',
      lastmsg: 'See you soon!',
      unread: '10',
    },
    {
      avatar: 'url4.jpg',
      name: 'Sneha Patel',
      time: '4.00pm',
      lastmsg: 'Great job!',
      unread: '2',
    },
    {
      avatar: 'url5.jpg',
      name: 'Amit Sharma',
      time: '8.45am',
      lastmsg: 'Thanks for the update.',
      unread: '7',
    },
    {
      avatar: 'url6.jpg',
      name: 'Anjali Gupta',
      time: '5.20pm',
      lastmsg: 'Can we meet tomorrow?',
      unread: '15',
    },
    {
      avatar: 'url7.jpg',
      name: 'Nikhil Verma',
      time: '1.10pm',
      lastmsg: 'Sure, no problem!',
      unread: '3',
    },
    {
      avatar: 'url8.jpg',
      name: 'Meera Reddy',
      time: '11.30am',
      lastmsg: 'Got it!',
      unread: '8',
    },
    {
      avatar: 'url11.jpg',
      name: 'Aryan Kapoor',
      time: '3.15pm',
      lastmsg: 'That sounds good.',
      unread: '6',
    },
    {
      avatar: 'url12.jpg',
      name: 'Shreya Deshmukh',
      time: '7.40am',
      lastmsg: 'Please confirm the meeting.',
      unread: '9',
    },
    {
      avatar: 'url13.jpg',
      name: 'Pranav Singh',
      time: '1.20pm',
      lastmsg: 'Let me check.',
      unread: '1',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
