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
       thumbnail: string,
     },
     authors: string[],
     publishedDate: string,
     description: string,
     pageCount: number,
     categories: string[],
     infoLink: string[],
     publisher: string
   }
 }

