import { Component } from '@angular/core';
import { IBook } from '../interfaces/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books: IBook[] = [
    {
      title: 'Eloquent JavaScript, Third Edition',
      author: 'John Doe',
      imageUrl: 'https://picsum.photos/id/24/280/200',
      description:
        'JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
    },
    {
      title: 'Practical Modern JavaScript',
      author: 'John Doe',
      imageUrl: 'https://picsum.photos/id/24/280/200',
      description:
        'To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.',
    },
    {
      title: 'Understanding ECMAScript 6',
      author: 'John Doe',
      imageUrl: 'https://picsum.photos/id/24/280/200',
      description:
        'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.',
    },
    {
      title: 'Speaking JavaScript',
      author: 'John Doe',
      imageUrl: 'https://picsum.photos/id/24/280/200',
      description:
        'Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.',
    },
    {
      title: 'Learning JavaScript Design Patterns',
      author: 'John Doe',
      imageUrl: 'https://picsum.photos/id/24/280/200',
      description:
        'With Learning JavaScript Design Patterns, you will learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.',
    },
    {
      title: 'You Do not Know JS Yet',
      author: 'John Doe',
      imageUrl: 'https://picsum.photos/id/24/280/200',
      description:
        'The worldwide best selling You Do not Know JS book series is back for a 2nd edition: You Do not Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.',
    },
    {
      title: 'Pro Git',
      author: 'John Doe',
      imageUrl: 'https://picsum.photos/id/24/280/200',
      description:
        'Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.',
    },
    {
      title: 'Rethinking Productivity in Software Engineering',
      author: 'John Doe',
      imageUrl: 'https://picsum.photos/id/24/280/200',
      description:
        'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
    },
  ];
}
