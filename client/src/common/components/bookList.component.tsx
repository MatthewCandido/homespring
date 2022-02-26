import IBookListComponentProps from './bookList.component.props';
import React from 'react';
import {observer} from "mobx-react";
import BookItemComponent from "../../common/components/bookItem.component";
import BookSearchComponent from './bookSearch.component';
import "./styles/bookList.css"
import Pagination from '@mui/material/Pagination';

@observer
class BookListComponent extends React.Component<IBookListComponentProps, any> {
    render() {
        const books = this.props.vmodel.books || [];
        return <div className="book-list-content">
                <div className="book-list-container">
                    <BookSearchComponent vmodel={this.props.vmodel} />
                    <BookItemComponent books={this.props.books}/>
                </div>
                <div className="pagination-container">
                    <Pagination onChange={this.props.vmodel.paginationChange} count={this.props.vmodel.getTotalItems() / 5} variant="outlined" shape="rounded" />
                </div>
            </div>
    } 
}

export default BookListComponent;