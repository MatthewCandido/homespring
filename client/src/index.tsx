import {render} from "react-dom";

import BooksView from "./books/books.view";
import BookViewModel from "./books/books.viewmodel";

const vmodel = new BookViewModel();

render(
    <BooksView  vmodel={vmodel} />,
    document.getElementById('root')
);