import { Component, OnInit } from '@angular/core';

import { BooksService } from 'src/app/services/books.service';

import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    myBooks: Book[];

    constructor(protected booksService: BooksService) { }

    ngOnInit() {
        this.getBooks();
    }

    /**
     * Fetch all the Books from the backend.
     */
    getBooks() {
        this.booksService.getBooks()
            .subscribe(res => {
                this.myBooks = res;
            },
            err => {
                console.log(err);
            });
    }

    /**
     * Add a new Book to the backend.
     */
    addBook(title: string, author: string, pages: number) {
        const book = new Book(-1, title, author, pages);

        this.booksService.addBook(book)
        .subscribe(res => {
            this.myBooks.push(res);
        },
        err => {
            console.log(err);
        });
    }
}
