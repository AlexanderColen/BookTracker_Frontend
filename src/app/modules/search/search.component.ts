import { Component, OnInit } from '@angular/core';

import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    foundBooks: any[];

    constructor(protected searchService: SearchService) { }

    ngOnInit() { }

    /**
     * Search for a book.
     * @param query The criteria for the Search.
     */
    searchForBooks(query: string) {
        this.searchService.searchOnQuery(query)
            .subscribe(res => {
                this.foundBooks = res.items;
            },
            err => {
                console.log(err);
            });
    }
}
