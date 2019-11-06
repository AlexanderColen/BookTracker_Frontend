import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './modules/books/books.component';
import { SearchComponent } from './modules/search/search.component';

import { BooksService } from './services/books.service';
import { SearchService } from './services/search.service';

const appRoutes: Routes = [
    { path: '',	redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: BooksComponent },
    { path: 'search', component: SearchComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        BooksComponent,
        SearchComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        BooksService,
        SearchService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
