import App from './app';
import 'dotenv/config';
import validateEnv from './utils/validateEnv';
import BooksController from './books/books.controller';

validateEnv();

const app = new App(
  5001,
  [ 
      new BooksController()
  ]
);
 
app.listen();

export default app;