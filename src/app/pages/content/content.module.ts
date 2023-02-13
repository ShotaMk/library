import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from "./content-routing.module";
import { ApiService } from "../../shared/services/api.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { SearchInputComponent } from "../../shared/custom-components/search-input/search-input.component";
import { MatInputModule }  from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { SearchPipe } from "../../shared/search-pipes/search.pipe";
import { ButtonComponent } from "../../shared/custom-components/button/button.component";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from "../../shared/custom-components/header/header.component";
import { SnackBarService } from "../../shared/services/snackbar.service";
import { ErrorHandlingInterceptor } from "../../core/interceptors/error-handling.interceptor";
import { BookCardComponent } from "../../shared/custom-components/book-card/book-card.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        HomeComponent,
        SearchInputComponent,
        SearchPipe,
        ButtonComponent,
        HeaderComponent,
        BookCardComponent
    ],
    imports: [
        ContentRoutingModule,
        CommonModule,
        HttpClientModule,
        MatInputModule,
        FormsModule,
        MatSnackBarModule,
        MatButtonModule,
    ],
    providers: [
      ApiService,
      SnackBarService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorHandlingInterceptor,
        multi: true,
      }
    ],
  exports: [
    SearchInputComponent,
    ButtonComponent,
    HeaderComponent,
    BookCardComponent
  ],
    bootstrap: []
})
export class ContentModule { }
