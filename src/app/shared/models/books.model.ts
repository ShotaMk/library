export interface BooksModelApi {
  kind: string,
  totalItems: number,
  items: BooksModel[]
}
 export interface BooksModel {
   id: string
   volumeInfo: {
     title: string,
     imageLinks: {
       thumbnail: string
     }
   }
 }

