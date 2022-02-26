import IBookItemComponentProps from './bookItem.component.props';
import React from 'react';
import {observer} from "mobx-react";
import BookItemComponent from "../../common/components/bookItem.component";
import BookSearchComponent from './bookSearch.component';
import "./styles/bookList.css"

@observer
class BookListComponent extends React.Component<IBookItemComponentProps, any> {
    render() {
        return <div className="book-list-container">
                <BookSearchComponent />
                <BookItemComponent books={this.props.books}/>
            </div>
    } 
}

export default BookListComponent;