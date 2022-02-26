import IBookItemComponentProps from './bookItem.component.props';
import React from 'react';
import {observer} from "mobx-react";
import "./styles/bookItem.css"

@observer
class BookItemComponent extends React.Component<IBookItemComponentProps, any> {
    render() {
        const books = this.props.books;
        return <div className="book-item-component-container">
                <div>
                    {books.map( (book) => {
                        console.log(book)
                        let authors = book.authors && book.authors.length ? book.authors[0] : "";
                        if (book.authors && book.authors.length > 1)
                            authors = `${authors}, ${book.authors[1]}`;
                        
                        let categories = book.categories && book.categories.length ? book.categories[0] : "";
                        if (book.categories && book.categories.length > 1)
                            categories = `${categories}, ${book.categories[1]}`;
                        
                        return(<div>
                            <div className="row">
                                <div><img src={book.thumbnail} /></div>
                                <div className="author-categories">
                                    <span className="authors">{`${authors}`}</span>
                                    <span className="bullet">{`\u2022`}</span>
                                    <span className="categories">{`${categories}`}</span>
                                </div>
                            </div>

                            <div className="row left-alignment">
                                <span className="title">{`${book.title}`}</span>
                            </div>

                            <div className="row left-alignment">
                                <span className="info-line">{`${book.pageCount} pages  \u2022  ${book.publishedDate}  \u2022  ${book.publisher}`}</span>
                            </div>

                            <div className="row left-alignment">
                                <span className="info-line description">{book.description}</span>
                            </div>

                            <hr />

                        </div>)
                    })}
                </div>
            </div>
    } 
}

export default BookItemComponent;