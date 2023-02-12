import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from "../../../shared/services/api.service";
import { Subject, switchMap, takeUntil, tap } from "rxjs";
import { ApiPageAbstract } from "../../../shared/abstract/api-page.abstract";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ApiPageAbstract implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  toggleCards(button: string) {
    this.titleCount = button;
    this.hasChanges$.next(true);
  }


  constructor(public override apiService: ApiService) {
    super(apiService)
  }

  ngOnInit(): void {
    this.gridDataBooks = this.hasChanges$.pipe(
      takeUntil(this.destroy$),
      switchMap(() => {
        if(this.titleCount === 'History') {
          return this.apiService.getHistory();
        } else if(this.titleCount === 'Business') {
          return this.apiService.getBusiness();
        } else if(this.titleCount === 'Detective') {
          return this.apiService.getDetectives();
        } else if(this.titleCount === 'Psychology') {
          return this.apiService.getPsychology();
        } else if(this.titleCount === 'Fantasy') {
          return this.apiService.getFantasy();
        } else {
          return this.apiService.getAllBooks();
        }
      }),
      tap(data => {
        console.log(data);
        this.gridDataCount = data.length;
      })
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
