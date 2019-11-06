export class Book {
    bookID: number;
    title: string;
    author: string;
    pages: number;

    constructor(bookID: number,
                title: string,
                author: string,
                pages: number) {
        this.bookID = bookID;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
