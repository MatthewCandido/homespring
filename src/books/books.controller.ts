import express from 'express';
import Controller from '../interfaces/controller.interface';
import BooksService from './books.service';
import InternalServerErrorException from '../exceptions/InternalServerErrorException';

class BooksController implements Controller {
    public path = '/books';
    public router = express.Router();
    private booksService = new BooksService();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(`${this.path}/:q`, this.getBooks);
    }

    private getBooks = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        this.booksService.getBooksBySearch(request.params.q).then(books => {
            response.send(books)
        }, (err) => {
            next(new InternalServerErrorException(err));
        })
    }

}

export default BooksController;