import BooksViewModel from "../../books/books.viewmodel";
import Book from '../../books/book.model';

interface IBookListComponentProps {
    books: Array<Book>,
    vmodel: BooksViewModel
}

export default IBookListComponentProps;