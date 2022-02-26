import React from "react";
import {observer} from "mobx-react";
import IBooksProps from "./books.view.props";
import BookListComponent from "../common/components/bookList.component";
import LeftPanelComponent from "../common/components/leftPanel.component";
import Book from "./book.model";
import "./books.css";

@observer
class BooksView extends React.Component<IBooksProps, any> { 
    render() {
        const books = [new Book("test",["author1", "author2"],"publisher test","2019","Testing description hauhfhasofiasjfiwqjfiwqjifwqjiwfqjifw ifhqwioqwhfifhqw ihfwqiohfwihfqiwohf ihwfihwfiohfioqhfwiohfwq iwhqfiwf, fhqwfwhqhfwqfiw iwhqfiwfqhiohfwwqf ihfwqihfwihfwqihqwfihfwihqffwihfwqihfifw","http://books.google.com/books/content?id=u2NQAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",["cat1", "cat2"],"200")];
        return <div className="container">
            <div className="content">
                <LeftPanelComponent />
                <BookListComponent books={books}/>
            </div>
            
            </div>
    }
}

export default BooksView;