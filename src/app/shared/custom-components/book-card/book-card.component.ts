import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { BooksModel } from "../../models/books.model";


@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  @Input() book!: BooksModel;

  getBookDetails(id: string) {
    if(id) {
      this.router.navigate(['/books', id]);
    }
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
