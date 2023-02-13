import { Injectable } from '@angular/core';
import { Observable, pluck } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BooksModel, BooksModelApi } from "../models/books.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrlBooks = 'https://www.googleapis.com/books/v1/volumes?q=time&maxResults=40&printType=all&key=AIzaSyBKbqRhuwEeQ2RxsBUyD7UxOPeTJZEgZPU'

  constructor(private http: HttpClient) { }


  getAllBooks(): Observable<BooksModel[]> {
    return this.http.get<BooksModelApi>(`${this.baseUrlBooks}`).pipe(
      pluck('items')
    );
  }

  getHistory(): Observable<BooksModel[]> {
    return this.http.get<BooksModelApi>(`https://www.googleapis.com/books/v1/volumes?q=history+subject`).pipe(
      pluck('items')
    );
  }

  getBusiness(): Observable<BooksModel[]> {
    return this.http.get<BooksModelApi>(`https://www.googleapis.com/books/v1/volumes?q=business+subject`).pipe(
      pluck('items')
    );
  }

  getDetectives(): Observable<BooksModel[]> {
    return this.http.get<BooksModelApi>(`https://www.googleapis.com/books/v1/volumes?q=detective+subject`).pipe(
      pluck('items')
    );
  }

  getPsychology(): Observable<BooksModel[]> {
    return this.http.get<BooksModelApi>(`https://www.googleapis.com/books/v1/volumes?q=psychology+subject`).pipe(
      pluck('items')
    );
  }
  getFantasy(): Observable<BooksModel[]> {
    return this.http.get<BooksModelApi>(`https://www.googleapis.com/books/v1/volumes?q=fantasy+subject`).pipe(
      pluck('items')
    );
  }


  getBookByTitle(id: string): Observable<BooksModel> {
    return this.http.get<BooksModel>(`https://www.googleapis.com/books/v1/volumes/${id}`);
  }


}
