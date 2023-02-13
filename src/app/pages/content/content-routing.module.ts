import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { BooksDetailsComponent } from "../../shared/custom-components/books-details/books-details.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books/:id', component: BooksDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
