import Book from '../books/book.model';
import BooksView from '../books/books.view';
import BooksViewModel from '../books/books.viewmodel';

describe("Books", () => {
    it("should create a Book model", () => {
        const b = new Book("title", ["author"], "publisher", "publishedDate", "description", "thumbnail", ["category"], "pageCount", -1, 0);
        expect(b.title).toBe("title");
        expect(b.authors).toBeDefined();
        expect(b.publisher).toBe("publisher");
        expect(b.publishedDate).toBe("publishedDate");
        expect(b.description).toBe("description");
        expect(b.thumbnail).toBe("thumbnail");
        expect(b.categories).toBeDefined();
        expect(b.pageCount).toBe("pageCount");
        expect(b.averageRating).toBe(-1);
        expect(b.totalItems).toBe(0);
    })

})
