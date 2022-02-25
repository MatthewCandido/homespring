import axios from 'axios';
import Book from './books.model'

class BooksService {
    private GOOGLE_BOOKS_ENDPOINT = process.env.GOOGLE_BOOKS_ENDPOINT;
    private GOOGLE_BOOKS_APIKEY = process.env.GOOGLE_BOOKS_API_KEY;
    
    public getBooksBySearch = async (q: string) => {
        return new Promise( async (resolve, reject) => {
            const options = {
                host: this.GOOGLE_BOOKS_ENDPOINT,
                path: `/books/v1/volumes?q=${q}&key=${this.GOOGLE_BOOKS_APIKEY}`
            };
            const response = await axios.get(`${options.host}${options.path}`);
            if (!response) 
                reject();
                
            const books: Array<object> = [];
            response.data.items.forEach( (item:any, idx: number) => {       
                books.push({
                    "title": item.volumeInfo.title,
                    "authors": item.volumeInfo.authors,
                    "pageCount": item.volumeInfo.pageCount,
                    "publisher": item.volumeInfo.publisher, 
                    "publishedDate": item.volumeInfo.publishedDate, 
                    "description": item.volumeInfo.description, 
                    "thumbnail": item.volumeInfo.imageLinks.thumbnail
                }); 
            });
            resolve(books);
        }) 
    }
 }

 export default BooksService;