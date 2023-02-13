import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../services/api.service";
import { Subject, switchMap, takeUntil, tap } from "rxjs";
import { BooksModel } from "../../models/books.model";

@Component({
  selector: 'app-movies-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})
export class BooksDetailsComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  destroy$: Subject<boolean> = new Subject<boolean>();


  book: BooksModel | undefined;
  authors!: string;
  categories!: string;

  id: string = '';

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.destroy$),
      tap(params => this.id = params['id']),
      switchMap(() => this.apiService.getBookByTitle(this.id)),
      tap(data => {
        this.book = data;
        if(data.volumeInfo.authors) {
          data.volumeInfo.authors.forEach(item => {
            this.authors = this.authors ? this.authors + ', ' + item : item;
          })
        }
        if(data.volumeInfo.categories) {
          data.volumeInfo.categories.forEach(item => {
            this.categories = this.categories ? this.categories + ', ' + item : item;
          })
        }

      })
    ).subscribe()
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
