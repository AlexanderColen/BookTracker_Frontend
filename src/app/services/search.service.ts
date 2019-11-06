import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    constructor(protected httpClient: HttpClient) { }

    /**
     * Search for a book using the Google Books API.
     * @param query The criteria for the search.
     */
    searchOnQuery(query: string): Observable<any> {
        const url = environment.google_api + query;
        return this.httpClient.get(url);
    }
}
