import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders     } from '@angular/common/http';

import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
    private booksApi: string = environment.develop_api + 'books';
    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    constructor(protected httpClient: HttpClient) { }

    /**
     * Add a new Book to the backend.
     * @param book A Book object that needs to be added.
     */
    addBook(book: Book): Observable<any> {
        return this.httpClient.post(this.booksApi, JSON.stringify(book), this.options);
    }

    /**
     * Fetch all the Books from the backend.
     */
    getBooks(): Observable<any> {
        return this.httpClient.get(this.booksApi);
    }
}
