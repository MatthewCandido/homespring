import React from "react";
import {observer} from "mobx-react";
import IBooksProps from "./books.view.props";
import BookListComponent from "../common/components/bookList.component";
import LeftPanelComponent from "../common/components/leftPanel.component";
import "./books.css";

@observer
class BooksView extends React.Component<IBooksProps, any> { 
    render() {
        const vmodel = this.props.vmodel;
        return <div className="container">
            <div className="content">
                <LeftPanelComponent vmodel={this.props.vmodel} />
                <BookListComponent vmodel={vmodel} books={vmodel.books || []}/>
            </div>
            
            </div>
    }
}

export default BooksView;